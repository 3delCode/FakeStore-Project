import React, { useState } from "react";
import Swal from "sweetalert2";
import Aos from "aos";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // التحقق من الاسم
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]{0,30}$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces (2-30 chars)";
    }

    // التحقق من الإيميل
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // رسالة نجاح
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us.",
      timer: 2000,
      showConfirmButton: false,
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <div className="container py-5" data-aos='fade-up'>
      <h1 className="fw-bold text-center mb-3">Contact Us</h1>
      <p className="text-center text-muted mb-5">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <div className="row justify-content-center" data-aos='fade-up'>
        <div className="col-md-7">
          <div className="card shadow-lg p-4 border-0 rounded-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  name="message"
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100 shadow-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 mt-5 mt-md-0" data-aos='fade-up'>
          <div className="p-4 shadow-sm rounded-4 border">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p><strong>Email:</strong> support@fakestore.com</p>
            <p><strong>Phone:</strong> +20 123 456 7890</p>
            <p><strong>Address:</strong> 123 Fake Street, Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
