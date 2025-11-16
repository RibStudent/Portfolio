"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Zap, Bot, Code, Video, Lock, AlertTriangle, Sparkles } from 'lucide-react'
import BlurFade from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ElementType
  gradient: string
  glowColor: string
}

interface AdditionalService {
  title: string
  description: string
  icon: React.ElementType
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Package',
    price: '$497',
    description: 'Perfect for small businesses getting started with AI',
    icon: Bot,
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'blue',
    features: [
      'AI chatbot setup',
      'Basic automation',
      'Complete documentation',
      '1 month support',
      'Email support',
    ],
  },
  {
    name: 'Professional Package',
    price: '$997',
    description: 'For businesses ready to scale with AI',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'purple',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom workflow automation',
      'Multi-model integration',
      '3 months premium support',
      'Comprehensive training included',
      'Priority email & chat support',
    ],
  },
  {
    name: 'Enterprise Package',
    price: '$1,497+',
    description: 'Complete AI transformation for your organization',
    icon: Sparkles,
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'orange',
    features: [
      'Everything in Professional',
      'Full AI ecosystem setup',
      'Security audit included',
      '6 months dedicated support',
      'Priority 24/7 response',
      'Custom integrations',
      'Quarterly strategy sessions',
    ],
  },
]

const additionalServices: AdditionalService[] = [
  {
    title: 'Cybersecurity Audits',
    description: 'Comprehensive security assessments to identify vulnerabilities',
    icon: Shield,
  },
  {
    title: 'Penetration Testing',
    description: 'Ethical hacking to test your systems defenses',
    icon: AlertTriangle,
  },
  {
    title: 'Custom Development',
    description: 'Tailored solutions built specifically for your needs',
    icon: Code,
  },
  {
    title: 'Video Marketing Solutions',
    description: 'Professional video content to showcase your brand',
    icon: Video,
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0.2} inView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            >
              <Lock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">AI Integration & Cybersecurity</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Services & Pricing
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package to transform your business with AI and secure your digital assets
            </p>
          </div>
        </BlurFade>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <BlurFade key={tier.name} delay={0.3 + index * 0.1} inView>
              <motion.div
                className="relative h-full"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg"
                    >
                      Most Popular
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <motion.div
                  className={cn(
                    "relative h-full p-8 rounded-2xl border backdrop-blur-lg transition-all duration-300",
                    tier.popular
                      ? "bg-white/60 dark:bg-gray-900/60 border-purple-500/50 shadow-xl shadow-purple-500/20"
                      : "bg-white/40 dark:bg-gray-900/40 border-gray-200/50 dark:border-gray-700/50",
                    hoveredCard === index && "scale-105 shadow-2xl"
                  )}
                  style={{
                    boxShadow: hoveredCard === index
                      ? `0 20px 60px -15px rgba(${tier.glowColor === 'blue' ? '59, 130, 246' : tier.glowColor === 'purple' ? '168, 85, 247' : '249, 115, 22'}, 0.4)`
                      : undefined
                  }}
                >
                  {/* Gradient border effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 -z-10",
                    hoveredCard === index && "opacity-100"
                  )}>
                    <div className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px]",
                      tier.gradient
                    )}>
                      <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-900" />
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r",
                      tier.gradient
                    )}
                    animate={hoveredCard === index ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {React.createElement(tier.icon, { className: "w-7 h-7 text-white" })}
                  </motion.div>

                  {/* Title & Price */}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[48px]">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className={cn(
                      "text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      tier.gradient
                    )}>
                      {tier.price.replace('+', '')}
                    </span>
                    {tier.price.includes('+') && (
                      <span className="text-gray-500 dark:text-gray-400">+</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-r",
                          tier.gradient
                        )}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg",
                      tier.popular
                        ? `bg-gradient-to-r ${tier.gradient} text-white hover:shadow-xl`
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    )}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Additional Services */}
        <BlurFade delay={0.6} inView>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Additional Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((service, index) => (
                  <BlurFade key={service.title} delay={0.7 + index * 0.1} inView>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className="group relative p-6 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Icon background with gradient */}
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(service.icon, { className: "w-6 h-6 text-gray-700 dark:text-gray-300" })}
                      </div>

                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>

                      {/* Hover gradient line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                    </motion.div>
                  </BlurFade>
                ))}
              </div>
            </motion.div>
          </div>
        </BlurFade>

        {/* Custom Solutions CTA */}
        <BlurFade delay={0.9} inView>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Need a custom solution?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                Every business is unique. Let&apos;s discuss how we can create a tailored package that perfectly fits your needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  )
}
