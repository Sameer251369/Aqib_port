import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact" ref={ref}>
      {/* Blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left info */}
        <div className={`${styles.info} reveal-left`}>
          <span className="section-label">Contact Me</span>
          <h2 className={styles.heading}>
            LET'S CREATE<br /><span className="text-gradient">SOMETHING AMAZING</span>
          </h2>
          <p className={styles.desc}>
            Ready to boost your click-through rate? Let me design a thumbnail that
            stops the scroll and drives real results.
          </p>

          <div className={styles.contacts}>
            <a href="tel:+916006554153" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>+91 6006554153</div>
              </div>
            </a>

            <a href="mailto:aaqibbhat5631@gmail.com" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>aaqibbhat5631@gmail.com</div>
              </div>
            </a>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Location</div>
                <div className={styles.contactValue}>Kashmir, India</div>
              </div>
            </div>
          </div>

          {/* Response time */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Typically responds within 2 hours
          </div>
        </div>

        {/* Right form */}
        <div className={`${styles.formWrap} reveal-right`}>
          {sent ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successDesc}>Thanks for reaching out! I'll get back to you within 2 hours.</p>
              <button className="btn-ghost" onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Ahmed Khan"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="email" className={styles.label}>Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="e.g. you@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="message" className={styles.label}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
