"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { Icons } from "@/components/ui/icons"

export default function ShowcasePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        badge={{
          text: "Cybersecurity & AI Solutions",
          action: {
            text: "View Services",
            href: "#services",
          },
        }}
        title="Bleeding-Edge AI for Your Business"
        description="Brisbane-based cybersecurity specialist delivering cutting-edge AI solutions, automation, and security services for SMBs."
        actions={[
          {
            text: "Get Started",
            href: "#contact",
            variant: "default",
          },
          {
            text: "GitHub",
            href: "https://github.com/rhysthomas",
            variant: "glow",
            icon: <Icons.gitHub className="h-5 w-5" />,
          },
        ]}
        image={{
          light: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
          dark: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
          alt: "AI & Cybersecurity Solutions Dashboard",
        }}
      />

      {/* Placeholder sections for other components */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Component Showcase</h2>
            <p className="text-muted-foreground text-lg">
              Demonstrating modern web development skills with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pricing Section", description: "3-tier pricing with glassmorphism", icon: "💰" },
              { title: "Feature Grid", description: "Skills & certifications showcase", icon: "🎯" },
              { title: "Project Gallery", description: "Portfolio project cards", icon: "🚀" },
              { title: "Testimonials", description: "Client reviews & ratings", icon: "⭐" },
              { title: "Contact Form", description: "Form validation & styling", icon: "📧" },
              { title: "Stats Section", description: "Animated metrics counter", icon: "📊" },
              { title: "Timeline", description: "Education & certification journey", icon: "📅" },
              { title: "Hero Section", description: "Animated hero with mockups", icon: "✨" },
            ].map((component, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{component.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {component.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Built With Modern Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "React", icon: <Icons.react className="w-8 h-8" /> },
                { name: "TypeScript", icon: "TS" },
                { name: "Tailwind CSS", icon: <Icons.tailwind className="w-8 h-8" /> },
                { name: "Next.js 14", icon: "▲" },
                { name: "Shadcn/ui", icon: "🎨" },
                { name: "Framer Motion", icon: "✨" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border bg-card hover:bg-accent transition-colors"
                >
                  {typeof tech.icon === 'string' ? (
                    <span className="text-xl">{tech.icon}</span>
                  ) : (
                    tech.icon
                  )}
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="mt-16 p-8 rounded-lg border bg-gradient-to-br from-card to-card/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Web Development Skills Demonstrated</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Advanced CSS Animations & Transitions",
                "Responsive Design & Mobile-First Approach",
                "Component-Based Architecture",
                "TypeScript Type Safety",
                "Theme Management (Light/Dark Mode)",
                "Glassmorphism & Modern UI Patterns",
                "Form Validation & State Management",
                "Performance Optimization",
                "Accessibility Best Practices",
                "SEO-Friendly Structure",
                "Gradient Effects & Visual Polish",
                "Reusable Component Library",
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand mt-1">✓</span>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-lg border bg-gradient-to-br from-brand/10 to-brand-foreground/10">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                From cybersecurity solutions to cutting-edge AI integrations, I bring bleeding-edge technology
                and professional web development skills to every project.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/"
                  className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Back to Portfolio
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
