import type { Certification } from "@/types";
export const certifications: Certification[] = [
  { id:"aws-sa",    icon:"☁️",  name:"AWS Solutions Architect",      issuer:"Amazon Web Services · 2024" },
  { id:"docker",    icon:"🐳",  name:"Docker Certified Associate",   issuer:"Docker Inc. · 2023" },
  { id:"terraform", icon:"🏗️",  name:"HashiCorp Terraform Associate",issuer:"HashiCorp · 2023" },
  { id:"aws-dev",   icon:"⚡",  name:"AWS Developer Associate",      issuer:"In Progress", upcoming:true },
  { id:"cka",       icon:"☸️",  name:"Certified Kubernetes Admin",   issuer:"CNCF · Planned 2025", upcoming:true },
  { id:"google-sec",icon:"🔐",  name:"Google Cybersecurity",         issuer:"Google / Coursera · 2023" },
];
