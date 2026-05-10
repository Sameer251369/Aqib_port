import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { thumbnails } from '../data/thumbnails';
import ImageModal from './ImageModal';
import styles from './Thumbnails.module.css';

export default function Thumbnails() {
  const ref = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.section} id="work" ref={ref}>
      {/* decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">My Work</span>
          <h2 className={styles.heading}>FEATURED THUMBNAILS</h2>
          <p className={styles.sub}>
            Explore my latest thumbnail designs across different niches and styles.
          </p>
        </div>

        {/* Round thumbnail grid */}
        <div className={styles.grid}>
          {thumbnails.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${(index % 5) * 0.08}s` }}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(item);
                }
              }}
            >
              <div className={styles.circle}>
                <img
                  src={item.img}
                  alt={`${item.label} thumbnail design by Aaqib GFX`}
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>{item.label}</span>
                </div>
              </div>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.cta} reveal`}>
          <a href="#contact" className="btn-primary">
            Order Your Thumbnail
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
