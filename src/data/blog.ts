import type { BlogPost } from "@/types";
export const blogPosts: BlogPost[] = [
  { id:"zero-downtime", emoji:"🔧", category:"DevOps",     date:"Apr 2025", title:"Zero-Downtime Deployments with AWS ECS and GitHub Actions", excerpt:"How to build a production-grade CI/CD pipeline that deploys with blue/green strategy and automatic rollback.", href:"#" },
  { id:"zustand",       emoji:"⚛️", category:"React",      date:"Mar 2025", title:"Why I Switched from Redux to Zustand (And Never Looked Back)", excerpt:"A practical comparison of state management patterns in large-scale React apps, with real performance benchmarks.", href:"#" },
  { id:"terraform",     emoji:"🏗️", category:"Terraform",  date:"Feb 2025", title:"Managing Multi-Environment AWS Infrastructure with Terraform Workspaces", excerpt:"Stop copy-pasting Terraform configs. Here's how to cleanly manage dev, staging, and production environments.", href:"#" },
];
