import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sent'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet. To make this form actually send email,
    // you could:
    //   1. Use a form service like Formspree or Getform - point the <form>
    //      action at the endpoint they give you and you don't need a backend.
    //   2. Use EmailJS from the client to send mail directly from React.
    //   3. Build a small API route (Node/Express) that receives this
    //      formData via fetch() and sends the email server-side.
    console.log("Contact form submitted:", formData);
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s talk</h2>
          <p>
            I&apos;m open to internship opportunities, freelance work, and
            collaborating on projects. The best ways to reach me:
          </p>
          <ul className="contact__list">
            <li>
              <FiMail aria-hidden="true" />{" "}
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </li>
            <li>
              <FiGithub aria-hidden="true" />{" "}
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noreferrer"
              >
                github.com/your-github-username
              </a>
            </li>
            <li>
              <FiLinkedin aria-hidden="true" />{" "}
              <a href="#">Add your LinkedIn URL</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message <FiSend />
          </button>
          {status === "sent" && (
            <p className="contact__status" role="status">
              Thanks - this form isn&apos;t wired to a backend yet, so nothing
              was actually sent. See the comment in Contact.jsx for how to
              connect it.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
