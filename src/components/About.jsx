
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

const stats = [
  { value: '500+', label: 'Thumbnails Made' },
  { value: '150+', label: 'Happy Clients' },
  { value: '10+', label: 'Platforms Served' },
  { value: '3+', label: 'Years Experience' },
];

const skills = ['Photoshop', 'Adobe Illustrator', 'Canva Pro', 'Figma', 'Midjourney AI', 'After Effects'];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className={styles.about} id="about" ref={ref}>
      {/* blob */}
      <div className={styles.blob} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Text column */}
        <div className={styles.textCol}>
          <div className="reveal">
            <span className="section-label">About Me</span>
          </div>

          <h2 className={`${styles.heading} reveal`}>
            I'M <span className="text-gradient">AAQIB</span><br />THE THUMBNAIL GUY
          </h2>

          <p className={`${styles.desc} reveal`}>
            Based in Kashmir, India, I'm a passionate creative designer specializing in
            high-impact YouTube thumbnails and social media graphics. With over 3 years of
            experience, I help content creators, YouTubers, and brands achieve{' '}
            <span className={styles.highlight}>higher click-through rates</span> through
            visually stunning, thumb-stopping designs.
          </p>

          <p className={`${styles.desc} reveal`}>
            Every thumbnail I create is backed by research on trending design patterns,
            viewer psychology, and platform-specific best practices—because a great thumbnail
            isn't just beautiful, it <span className={styles.highlight}>converts</span>.
          </p>

          {/* Stats grid */}
          <div className={`${styles.statsGrid} reveal`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.contactRow} reveal`}>
            <a href="tel:+916006554153" className={styles.contactItem}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 6006554153
            </a>
            <a href="mailto:aaqibbhat5631@gmail.com" className={styles.contactItem}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              aaqibbhat5631@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
