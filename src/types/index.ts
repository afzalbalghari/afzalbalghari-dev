export interface ExperienceItem {
  id: string; role: string; company: string;
  period: string; current: boolean; description: string; tags: string[];
}
export type BadgeVariant = "g" | "blue" | "yellow" | "red" | "default";
export interface ProjectTag { label: string; variant: BadgeVariant; }
export interface Project {
  id: string; icon: string; image?: string; title: string;
  description: string; tags: ProjectTag[]; href: string; featured?: boolean;
}
export type SkillColor = "green" | "cyan" | "yellow" | "orange";
export interface Skill { name: string; level: number; logo?: string; }
export interface SkillGroup { id: string; icon: string; title: string; color: SkillColor; skills: Skill[]; }
export type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced";
export interface DevOpsTool { id: string; icon?: string; logo?: string; name: string; level: ProficiencyLevel; }
export interface EducationItem { id: string; icon: string; degree: string; school: string; period: string; description?: string; badges?: string[]; }
export interface Certification { id: string; icon: string; name: string; issuer: string; upcoming?: boolean; }
export interface BlogPost { id: string; emoji: string; category: string; date: string; title: string; excerpt: string; href: string; }
