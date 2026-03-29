import projectsJson from "@/data/projects.json";
import servicesJson from "@/data/services.json";
import testimonialsJson from "@/data/testimonials.json";
import processStepsJson from "@/data/process-steps.json";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  brief: string;
  constraints: string;
  designChoices: string;
  surfaceArea: string;
  budgetRange: string;
  duration: string;
  city: string;
  mainImage: string;
  galleryImages: string;
  isFeatured: boolean;
  order: number;
  createdAt: string;
}

export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  serviceId: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string;
  targetAudience: string;
  startingPrice: string;
  icon: string;
  order: number;
  faqs: ServiceFAQ[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  rating: number;
  projectId: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  durationText: string;
  order: number;
}

export const projects: Project[] = projectsJson as Project[];
export const services: Service[] = servicesJson as Service[];
export const testimonials: Testimonial[] = testimonialsJson as Testimonial[];
export const processSteps: ProcessStep[] = processStepsJson as ProcessStep[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.isFeatured).slice(0, limit);
}

export function getProjectsByCity(city: string, limit = 3): Project[] {
  return projects.filter((p) => p.city === city).slice(0, limit);
}
