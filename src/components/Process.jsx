import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Share Your Vision',
    desc: 'Tell me your channel niche, video topic, and any references you have in mind. The more detail, the better!',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'I Design & Create',
    desc: 'I craft a high-impact thumbnail using professional tools within 24–48 hours with unlimited revisions.',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'You Get Results',
    desc: 'Receive your thumbnail, request revisions, and watch your click-through rate soar to new heights!',
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} id="process" ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">How It Works</span>
          <h2 className={styles.heading}>SIMPLE PROCESS,<br /><span className="text-gradient">STUNNING RESULTS</span></h2>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={`${styles.step} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepCard}>
                <div className={styles.stepIconWrap}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                    <path d="M0 8 H32 M28 4 L40 8 L28 12" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className={`${styles.banner} reveal`}>
          <div className={styles.bannerContent}>
            <div>
              <div className={styles.bannerTitle}>Ready to get started?</div>
              <div className={styles.bannerSub}>First thumbnail consultation is free</div>
            </div>
            <a href="#contact" className="btn-primary">Start Your Order</a>
          </div>
        </div>
      </div>
    </section>
  );
}
