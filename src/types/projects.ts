export interface ProjectFeature {
  title: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDeployment {
  label: string;
}

export interface ProjectImages {
  preview: string;
  architecture: string;
  workflow: string;
  erd?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;

  images: ProjectImages;

  techStack: string[];

  features: ProjectFeature[];

  architecture: string[];

  links: ProjectLink[];

  deployment: ProjectDeployment[];
}
