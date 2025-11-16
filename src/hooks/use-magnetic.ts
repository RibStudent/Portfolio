import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

/**
 * useMagnetic Hook
 *
 * Creates a magnetic effect where an element follows the cursor when nearby.
 * Perfect for buttons and interactive elements.
 *
 * @param strength - How strongly the element should follow the cursor (0-1)
 * @param distance - Maximum distance to activate the effect
 *
 * @example
 * ```tsx
 * const { x, y, handleMouseMove, handleMouseLeave } = useMagnetic();
 *
 * return (
 *   <motion.button
 *     style={{ x, y }}
 *     onMouseMove={handleMouseMove}
 *     onMouseLeave={handleMouseLeave}
 *   >
 *     Magnetic Button
 *   </motion.button>
 * );
 * ```
 */
export function useMagnetic(strength: number = 0.3, distance: number = 100) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const distanceFromCenter = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distanceFromCenter < distance) {
      x.set(deltaX * strength);
      y.set(deltaY * strength);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    x: springX,
    y: springY,
    handleMouseMove,
    handleMouseLeave,
  };
}

/**
 * useMagneticRotation Hook
 *
 * Adds rotation to the magnetic effect for extra flair.
 *
 * @example
 * ```tsx
 * const { x, y, rotate, handleMouseMove, handleMouseLeave } = useMagneticRotation();
 *
 * return (
 *   <motion.button
 *     style={{ x, y, rotate }}
 *     onMouseMove={handleMouseMove}
 *     onMouseLeave={handleMouseLeave}
 *   >
 *     Magnetic Button
 *   </motion.button>
 * );
 * ```
 */
export function useMagneticRotation(strength: number = 0.3, distance: number = 100) {
  const magnetic = useMagnetic(strength, distance);

  // Calculate rotation based on x position
  const rotate = useTransform(magnetic.x, [-20, 20], [-5, 5]);

  return {
    ...magnetic,
    rotate,
  };
}
