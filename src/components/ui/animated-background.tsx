"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animated Gradient Mesh
 *
 * Beautiful animated background with floating gradient orbs.
 * Creates a premium, modern aesthetic.
 *
 * @example
 * ```tsx
 * <AnimatedGradientMesh />
 * ```
 */
export function AnimatedGradientMesh({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}

/**
 * Grid Background
 *
 * Animated grid pattern background.
 *
 * @example
 * ```tsx
 * <GridBackground />
 * ```
 */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/**
 * Particles Background
 *
 * Floating particles with smooth animation.
 *
 * @example
 * ```tsx
 * <ParticlesBackground count={50} />
 * ```
 */
interface ParticlesBackgroundProps {
  count?: number;
  className?: string;
}

export function ParticlesBackground({
  count = 30,
  className,
}: ParticlesBackgroundProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Spotlight Effect
 *
 * Animated spotlight that follows cursor or moves randomly.
 *
 * @example
 * ```tsx
 * <SpotlightEffect />
 * ```
 */
export function SpotlightEffect({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        animate={{
          x: ["20%", "80%", "20%"],
          y: ["20%", "80%", "20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: ["80%", "20%", "80%"],
          y: ["80%", "20%", "80%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/**
 * Noise Background
 *
 * Subtle noise texture for depth.
 *
 * @example
 * ```tsx
 * <NoiseBackground opacity={0.05} />
 * ```
 */
interface NoiseBackgroundProps {
  opacity?: number;
  className?: string;
}

export function NoiseBackground({
  opacity = 0.05,
  className,
}: NoiseBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  );
}

/**
 * Aurora Background
 *
 * Beautiful aurora borealis effect with flowing colors.
 *
 * @example
 * ```tsx
 * <AuroraBackground />
 * ```
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right,
              transparent,
              rgba(59, 130, 246, 0.1),
              rgba(168, 85, 247, 0.1),
              rgba(236, 72, 153, 0.1),
              transparent
            )
          `,
          backgroundSize: "200% 200%",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
