import { PROFILE_PHOTO } from '../data/thumbnails';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Aurora blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.blob3} aria-hidden="true" />

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for projects
          </div>

          <h1 className={styles.heading}>
            <span className={styles.headingLine}>CRAFTING</span>
            <span className={`${styles.headingLine} ${styles.headingGradient}`}>VIRAL</span>
            <span className={styles.headingLine}>THUMBNAILS</span>
          </h1>

          <p className={styles.sub}>
            Professional YouTube & Social Media Thumbnail Designer helping
            content creators stand out and <strong>dominate their niche</strong>.
          </p>

          <div className={styles.actions}>
            <a href="#work" className="btn-primary">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0l-3-3m3 3l-3 3" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { value: '500+', label: 'Thumbnails' },
              { value: '150+', label: 'Clients' },
              { value: '99%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — profile photo */}
        <div className={styles.photoWrap}>
          <div className={styles.photoRing1} aria-hidden="true" />
          <div className={styles.photoRing2} aria-hidden="true" />
          <div className={styles.photoFrame}>
            <img
              src={PROFILE_PHOTO}
              alt="Aaqib GFX – Professional Thumbnail Designer"
              className={styles.photo}
              loading="eager"
            />
            <div className={styles.photoOverlay} aria-hidden="true" />
          </div>

          {/* Floating cards */}
          <div className={styles.floatCard1}>
            <span className={styles.floatIcon}>🎨</span>
            <div>
              <div className={styles.floatTitle}>Design Expert</div>
              <div className={styles.floatSub}>Photoshop & AI</div>
            </div>
          </div>

          <div className={styles.floatCard2}>
            <span className={styles.floatStar}>★</span>
            <div className={styles.floatRating}>5.0 Rating</div>
            <div className={styles.floatMeta}>150+ Reviews</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
