"use client";

import { motion } from "framer-motion";
import { useMagnetic, useMagneticRotation } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

/**
 * Magnetic Button
 *
 * Button with magnetic hover effect that follows cursor.
 * Provides premium, interactive feel to CTAs.
 *
 * @example
 * ```tsx
 * <MagneticButton>Click Me</MagneticButton>
 * ```
 */
interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  distance?: number;
  withRotation?: boolean;
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      children,
      className,
      strength = 0.3,
      distance = 100,
      withRotation = false,
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const magnetic = withRotation
      ? useMagneticRotation(strength, distance)
      : useMagnetic(strength, distance);

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "text-primary hover:bg-primary/10",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        style={{
          x: magnetic.x,
          y: magnetic.y,
          rotate: withRotation && "rotate" in magnetic ? magnetic.rotate : 0,
        }}
        onMouseMove={magnetic.handleMouseMove}
        onMouseLeave={magnetic.handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn(
          "relative font-medium rounded-lg transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "active:transform active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Shine effect on hover */}
        <motion.span
          className="absolute inset-0 rounded-lg"
          initial={{ background: "transparent" }}
          whileHover={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

/**
 * Magnetic Icon Button
 *
 * Circular magnetic button for icons.
 *
 * @example
 * ```tsx
 * <MagneticIconButton>
 *   <IconComponent />
 * </MagneticIconButton>
 * ```
 */
interface MagneticIconButtonProps extends MagneticButtonProps {
  size?: "sm" | "md" | "lg";
}

export const MagneticIconButton = forwardRef<
  HTMLButtonElement,
  MagneticIconButtonProps
>(({ children, className, size = "md", ...props }, ref) => {
  const magnetic = useMagnetic(0.3, 100);

  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <motion.button
      ref={ref}
      style={{
        x: magnetic.x,
        y: magnetic.y,
      }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      className={cn(
        "relative rounded-full bg-primary text-primary-foreground",
        "flex items-center justify-center",
        "hover:shadow-lg transition-shadow",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});

MagneticIconButton.displayName = "MagneticIconButton";
