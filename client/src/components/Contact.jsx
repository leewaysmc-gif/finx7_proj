import React, { useEffect, useState, memo } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { Helmet } from "react-helmet-async";

const ContactInfoItem = memo(({ Icon, label, value, href }) => (
  <div className="flex items-center gap-4">
    <div className="bg-orange-300/20 p-3 rounded-full">
      <Icon className="text-orange-300 text-xl" aria-hidden="true" />
    </div>
    <div>
      <p className="text-gray-400 text-sm uppercase text-start tracking-wider">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-white hover:text-orange-300 transition-colors text-lg font-medium"
          aria-label={`${label}: ${value}`}
        >
          {value}
        </a>
      ) : (
        <p className="text-white text-lg font-medium">{value}</p>
      )}
    </div>
  </div>
));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [visualsReady, setVisualsReady] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisualsReady(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((err) => !err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("_captcha", "false"); // disable formsubmit captcha

    try {
      await fetch("https://formsubmit.coc99b13a041fe3e8287b38c624babddab", {
        method: "POST",
        body: data,
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      // Optionally, you can handle and show an error message here
    }
  };

  return (
    <section
      id="contactus"
      className="relative py-28 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen overflow-hidden"
      aria-labelledby="contactus-heading"
    >
      <Helmet>
        <title>Contact Us - Finx7 | Get in Touch for Financial Solutions</title>
        <meta
          name="description"
          content="Contact Finx7 for smart financial solutions. Have a question or project inquiry? Fill the form or reach us via email or phone."
        />
        <meta
          name="keywords"
          content="contact finx7, financial solutions contact, get in touch, financial advice, client support"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.finx7.com/contactus" />
      </Helmet>

      {visualsReady && (
        <>
          <div className="absolute top-16 left-16 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-16 right-16 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-left md:text-center mb-20">
          <h2
            id="contactus-heading"
            className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-300 to-orange-300 bg-clip-text mb-6 drop-shadow-lg"
          >
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed md:mx-auto">
            Have questions or want to work with us? Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 border border-gray-700 shadow-2xl rounded-3xl p-10 space-y-8 relative text-left"
            noValidate
            aria-describedby="contact-form-errors"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-orange-300/20 to-yellow-400/20 rounded-3xl blur opacity-50 pointer-events-none"></div>

            <div className="relative grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-orange-300 font-medium mb-2 text-sm uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-700 border p-4 rounded-xl focus:ring-4 focus:ring-orange-300/50 outline-none transition text-white placeholder-gray-400 ${
                    errors.name ? "border-red-500" : "border-gray-600 focus:border-orange-300"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="text-red-400 mt-2 text-sm flex items-center gap-1" role="alert">
                    ⚠ {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-orange-300 font-medium mb-2 text-sm uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-gray-700 border p-4 rounded-xl focus:ring-4 focus:ring-orange-300/50 outline-none transition text-white placeholder-gray-400 ${
                    errors.email ? "border-red-500" : "border-gray-600 focus:border-orange-300"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <span id="email-error" className="text-red-400 mt-2 text-sm flex items-center gap-1" role="alert">
                    ⚠ {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="message" className="text-orange-300 font-medium mb-2 text-sm uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`bg-gray-700 border p-4 rounded-xl focus:ring-4 focus:ring-orange-300/50 outline-none transition resize-none text-white placeholder-gray-400 ${
                  errors.message ? "border-red-500" : "border-gray-600 focus:border-orange-300"
                }`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              />
              {errors.message && (
                <span id="message-error" className="text-red-400 mt-2 text-sm flex items-center gap-1" role="alert">
                  ⚠ {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="relative w-full cursor-pointer bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-400 text-gray-900 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-orange-300/50 hover:scale-[1.02] transform transition duration-300 border-2 border-orange-300/30"
            >
              Send Message 🚀
            </button>

            {success && (
              <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center relative" role="alert">
                ✅ Your message has been sent successfully!
                <button
                  onClick={() => setSuccess(false)}
                  className="absolute top-2 right-3 text-black font-bold hover:text-gray-200"
                  aria-label="Close success message"
                >
                  ×
                </button>
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8 text-left md:text-center">
            <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <ContactInfoItem Icon={HiMail} label="Email" value="info@example.com" href="mailto:info@example.com" />
                <ContactInfoItem Icon={HiPhone} label="Phone" value="+1 234 567 890" href="tel:+1234567890" />
                <ContactInfoItem Icon={HiLocationMarker} label="Location" value="New York, NY" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-300/10 to-yellow-400/10 border border-orange-300/20 rounded-2xl p-9">
              <h4 className="text-orange-300 font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-gray-300">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
