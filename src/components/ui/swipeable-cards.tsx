"use client";

import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Swipeable Card
 *
 * Card that can be swiped left or right with smooth spring physics.
 * Perfect for testimonials, image galleries, or interactive content.
 *
 * @example
 * ```tsx
 * <SwipeableCard
 *   onSwipeLeft={() => console.log('Swiped left')}
 *   onSwipeRight={() => console.log('Swiped right')}
 * >
 *   Card Content
 * </SwipeableCard>
 * ```
 */
interface SwipeableCardProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
  threshold?: number;
}

export function SwipeableCard({
  children,
  onSwipeLeft,
  onSwipeRight,
  className,
  threshold = 100,
}: SwipeableCardProps) {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    if (info.offset.x > threshold) {
      onSwipeRight?.();
    } else if (info.offset.x < -threshold) {
      onSwipeLeft?.();
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      style={{ x, rotate, opacity }}
      className={cn(
        "cursor-grab active:cursor-grabbing touch-pan-y",
        isDragging && "z-50",
        className
      )}
      whileTap={{ scale: 0.95 }}
    >
      {children}

      {/* Swipe indicators */}
      <motion.div
        className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white rounded-lg font-bold pointer-events-none"
        style={{
          opacity: useTransform(x, [0, threshold], [0, 1]),
        }}
      >
        LIKE
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg font-bold pointer-events-none"
        style={{
          opacity: useTransform(x, [-threshold, 0], [1, 0]),
        }}
      >
        NOPE
      </motion.div>
    </motion.div>
  );
}

/**
 * Draggable Container
 *
 * Container that can be dragged with momentum and constraints.
 *
 * @example
 * ```tsx
 * <DraggableContainer>
 *   <div>Drag me around!</div>
 * </DraggableContainer>
 * ```
 */
interface DraggableContainerProps {
  children: ReactNode;
  className?: string;
  constrainToParent?: boolean;
}

export function DraggableContainer({
  children,
  className,
  constrainToParent = true,
}: DraggableContainerProps) {
  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.1}
      dragConstraints={constrainToParent ? { top: 0, left: 0, right: 0, bottom: 0 } : undefined}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      className={cn("cursor-grab touch-none", className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Carousel with Gesture Controls
 *
 * Swipeable carousel with drag-to-navigate functionality.
 *
 * @example
 * ```tsx
 * <GestureCarousel items={[...]} />
 * ```
 */
interface GestureCarouselProps {
  items: ReactNode[];
  className?: string;
}

export function GestureCarousel({ items, className }: GestureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      // Swipe right
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else if (offset < -100 || velocity < -500) {
      // Swipe left
      setCurrentIndex((prev) => Math.min(items.length - 1, prev + 1));
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="flex cursor-grab active:cursor-grabbing"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-full flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
