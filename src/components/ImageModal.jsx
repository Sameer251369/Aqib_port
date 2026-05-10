import { useEffect } from 'react';
import styles from './ImageModal.module.css';

export default function ImageModal({ image, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains(styles.backdrop)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close image"
        >
          ✕
        </button>
        <img
          src={image.img}
          alt={image.label}
          className={styles.fullImage}
        />
        <div className={styles.info}>
          <h3>{image.label}</h3>
        </div>
      </div>
    </div>
  );
}
