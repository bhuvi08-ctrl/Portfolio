export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'Full Stack' | 'AI & ML' | 'IoT' | 'Data Analytics';
  image: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai_ml';
  iconName: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  details: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  iconName: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
