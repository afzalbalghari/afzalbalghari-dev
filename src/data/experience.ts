import type { ExperienceItem } from "@/types";
export const experience: ExperienceItem[] = [
  {
    id: "netzing", role: "Full-Stack Developer", company: "Netzing Technology",
    period: "2023 — Present", current: true,
    description: "Leading development of client-facing web applications and internal tooling. Architected and deployed microservices on AWS, cutting infrastructure costs by 35%. Shipped features used by 10k+ monthly active users.",
    tags: ["React","Node.js","AWS","PostgreSQL","Docker","CI/CD"],
  },
  {
    id: "freelance", role: "Frontend Developer", company: "Freelance / Contract",
    period: "2022 — 2023", current: false,
    description: "Built responsive web interfaces for businesses and startups. Delivered 8+ client projects on time. Established modern workflows with Git, automated deployments, and code-quality tooling.",
    tags: ["Next.js","TypeScript","Tailwind CSS","Vercel"],
  },
];
