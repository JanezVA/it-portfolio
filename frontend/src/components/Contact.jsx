import React, { useState } from 'react';

export default function Contact({ about }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please verify the backend is running, or try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        {/* Left column: Contact Info */}
        <div className="contact-info">
          <div className="glass-panel contact-card">
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">✉</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>janezveraac@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Barangobong, Sta. Lucia, Ilocos Sur (Open to Relocation)</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">💼</div>
              <div className="contact-text">
                <h4>Availability</h4>
                <p>Open for full-time roles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="glass-panel contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration opportunity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Janez, let's talk about..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <div className={`submit-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
