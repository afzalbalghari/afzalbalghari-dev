import type { DevOpsTool } from "@/types";

export const devopsTools: DevOpsTool[] = [
  { id: "aws",     icon: "☁️",  name: "AWS",            level: "Advanced"     },
  { id: "docker",  icon: "🐳",  name: "Docker",         level: "Advanced"     },
  { id: "k8s",     icon: "☸️",  name: "Kubernetes",     level: "Intermediate" },
  { id: "tf",      icon: "🏗️",  name: "Terraform",      level: "Advanced"     },
  { id: "gha",     icon: "⚙️",  name: "GitHub Actions", level: "Advanced"     },
  { id: "jenkins", icon: "📦",  name: "Jenkins",        level: "Intermediate" },
  { id: "prom",    icon: "📈",  name: "Prometheus",     level: "Intermediate" },
  { id: "grafana", icon: "🔭",  name: "Grafana",        level: "Intermediate" },
  { id: "argo",    icon: "🔁",  name: "ArgoCD",         level: "Beginner"     },
  { id: "vercel",  icon: "🚀",  name: "Vercel",         level: "Advanced"     },
  { id: "iam",     icon: "🔒",  name: "IAM / Vault",    level: "Intermediate" },
  { id: "nginx",   icon: "🌐",  name: "Nginx",          level: "Advanced"     },
];
