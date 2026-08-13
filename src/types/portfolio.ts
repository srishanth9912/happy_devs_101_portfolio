export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud / DevOps' | 'Tools';
  iconName?: string;
  proficiency?: number;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Full Stack' | 'AI' | 'Mobile' | 'Other';
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description: string;
  gpaOrHonors?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  category: 'Hackathon' | 'Award' | 'Coding Competition' | 'Open Source' | 'Community';
  organization: string;
  date: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  building: string;
  status: string;
  intro: string;
  bio: string;
  location: string;
  currentFocus: string;
  experience: string;
  careerGoals: string;
  interests: string[];
  avatarUrl: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export interface GitHubUserData {
  username: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}
