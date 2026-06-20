# Kidrove — AI & Robotics Summer Workshop

A responsive workshop landing page + Express API built for Kidrove's children's education platform.

---

## 🗂️ Project Structure

```
kidrove-workshop/
├── frontend/          # React + Vite + Tailwind CSS
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
└── backend/           # Express.js REST API
    └── server.js
```

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run dev       # Starts on http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local   # optionally set VITE_API_URL
npm run dev       # Starts on http://localhost:3000
```

---

## 🔌 API Reference

### `POST /api/enquiry`

Register a new workshop enquiry.

**Request Body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "9876543210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you, Priya! Your enquiry has been received...",
  "data": {
    "id": "1719123456789",
    "submittedAt": "2026-06-20T10:30:00.000Z"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please enter a valid email address" }
  ]
}
```

### `GET /api/enquiries`

List all submitted enquiries (admin use).

### `GET /health`

Health check endpoint.

---

## ✅ Features

- **Hero Section** with workshop title, description, key stats, and dual CTA buttons
- **Workshop Details** with icon cards for age group, duration, mode, fee, start date
- **Learning Outcomes** grid with 6 detailed outcomes
- **FAQ Accordion** with 6 common questions (smooth open/close)
- **Registration Form Modal** with:
  - Client-side validation (name, email, 10-digit Indian phone)
  - Loading spinner during submission
  - Success & error states
  - Animated slide-up on mobile
- **Responsive** across mobile, tablet, and desktop
- **Express API** with field validation via `express-validator`

---

## 🎁 Bonus Features Implemented

- ✅ Tailwind CSS
- ✅ Client-side form validation with field-level errors
- ✅ Loading states on form submission
- ✅ Custom React hook (`useEnquiryForm`) for clean form state management
- ✅ Smooth scroll navigation
- ✅ Mobile-first responsive design
- ✅ Animated modal with backdrop
- ✅ Environment variable support via Vite

---

## 📦 Deployment

**Frontend → Vercel:**
```bash
cd frontend && npm run build
# Deploy dist/ folder to Vercel or Netlify
```

**Backend → Railway / Render:**
Set `PORT` environment variable. The server uses `process.env.PORT || 5000`.

**MongoDB (Optional):**
Replace the in-memory `enquiries` array in `server.js` with Mongoose. 
Install: `npm install mongoose`
Add: `MONGODB_URI=mongodb+srv://...` to your `.env`

---

## 🛠️ Tech Stack

| Layer    | Technology                    |
|----------|-------------------------------|
| Frontend | React 18, Vite, Tailwind CSS  |
| Backend  | Express.js, express-validator |
| Database | In-memory (MongoDB-ready)     |
| Fonts    | Inter (Google Fonts)          |
