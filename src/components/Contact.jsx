import { useState } from 'react';
import Footer from './Footer';
import MaskedTitle from './MaskedTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: ''
  });
  const [statusMsg, setStatusMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rishamsoni.tech@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.senderName || !formData.senderMessage) {
      setStatusMsg('Please enter your name and message.');
      return;
    }

    setIsSubmitting(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: formData.senderName,
          senderEmail: formData.senderEmail,
          senderMessage: formData.senderMessage,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Email dispatch failed.');
      }

      setIsSent(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Email send error:', err);
      setStatusMsg(err.message || 'Failed to send message. Please try again or email directly.');
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSent(false);
    setFormData({ senderName: '', senderEmail: '', senderMessage: '' });
    setStatusMsg('');
  };

  return (
    <>
      <section id="contact" className="container contact-page-section">
        <div className="contact-beacon-wrapper">
          {/* Centered Header */}
          <div className="contact-header centered">
            <div className="beacon-eyebrow font-mono uppercase">
              <span>Get in Touch</span>
            </div>

            <MaskedTitle text="LET'S BUILD TOGETHER" className="section-title centered uppercase" />

            <div className="divider centered" />

            <p className="contact-lead centered text-gray">
              Have a project idea, a full-stack challenge, or an engineering opportunity to discuss? Send a direct message below.
            </p>
          </div>

          {/* Centered Message Card */}
          <div className="cosmic-monolith-card font-mono">
            <div className="monolith-topbar">
              <span className="beacon-freq-text text-gray uppercase">
                {isSent ? 'Delivered' : isSubmitting ? 'Sending...' : 'Direct Message'}
              </span>
              <span className="monolith-title uppercase">
                rishamsoni.tech@gmail.com
              </span>
            </div>

            {isSent ? (
              <div className="sent-success-stage font-mono">
                <div className="sent-success-icon-wrap">
                  <span className="sent-success-check">✓</span>
                </div>
                <h3 className="sent-success-title uppercase">Message Dispatched</h3>
                <p className="sent-success-desc text-gray">
                  Thank you, <span style={{ color: '#ffffff' }}>{formData.senderName}</span>! Your message has been sent successfully. I’ll review your details and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="send-another-btn font-mono uppercase"
                  onClick={handleResetForm}
                >
                  Send Another Message ↺
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-field">
                  <label className="field-label text-gray uppercase" htmlFor="sender-name">
                    Your Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    className="field-input"
                    placeholder="e.g. Alex Mercer"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label text-gray uppercase" htmlFor="sender-email">
                    Your Email
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    className="field-input"
                    placeholder="alex@company.com"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label text-gray uppercase" htmlFor="sender-message">
                    Your Message
                  </label>
                  <textarea
                    id="sender-message"
                    className="field-input field-textarea"
                    placeholder="Describe your project, timeline, or engineering goals..."
                    rows={4}
                    value={formData.senderMessage}
                    onChange={(e) => setFormData({ ...formData, senderMessage: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="stellar-transmit-btn uppercase font-mono"
                  disabled={isSubmitting}
                >
                  <span className="transmit-btn-text">
                    {isSubmitting ? 'Sending Message...' : 'Send Message ➔'}
                  </span>
                </button>

                {statusMsg && (
                  <div className="form-status-msg font-mono">
                    {statusMsg}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Centered Direct Comms Deck */}
          <div className="direct-comms-deck font-mono">
            <div className="comms-capsule">
              <div className="comms-channel-info">
                <span className="comms-tag text-gray">Email:</span>
                <span className="comms-email">rishamsoni.tech@gmail.com</span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-signal-btn font-mono"
              >
                {copied ? '✓ Copied' : 'Copy Email'}
              </button>
            </div>

            <div className="orbit-availability-tag text-gray">
              <span>Available for new projects & opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
