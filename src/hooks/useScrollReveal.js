import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    const children = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (children.length > 0) {
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(child);
      });
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
