import { useAnimation } from 'framer-motion';
import { useCallback } from 'react';

// A reusable hook for hover animations
const useHoverAnimation = (hoverVariant = { scale: 1.05 }, restVariant = { scale: 1 }) => {
	const controls = useAnimation();

	const onHoverStart = useCallback(() => {
		controls.start(hoverVariant);
	}, [controls, hoverVariant]);

	const onHoverEnd = useCallback(() => {
		controls.start(restVariant);
	}, [controls, restVariant]);

	return { controls, onHoverStart, onHoverEnd };
};

export default useHoverAnimation;
