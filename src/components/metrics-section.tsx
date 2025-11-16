"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Code,
  Award,
  Brain,
  TrendingUp,
  Users
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const metrics = [
  {
    value: "27",
    label: "CVEs Analyzed",
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
  },
  {
    value: "6+",
    label: "Certifications",
    icon: Award,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    value: "5+",
    label: "AI Models Mastered",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    value: "2023",
    label: "Bleeding Edge Since",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
];

const achievements = [
  "PNPT Certified Professional",
  "CompTIA Security+ Certified",
  "OpenAI Prompt Engineering Certified",
  "DeepLearning.AI Specialization",
  "Google Cybersecurity Professional",
  "Multiple Production AI Systems Deployed",
];

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {inView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value.includes("+") ? (
            <>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration }}
              >
                {numericValue}
              </motion.span>
              +
            </>
          ) : (
            value
          )}
        </motion.span>
      )}
    </motion.span>
  );
}

export function MetricsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Proven Track Record
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining cutting-edge AI expertise with battle-tested cybersecurity skills
            </p>
          </div>
        </BlurFade>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <BlurFade key={metric.label} delay={BLUR_FADE_DELAY * 12 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative bg-card border border-border rounded-xl p-6 text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${metric.gradient} bg-opacity-10 mb-4`}>
                    <metric.icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <Counter value={metric.value} />
                  </div>

                  {/* Label */}
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Achievements Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Key Achievements & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Call to Action */}
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to leverage cutting-edge AI for your business?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start a Conversation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}