import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

/**
 * useParallax Hook
 *
 * Creates a parallax scrolling effect based on scroll position.
 * Returns a MotionValue that can be used for transforms.
 *
 * @param distance - The distance to move (positive moves down, negative moves up)
 * @param ref - Optional ref to calculate scroll relative to element
 *
 * @example
 * ```tsx
 * const y = useParallax(300);
 * return <motion.div style={{ y }}>Content</motion.div>
 * ```
 */
export function useParallax(
  distance: number = 100,
  ref?: RefObject<HTMLElement>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

/**
 * useScrollScale Hook
 *
 * Scales element based on scroll position.
 *
 * @example
 * ```tsx
 * const scale = useScrollScale();
 * return <motion.div style={{ scale }}>Content</motion.div>
 * ```
 */
export function useScrollScale(
  scaleRange: [number, number] = [0.8, 1]
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);
}

/**
 * useScrollOpacity Hook
 *
 * Changes opacity based on scroll position.
 *
 * @example
 * ```tsx
 * const opacity = useScrollOpacity();
 * return <motion.div style={{ opacity }}>Content</motion.div>
 * ```
 */
export function useScrollOpacity(
  opacityRange: [number, number] = [0, 1]
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [opacityRange[0], opacityRange[1], opacityRange[1], opacityRange[0]]
  );
}

/**
 * useScrollRotate Hook
 *
 * Rotates element based on scroll position.
 *
 * @example
 * ```tsx
 * const rotate = useScrollRotate(360);
 * return <motion.div style={{ rotate }}>Content</motion.div>
 * ```
 */
export function useScrollRotate(
  maxRotation: number = 180
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, maxRotation]);
}
