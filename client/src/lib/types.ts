export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Web Development' | 'Mobile Apps' | 'Machine Learning' | 'All';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
