"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

/**
 * Page Transition Provider
 *
 * Provides smooth page transitions using Framer Motion.
 * Features multiple transition variants for different effects.
 *
 * @example
 * ```tsx
 * <PageTransition variant="fade">
 *   <YourPage />
 * </PageTransition>
 * ```
 */

interface PageTransitionProps extends PropsWithChildren {
  variant?: "fade" | "slide" | "scale" | "blur" | "slideUp";
  className?: string;
}

const transitionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
  },
};

export function PageTransition({
  children,
  variant = "fade",
  className,
}: PageTransitionProps) {
  const pathname = usePathname();
  const variants = transitionVariants[variant];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Stagger Container
 *
 * Animates children with a stagger effect.
 *
 * @example
 * ```tsx
 * <StaggerContainer>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </StaggerContainer>
 * ```
 */
interface StaggerContainerProps extends PropsWithChildren {
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item
 *
 * Individual item to be used within StaggerContainer.
 */
export function StaggerItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveal on Scroll
 *
 * Reveals content when scrolled into view with various animation effects.
 *
 * @example
 * ```tsx
 * <RevealOnScroll variant="slideUp">
 *   <YourContent />
 * </RevealOnScroll>
 * ```
 */
interface RevealOnScrollProps extends PropsWithChildren {
  variant?: "slideUp" | "slideLeft" | "slideRight" | "fade" | "scale";
  delay?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  variant = "slideUp",
  delay = 0,
  className,
}: RevealOnScrollProps) {
  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
