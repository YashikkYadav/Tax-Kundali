// Centralized animation variants for Framer Motion
// Import and use these variants in your components for consistent animations

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: 'easeOut' } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: 'easeOut' } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: 'easeOut' } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.18 },
  },
};
