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

interface ExperienceDataItem extends AboutDataItem {
  companyColors?: string[];
}

interface ProjectsDataItem extends AboutDataItem {
  companyColors?: string[];
  isComponent?: boolean;
}

interface BlogsDataItem extends AboutDataItem {
  isComponent?: boolean;
}

interface AboutData {
  whoami: AboutDataItem;
  education: AboutDataItem;
  skills: AboutDataItem;
  experience: ExperienceDataItem;
  achievements: AboutDataItem;
  projects: ProjectsDataItem;
  blogs: BlogsDataItem;
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
      "| 2021 | JHASV, Surat |      Class 12 (93%)      |",
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
      "> Oasis of Ideas - SWE  [Feb 2025 – July 2025]",
      " ▸ [green]Designed[/green] and [green]maintained[/green] an end-to-end system for startup idea processing.",
      " ▸ [green]Scraped[/green] data from websites using [cyan]asynchronous Python[/cyan].",
      " ▸ [green]Processed[/green] content via [cyan]LLM pipelines[/cyan] (OpenAI, DeepSeek, Gemini).",
      " ▸ [green]Deployed[/green] system across [amber]8 AWS EC2 instances[/amber]; used [cyan]tmux[/cyan] for task management.",
      " ▸ [green]Built[/green] a [green]fully automated pipeline[/green] for idea extraction and curation.",
      " ",
      "> Survey Portal - SWE Intern  [Dec 2024]",
      " ▸ [green]Developed[/green] a survey website for IIT Jodhpur; handled [amber]270 users[/amber] without errors.",
      " ▸ [green]Designed[/green] a [cyan]responsive UI[/cyan] and added [cyan]security measures[/cyan] to prevent misuse.",
      " ▸ [green]Created[/green] an [green]admin panel[/green] for effective user access management.",
    ],
    companyColors: ["#FF00FF", "#FF00FF"],
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
    output: "", // Empty output since we're rendering a component
    isComponent: true, // Flag to indicate this should render a component
  },
  blogs: {
    command: "$ ls blogs/",
    output: "",
    isComponent: true,
  },
  terminalSections: [
    { id: "whoami", className: "whoami", dataKey: "whoami" },
    { id: "education", className: "education", dataKey: "education" },
    { id: "skills", className: "skills", dataKey: "skills", hasSkillIcons: true },
    { id: "experience", className: "experience", dataKey: "experience" },
    { id: "achievements", className: "achievements", dataKey: "achievements" },
    { id: "projects", className: "projects", dataKey: "projects" },
    { id: "blogs", className: "blogs", dataKey: "blogs" },
  ],
};
