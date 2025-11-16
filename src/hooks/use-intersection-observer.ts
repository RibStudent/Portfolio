import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * useIntersectionObserver Hook
 *
 * Tracks whether an element is visible in the viewport.
 * Useful for lazy loading, scroll animations, and performance optimization.
 *
 * @param elementRef - Ref to the element to observe
 * @param options - Intersection Observer options
 *
 * @example
 * ```tsx
 * const ref = useRef(null);
 * const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
 *
 * return (
 *   <div ref={ref} className={isVisible ? 'animate' : ''}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
  }: UseIntersectionObserverProps = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // If already intersected and should freeze, don't observe
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        // If should freeze on visible and is now visible, disconnect
        if (freezeOnceVisible && isElementIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    elementRef,
    threshold,
    root,
    rootMargin,
    freezeOnceVisible,
    isIntersecting,
  ]);

  return isIntersecting;
}

/**
 * useIntersectionRatio Hook
 *
 * Returns the intersection ratio (0-1) of an element.
 *
 * @example
 * ```tsx
 * const ref = useRef(null);
 * const ratio = useIntersectionRatio(ref);
 *
 * return (
 *   <div ref={ref} style={{ opacity: ratio }}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useIntersectionRatio(
  elementRef: RefObject<Element>,
  options?: UseIntersectionObserverProps
): number {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(entry.intersectionRatio);
      },
      { ...options, threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return ratio;
}
