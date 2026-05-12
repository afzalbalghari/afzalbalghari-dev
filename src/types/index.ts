// ─── Experience ────────────────────────────────────────────────────────────────
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  tags: string[];
}

// ─── Projects ──────────────────────────────────────────────────────────────────
export type BadgeVariant = "accent" | "green" | "yellow" | "red";

export interface ProjectTag {
  label: string;
  variant: BadgeVariant;
}

export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  href: string;
  featured?: boolean;
}

// ─── Skills ────────────────────────────────────────────────────────────────────
export type SkillColor = "purple" | "teal" | "yellow" | "coral";

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  id: string;
  icon: string;
  title: string;
  color: SkillColor;
  skills: Skill[];
}

// ─── DevOps ────────────────────────────────────────────────────────────────────
export type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface DevOpsTool {
  id: string;
  icon: string;
  name: string;
  level: ProficiencyLevel;
}

// ─── Education ─────────────────────────────────────────────────────────────────
export interface EducationItem {
  id: string;
  icon: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
  badges?: string[];
}

// ─── Certifications ────────────────────────────────────────────────────────────
export interface Certification {
  id: string;
  icon: string;
  name: string;
  issuer: string;
  upcoming?: boolean;
}

// ─── Blog ──────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  emoji: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

// ─── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
