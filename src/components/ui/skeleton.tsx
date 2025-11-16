import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Skeleton Component
 *
 * Loading placeholder with shimmer animation effect.
 * Used to show content loading states with smooth animations.
 *
 * @example
 * ```tsx
 * <Skeleton className="h-12 w-full" />
 * ```
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted/50",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />
    </div>
  );
}

/**
 * Card Skeleton
 *
 * Pre-built skeleton for card layouts.
 */
function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton className="h-[200px] w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  );
}

/**
 * Avatar Skeleton
 *
 * Pre-built skeleton for avatar.
 */
function AvatarSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-12 w-12 rounded-full", className)} />;
}

/**
 * Text Skeleton
 *
 * Pre-built skeleton for text lines.
 */
interface TextSkeletonProps {
  lines?: number;
  className?: string;
}

function TextSkeleton({ lines = 3, className }: TextSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Loading Screen
 *
 * Full-page loading state with animated logo/spinner.
 */
interface LoadingScreenProps {
  message?: string;
}

function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-muted border-t-primary"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Pulsing message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sm text-muted-foreground"
        >
          {message}
        </motion.p>
      </div>
    </div>
  );
}

/**
 * Page Loading Skeleton
 *
 * Full-page skeleton layout.
 */
function PageSkeleton() {
  return (
    <div className="flex flex-col min-h-screen space-y-10 p-6">
      {/* Hero section */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          <AvatarSkeleton className="h-28 w-28" />
        </div>
      </div>

      {/* Content sections */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <TextSkeleton lines={4} />
        </div>
      ))}

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export {
  Skeleton,
  CardSkeleton,
  AvatarSkeleton,
  TextSkeleton,
  LoadingScreen,
  PageSkeleton
};
