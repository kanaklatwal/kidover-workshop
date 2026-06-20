import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function useEnquiryForm(onSuccess) {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = "Full name is required.";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!data.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!data.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))) {
      errs.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMessage(data.message);
        setValues({ name: "", email: "", phone: "" });
        onSuccess?.();
      } else {
        setStatus("error");
        // Map server field errors
        if (data.errors) {
          const fieldErrs = {};
          data.errors.forEach(({ field, message }) => {
            fieldErrs[field] = message;
          });
          setErrors(fieldErrs);
        }
        setServerMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Could not connect to the server. Please check your connection and try again."
      );
    }
  };

  const reset = () => {
    setStatus("idle");
    setServerMessage("");
    setValues({ name: "", email: "", phone: "" });
    setErrors({});
  };

  return { values, errors, status, serverMessage, handleChange, handleSubmit, reset };
}
