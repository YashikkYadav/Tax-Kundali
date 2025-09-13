import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

// Hook for scroll-triggered animation
// Usage: const controls = useScrollAnimation(ref)
const useScrollAnimation = (ref, once = true, margin = '-100px') => {
  const controls = useAnimation();
  const inView = useInView(ref, { once, margin });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return controls;
};

export default useScrollAnimation;
