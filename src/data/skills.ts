import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    icon: "🖥️",
    title: "Frontend",
    color: "purple",
    skills: [
      { name: "React / Next.js", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript",      level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS",    level: 90, logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Framer Motion",   level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    id: "backend",
    icon: "⚡",
    title: "Backend",
    color: "teal",
    skills: [
      { name: "Node.js",   level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python",    level: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "REST APIs", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "GraphQL",   level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    id: "databases",
    icon: "🗄️",
    title: "Databases",
    color: "yellow",
    skills: [
      { name: "PostgreSQL", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB",    level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis",      level: 72, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL",      level: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "Tools",
    color: "coral",
    skills: [
      { name: "Git / GitHub", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux / Bash", level: 82, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "VS Code",      level: 98, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Docker",       level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];