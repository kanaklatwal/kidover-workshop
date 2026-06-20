import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onEnroll={() => setFormOpen(true)} />
      <Hero onEnroll={() => setFormOpen(true)} />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm open={formOpen} onClose={() => setFormOpen(false)} />
      <Footer onEnroll={() => setFormOpen(true)} />
    </div>
  );
}
