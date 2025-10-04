export interface Project {
  name: string;
  repoName: string;
  isPrivate?: boolean;
  hasRealUsers?: boolean;
  description?: string;
}

export interface ProjectCategory {
  name: string;
  projects: Project[];
}

export const projectsData: ProjectCategory[] = [
  {
    name: "Extension",
    projects: [
      { name: "KodNest Dark", repoName: "KodNest-Dark-Extention", hasRealUsers: true },
      { name: "KodNest VSCode", repoName: "KodNest-VSCode-Extension" },
      { name: "IITJ Feedback", repoName: "IITJ-Feedback-Extention", hasRealUsers: true },
      { name: "ERP Auto Login", repoName: "ERP-Auto-Login", isPrivate: true }
    ]
  },
  {
    name: "Scraping",
    projects: [
      { name: "KodNest Questions", repoName: "KodNest-Question-Scraping" },
      { name: "Practo Scraper", repoName: "Practo-Scraper" }
    ]
  },
  {
    name: "Website",
    projects: [
      { name: "Survey Portal", repoName: "survey-portal", hasRealUsers: true },
      { name: "OASIS Blog", repoName: "OASIS-Blog" }
    ]
  },
  {
    name: "Mobile App",
    projects: [
      { name: "My RN App", repoName: "my-rn-app", isPrivate: true }
    ]
  },
  {
    name: "Linux",
    projects: [
      { name: "Waybar Arch", repoName: "waybarArch" }
    ]
  },
  {
    name: "Trading",
    projects: [
      { name: "AlgoTrading", repoName: "AlgoTrading" }
    ]
  }
];