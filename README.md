🤖 Kidrove — AI & Robotics Summer Workshop

A responsive workshop landing page with Express.js backend, built for Kidrove's children's education platform.

🌐 Live Demo: https://kidover-workshop.onrender.com


📸 Features


Hero Section — Workshop title, description, key stats, and Enroll CTA
Workshop Details — Age group, duration, mode, fee, start date
Learning Outcomes — 6 detailed outcome cards
FAQ Accordion — Smooth open/close with 6 common questions
Registration Form Modal — Slide-up with validation, loading state & success screen
Fully Responsive — Mobile, tablet, and desktop



🛠️ Tech Stack

LayerTechnologyFrontendReact 18, Vite, Tailwind CSSBackendExpress.js, express-validatorDatabaseIn-memory (MongoDB-ready)DeployedRender (frontend + backend)


🗂️ Project Structure

kidrove-workshop/
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── WorkshopDetails.jsx
│       │   ├── LearningOutcomes.jsx
│       │   ├── FAQ.jsx
│       │   ├── RegistrationForm.jsx
│       │   └── Footer.jsx
│       └── hooks/
│           └── useEnquiryForm.js
└── backend/
    └── server.js


🚀 Run Locally

Backend

bashcd backend
npm install
npm start        # http://localhost:5000

Frontend

bashcd frontend
npm install
cp .env.example .env.local
# set VITE_API_URL=http://localhost:5000
npm run dev      # http://localhost:3000


🔌 API Reference

POST /api/enquiry

Request Body:

json{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "9876543210"
}

Success (201):

json{
  "success": true,
  "message": "Thank you, Priya! Your enquiry has been received.",
  "data": {
    "id": "1719123456789",
    "submittedAt": "2026-06-20T10:30:00.000Z"
  }
}

Validation Error (400):

json{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please enter a valid email address" }
  ]
}

GET /api/enquiries — List all enquiries

GET /health — Health check


🎁 Bonus Features


✅ Tailwind CSS
✅ Client-side form validation with field-level errors
✅ Loading spinner during API submission
✅ Custom React hook (useEnquiryForm)
✅ Animated modal with backdrop dismiss
✅ Smooth scroll navigation
✅ Mobile-first responsive design
✅ Environment variable support via Vite
✅ Deployed on Render



⚠️ Note on Free Tier

Backend is hosted on Render's free tier which sleeps after 15 minutes of inactivity. The first form submission after idle may take ~30 seconds to respond while the server wakes up. This is expected behaviour on the free plan.


👤 Author

Built as part of the Kidrove frontend + backend assignment.