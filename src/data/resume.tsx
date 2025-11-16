import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rhys Thomas",
  initials: "RT",
  url: "https://rhysthomas.dev",
  location: "Brisbane, Queensland",
  locationLink: "https://www.google.com/maps/place/brisbane",
  description:
    "Cybersecurity Specialist & AI-Powered Solutions Developer. Bridging cutting-edge AI technology with practical business solutions.",
  summary:
    "I'm a cybersecurity specialist and full-stack developer based in Brisbane, completing my final semester at TAFE Queensland. I bridge the gap between cutting-edge AI technology and practical business solutions, helping small to medium-sized businesses compete in the digital landscape. What sets me apart? I'm staying on the absolute bleeding edge of AI—working with frameworks and models that are often less than a month old. I don't just write code or run security scans—I solve problems with the best tools available right now, combining expertise in cybersecurity, development, system administration, and cutting-edge AI implementation.",
  avatarUrl: "/me.png",
  skills: [
    "Claude (Opus/Sonnet)",
    "OpenAI GPT-4",
    "LangChain",
    "MCP Servers",
    "React",
    "Python",
    "Node.js",
    "JavaScript",
    "Penetration Testing",
    "CVE Research",
    "OSINT",
    "Proxmox",
    "Linux Administration",
    "DaVinci Resolve",
    "NotebookLM",
    "Llama 3",
    "Mistral",
    "DeepSeek",
    "Security Audits",
    "API Integration",
  ],
  skillCategories: {
    "AI & LLM": [
      "Claude (Opus/Sonnet)",
      "OpenAI GPT-4",
      "Llama 3",
      "Mistral",
      "DeepSeek",
      "NotebookLM",
      "LangChain",
      "MCP Servers",
    ],
    "Cybersecurity": [
      "Penetration Testing",
      "CVE Research",
      "OSINT",
      "Security Audits",
      "PNPT Certified",
      "CompTIA Security+",
    ],
    "Development": [
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "API Integration",
    ],
    "Infrastructure": [
      "Proxmox",
      "Linux Administration",
      "Docker",
      "System Administration",
      "Automation",
    ],
    "Creative": [
      "DaVinci Resolve",
      "Video Production",
      "Technical Documentation",
      "Process Documentation",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@rhysthomas.dev",
    tel: "+61 4XX XXX XXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ribkid",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rhys-thomas-cybersec",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rhysthomas_dev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Cybersecurity & AI Solutions",
      href: "#",
      badges: ["AI Integration", "Security", "Automation"],
      location: "Brisbane, QLD",
      title: "Cybersecurity Specialist & AI Developer",
      logoUrl: "/work.png",
      start: "2023",
      end: "Present",
      description:
        "Providing comprehensive AI integration, cybersecurity, and automation solutions for SMBs. Core services include: AI Integration & Automation (Claude, OpenAI, Llama 3, Mistral, DeepSeek, LangChain, MCP servers), Business Process Documentation & Training, Secure Web Development (React-based), Cybersecurity (audits, penetration testing, CVE research), and Video Marketing Solutions ($497-$1,497 packages). Built production chatbot systems, automated phone systems, and custom workflow automation using the Automation Bridge framework. Specialize in staying on the bleeding edge of AI—implementing frameworks and models within days of their release.",
    },
  ],
  education: [
    {
      school: "TAFE Queensland",
      href: "https://tafeqld.edu.au",
      degree: "Cybersecurity Program - Final Semester",
      logoUrl: "/tafe.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "TCM Security",
      href: "https://tcm-sec.com",
      degree: "PNPT (Practical Network Penetration Tester)",
      logoUrl: "/pnpt.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "OpenAI",
      href: "https://openai.com",
      degree: "Prompt Engineering Course - Certified",
      logoUrl: "/openai.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "DeepLearning.AI",
      href: "https://www.deeplearning.ai",
      degree: "DeepLearning.AI Specialization",
      logoUrl: "/deeplearning.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Google",
      href: "https://www.coursera.org/google-certificates",
      degree: "Google Cybersecurity Professional Certificate",
      logoUrl: "/google.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "CompTIA",
      href: "https://www.comptia.org",
      degree: "CompTIA Security+ Certified",
      logoUrl: "/comptia.png",
      start: "2022",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "RibSys Cake - AI-Powered Bakery Platform",
      href: "https://www.ribsys-cake.com/",
      dates: "2024",
      active: true,
      description:
        "Full-stack e-commerce website for my cake business featuring AI-powered order automation. Messages about cakes are automatically processed by AI to generate structured order forms. Integrated Twilio API to create an automated phone ordering system, allowing customers to place orders via voice calls.",
      technologies: [
        "Next.js",
        "React",
        "AI Integration",
        "Twilio API",
        "Order Automation",
        "TypeScript",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ribsys-cake.com/",
          icon: "globe",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dadsite - Personal Portfolio & Blog",
      href: "https://dadsite.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Modern, responsive portfolio website built for my dad. Features clean design, smooth animations, and optimized performance. Showcases personal projects and includes an integrated blog system.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Responsive Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://dadsite.vercel.app/",
          icon: "globe",
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
