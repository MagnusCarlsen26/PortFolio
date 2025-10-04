export interface TerminalSection {
  id: string;
  className: string;
  dataKey: keyof Omit<typeof aboutData, "terminalSections">;
  hasSkillIcons?: boolean;
}

interface AboutDataItem {
  command: string;
  output: string[] | string;
}

interface AboutData {
  whoami: AboutDataItem;
  education: AboutDataItem;
  skills: AboutDataItem;
  experience: AboutDataItem;
  achievements: AboutDataItem;
  projects: AboutDataItem;
  terminalSections: TerminalSection[];
}

export const aboutData: AboutData = {
  whoami: {
    command: "$ whoami",
    output: "khushal_sindhav — Full Stack Developer",
  },
  education: {
    command: "$ cat education.txt",
    output: [
      "--------------------------------------------------",
      "| 2025 |  IIT Jodhpur | B.Tech AI & Data Science |",
      "--------------------------------------------------",
      "| 2021 | JHASV, Surat |      Class 12 (93%)      |",
      "--------------------------------------------------",
      "| 2019 | JHASV, Surat |      Class 10 (91%)      |",
      "--------------------------------------------------"
    ],
  },
  skills: {
    command: "$ ls skills/",
    output: [],
  },
  experience: {
    command: "$ cat experience.log",
    output: [
      "> Oasis of Ideas (Feb 2025 – July 2025)",
      "- Solely designed, implemented, and maintained an end-to-end system for scraping and processing startup ideas.",
      "- Scraped data from multiple websites using asynchronous Python programming.",
      "- Processed scraped content via multi-stage LLM pipelines powered by OpenAI, DeepSeek, and Gemini.",
      "- Deployed and scaled the system across 8 AWS EC2 instances; used tmux for concurrent task management.",
      "- Built a fully automated pipeline for idea extraction, filtering, and curation using LLMs.",
      "> SURVEY PORTAL Software Intern (Dec 2024)",
      "- Developed a custom survey website to conduct surveys at IIT Jodhpur.",
      "- The website handled 270 users without any errors during the survey.",
      "- Designed a responsive UI and implemented security measures, such as preventing users from changing or skipping responses to questions.",
      "- Created a user-friendly admin panel to manage user access effectively.",
    ],
  },
  achievements: {
    command: "$ ls achievements/",
    output: [
      "------------------------------------------",
      "|      Achievement       |     Rank      |",
      "------------------------------------------",
      "|      Codeforces        | Pupil (1369)  |",
      "|  CodeChef Starters 92  | 352 (Global)  |",
      "|  Google Kickstart 2022 |     1700      |",
      "|    JEE Advanced 2021   |   Top 0.8%    |",
      "------------------------------------------",
      "> Discovered auth vulnerability in college ERP system",
      "> Made an extension to fill feedback for all courses in one click",
    ],
  },
  projects: {
    command: "$ tree projects/",
    output: [
      "├── PRACTO SCRAPER (Dr. Dweepobotee Brahma - Dec 2024)",
      "│   ├── Scraped data of 6600 doctors in 2 hours.",
      "│   ├── Implemented a master-worker architecture to accomplish the task.",
      "│   ├── Deployed the master using Firebase Functions and the worker using Docker containers on AWS Elastic Kubernetes Service (EKS).",
      "│   └── Addressed challenges related to efficiency, code reusability, and race conditions in Firestore.",
    ],
  },
  terminalSections: [
    { id: "whoami", className: "whoami", dataKey: "whoami" },
    { id: "education", className: "education", dataKey: "education" },
    { id: "skills", className: "skills", dataKey: "skills", hasSkillIcons: true },
    { id: "experience", className: "experience", dataKey: "experience" },
    { id: "achievements", className: "achievements", dataKey: "achievements" },
    { id: "projects", className: "projects", dataKey: "projects" },
  ],
};
