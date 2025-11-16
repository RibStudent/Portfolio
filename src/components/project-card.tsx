"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

/**
 * Enhanced Project Card with 3D hover effects and smooth animations
 *
 * Features:
 * - 3D tilt on hover following mouse position
 * - Smooth spring-based animations
 * - Gradient glow effect on hover
 * - Parallax effect on image
 * - Scale animation on hover
 * - Stagger animation for tags
 *
 * @example
 * ```tsx
 * <ProjectCard
 *   title="My Project"
 *   description="A cool project"
 *   dates="2024"
 *   tags={["React", "TypeScript"]}
 * />
 * ```
 */
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        className={cn(
          "flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full relative",
          "hover:shadow-2xl hover:border-primary/50",
          className
        )}
      >
        {/* Gradient glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <Link
          href={href || "#"}
          className={cn("block cursor-pointer relative overflow-hidden group")}
        >
          {video && (
            <motion.video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          )}
          {image && (
            <motion.div
              className="relative h-40 w-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-full w-full object-cover object-top"
              />
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold">View Project</span>
              </motion.div>
            </motion.div>
          )}
        </Link>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <CardTitle className="mt-1 text-base hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </motion.div>

            <motion.time
              className="font-sans text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {dates}
            </motion.time>

            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <motion.div
              className="mt-2 flex flex-wrap gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {tags?.map((tag, index) => (
                <motion.div
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge className="flex gap-2 px-2 py-1 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
