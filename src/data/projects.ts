import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cloud-deploy",
    icon: "📦",
    title: "CloudDeploy Dashboard",
    description:
      "Real-time deployment monitoring dashboard with live log streaming, rollback controls, and Slack alerting. Handles 50+ concurrent deploys.",
    tags: [
      { label: "Next.js", variant: "accent" },
      { label: "AWS ECS", variant: "green" },
      { label: "WebSockets", variant: "yellow" },
    ],
    href: "#",
    featured: true,
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce Platform",
    description:
      "Full-stack multi-vendor marketplace with Stripe payments, inventory management, and a headless CMS. 99.9% uptime SLA on AWS.",
    tags: [
      { label: "React", variant: "accent" },
      { label: "Node.js", variant: "green" },
      { label: "Stripe", variant: "red" },
    ],
    href: "#",
    featured: true,
  },
  {
    id: "ai-tasks",
    icon: "🤖",
    title: "AI Task Manager",
    description:
      "Smart task manager using OpenAI to auto-prioritize, generate sub-tasks, and summarize blockers. Integrates with GitHub and Jira.",
    tags: [
      { label: "TypeScript", variant: "accent" },
      { label: "OpenAI", variant: "green" },
      { label: "PostgreSQL", variant: "yellow" },
    ],
    href: "#",
    featured: true,
  },
  {
    id: "infra-cost",
    icon: "📊",
    title: "Infra Cost Analyzer",
    description:
      "CLI + web app to visualize AWS spend, detect idle resources, and forecast monthly costs. Saved clients avg $2k/month.",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "Terraform", variant: "green" },
      { label: "AWS SDK", variant: "yellow" },
    ],
    href: "#",
  },
  {
    id: "auth-service",
    icon: "🔐",
    title: "Auth Microservice",
    description:
      "Production-ready auth service with JWT, OAuth2, RBAC, and refresh token rotation. Docker-ready with full test coverage.",
    tags: [
      { label: "Node.js", variant: "accent" },
      { label: "Redis", variant: "green" },
      { label: "OAuth2", variant: "red" },
    ],
    href: "#",
  },
  {
    id: "api-gateway",
    icon: "📡",
    title: "API Gateway Boilerplate",
    description:
      "Open-source starter with rate limiting, request validation, structured logging, and OpenAPI docs auto-generation. 300+ GitHub stars.",
    tags: [
      { label: "Fastify", variant: "accent" },
      { label: "TypeScript", variant: "green" },
      { label: "OpenAPI", variant: "yellow" },
    ],
    href: "#",
  },
];
