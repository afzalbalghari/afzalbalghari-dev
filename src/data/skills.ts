import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    icon: "🖥️",
    title: "Frontend",
    color: "purple",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    icon: "⚡",
    title: "Backend",
    color: "teal",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 78 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    id: "databases",
    icon: "🗄️",
    title: "Databases",
    color: "yellow",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 72 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "Tools",
    color: "coral",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Linux / Bash", level: 82 },
      { name: "VS Code", level: 98 },
      { name: "Postman", level: 88 },
    ],
  },
];
