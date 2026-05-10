import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            AAQIB <span className={styles.logoAccent}>GFX</span>
          </a>
          <p className={styles.tagline}>
            Crafting viral thumbnails that get clicked.
          </p>
        </div>

        {/* Quick links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {[
            { label: 'About', href: '#about' },
            { label: 'Work', href: '#work' },
            { label: 'Process', href: '#process' },
            { label: 'Contact', href: '#contact' },
          ].map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        {/* Social / contact quick actions */}
        <div className={styles.social}>
          <a href="tel:+916006554153" className={styles.socialBtn} aria-label="Call Aaqib GFX">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="mailto:aaqibbhat5631@gmail.com" className={styles.socialBtn} aria-label="Email Aaqib GFX">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        © {year} Aaqib GFX. All rights reserved.
      </div>
    </footer>
  );
}
