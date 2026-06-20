const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store (replace with MongoDB for production)
const enquiries = [];

// POST /api/enquiry
app.post(
  "/api/enquiry",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email address"),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .matches(/^[6-9]\d{9}$/)
      .withMessage("Please enter a valid 10-digit Indian phone number"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { name, email, phone } = req.body;

    const enquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      workshop: "AI & Robotics Summer Workshop",
      submittedAt: new Date().toISOString(),
    };

    enquiries.push(enquiry);
    console.log("New enquiry received:", enquiry);

    return res.status(201).json({
      success: true,
      message: `Thank you, ${name}! Your enquiry has been received. We'll contact you at ${email} shortly.`,
      data: { id: enquiry.id, submittedAt: enquiry.submittedAt },
    });
  }
);

// GET /api/enquiries (admin view)
app.get("/api/enquiries", (req, res) => {
  res.json({ success: true, count: enquiries.length, data: enquiries });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
