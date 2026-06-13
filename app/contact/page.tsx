'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', org: '', email: '', type: '', message: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch('https://formspree.io/f/mjgdykvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: form.name, organization: form.org, email: form.email, project_type: form.type, message: form.message }),
    });
    setSubmitting(false);
    if (res.ok) setSent(true);
  }

  return (
    <div className="page page-fade">
      <div className="contact-layout">
        {/* Left: info */}
        <div className="contact-left">
          <h1 className="contact-title">
            Get in<br /><em>Touch</em>
          </h1>
          <div className="contact-info-block">
            <div className="contact-info-label">Address</div>
            <div className="contact-info-val">
              1730 Rhode Island Ave. NW<br />Suite 1103<br />Washington, DC 20036
            </div>
          </div>
          <div className="contact-info-block">
            <div className="contact-info-label">Phone</div>
            <div className="contact-info-val">
              <a href="tel:2027602270">202-760-2270</a>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="contact-info-label">Email</div>
            <div className="contact-info-val">
              <a href="mailto:jtung@fieldtung.com">jtung@fieldtung.com</a>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="contact-info-label">Web</div>
            <div className="contact-info-val">
              <a href="http://www.fieldtung.com" target="_blank" rel="noreferrer">www.FieldTung.com</a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-right">
          {sent ? (
            <div>
              <p className="contact-title">Thank<br /><em>You</em></p>
              <p style={{ fontSize: 14, color: 'var(--mid)', marginTop: 24, lineHeight: 1.8, fontWeight: 300 }}>
                We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="contact-form-title">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px' }}>
                  <div className="form-row">
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-row">
                    <label className="form-label">Organization</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Firm or company"
                      value={form.org}
                      onChange={e => setForm({ ...form, org: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <label className="form-label">Project Type</label>
                  <select
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="">Select a service area</option>
                    <option>New Construction</option>
                    <option>Historic Preservation</option>
                    <option>Adaptive Reuse</option>
                    <option>Condition Assessment</option>
                    <option>Forensic Engineering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input"
                    placeholder="Describe your project..."
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="form-btn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
