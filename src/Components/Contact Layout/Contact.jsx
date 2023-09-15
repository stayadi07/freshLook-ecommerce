import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-wrapper">
      <form action="">
        <div className="newsletter-contact-wrapper">
          <div className="newsletter-container">
            <div className="newsletter-text">Newsletter</div>
            <div className="newsletter-desc">
              Get news about articles and updates in your inbox.
            </div>
          </div>
          <div className="contact-container">
            <input
              className="input-fields-contact"
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <input
              className="input-fields-contact"
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <input
              className="input-fields-contact"
              type="text"
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="big-font-button-container">
          <div>
            <div className="big-font-text">GET</div>
            <div className="big-font-text">IN TOUCH</div>
          </div>

          <button className="send-btn" onSubmit={handleSubmit}>
            <div className="send-text">SEND</div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
