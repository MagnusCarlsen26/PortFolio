import React, { useState, useEffect } from 'react';
import './about.css';
import Typewriter from '../../components/Typewriter'; // Import the new Typewriter component
import SkillIcons from './SkillIcons'; // Import the new SkillIcons component

const About: React.FC = () => {
  const whoamiCommand = "$ whoami";
  const whoamiOutput = "khushal_sindhav — Full Stack Developer";
  const [typedWhoamiCommand, setTypedWhoamiCommand] = useState("");
  const [showWhoamiOutput, setShowWhoamiOutput] = useState(false);

  const projectLines = [
    { content: "├── PRACTO SCRAPER (Dr. Dweepobotee Brahma - Dec 2024)", type: "line" },
    { content: "│   ├── Scraped data of 6600 doctors in 2 hours.", type: "bullet" },
    { content: "│   ├── Implemented a master-worker architecture to accomplish the task.", type: "bullet" },
    { content: "│   ├── Deployed the master using Firebase Functions and the worker using Docker containers on AWS Elastic Kubernetes Service (EKS).", type: "bullet" },
    { content: "│   └── Addressed challenges related to efficiency, code reusability, and race conditions in Firestore.", type: "bullet" },
  ];

  const [animatedProjectLines, setAnimatedProjectLines] = useState(projectLines.map(line => ({ ...line, animated: false })));

  // Remove whoami specific typing animation logic
  // useEffect(() => {
  //   let i = 0;
  //   const typingInterval = setInterval(() => {
  //     setTypedWhoamiCommand(whoamiCommand.substring(0, i + 1));
  //     i++;
  //     if (i === whoamiCommand.length) {
  //       clearInterval(typingInterval);
  //       setTimeout(() => setShowWhoamiOutput(true), 0); // Instant output after typing
  //     }
  //   }, 120); // 120ms per character
  //   return () => clearInterval(typingInterval);
  // }, []);

  // Keep project line animation logic for now, will integrate into Typewriter if applicable
  useEffect(() => {
    if (true) { // This will need to be triggered by the Typewriter completion
      animatedProjectLines.forEach((line, index) => {
        setTimeout(() => {
          setAnimatedProjectLines(prev => {
            const newLines = [...prev];
            newLines[index] = { ...newLines[index], animated: true };
            return newLines;
          });
        }, 600 + (index * (line.type === "line" ? 250 : 80))); // Stagger animation
      });
    }
  }, []); // Depend on a state that indicates all commands are typed

  return (
    <div className="about-container">
      <section className="terminal-pane whoami">
        <Typewriter
          command={whoamiCommand}
          output={[whoamiOutput]} // Changed to array
          delay={0}
        />
      </section>

      <div className="terminal-row">
        <section className="terminal-pane education">
          <Typewriter
            command="$ cat education.txt"
            output={[
              ">& 2025 IIT Jodhpur - B.Tech AI & Data Science",
              ">& 2021 JHASV, Surat - Class 12 (93%)",
              ">& 2019 JHASV, Surat - Class 10 (91%)",
            ]}
            delay={whoamiCommand.length * 200 + 20} // Delay after whoami command finishes + stagger
          />
        </section>

        <section className="terminal-pane skills">
          <Typewriter
            command="$ ls skills/"
            output={[]}
            delay={whoamiCommand.length * 200 + ("$ cat education.txt".length * 200) + 40} // Delay after education command finishes + stagger
          />
          <SkillIcons /> {/* Render the SkillIcons component here */}
        </section>
      </div>

      <div className="terminal-row">
        <section className="terminal-pane experience">
          <Typewriter
            command="$ cat experience.log"
            output={[
              ">& Oasis of Ideas (Feb 2025 – July 2025)",
              "- Solely designed, implemented, and maintained an end-to-end system for scraping and processing startup ideas.",
              "- Scraped data from multiple websites using asynchronous Python programming.",
              "- Processed scraped content via multi-stage LLM pipelines powered by OpenAI, DeepSeek, and Gemini.",
              "- Deployed and scaled the system across 8 AWS EC2 instances; used tmux for concurrent task management.",
              "- Built a fully automated pipeline for idea extraction, filtering, and curation using LLMs.",
              ">& SURVEY PORTAL Software Intern (Dec 2024)",
              "- Developed a custom survey website to conduct surveys at IIT Jodhpur.",
              "- The website handled 270 users without any errors during the survey.",
              "- Designed a responsive UI and implemented security measures, such as preventing users from changing or skipping responses to questions.",
              "- Created a user-friendly admin panel to manage user access effectively.",
            ]}
            delay={whoamiCommand.length * 200 + ("$ cat education.txt".length * 200) + ("$ ls skills/".length * 200) + 60} // Delay after skills command finishes + stagger
          />
        </section>

        <section className="terminal-pane achievements">
          <Typewriter
            command="$ ls achievements/"
            output={[
              "Pupil at Codeforces (peak rating 1369)",
              "Secured 352 Global rank in CodeChef Starters 92 (Div. 2)",
              "Secured 1700 rank in Google Kickstart Round C 2022",
              "Among top 0.8% in JEE Advanced 2021",
              "Discovered auth vulnerability in college ERP system",
              "Made an extension to fill feedback for all courses in one click",
            ]}
            delay={whoamiCommand.length * 200 + ("$ cat education.txt".length * 200) + ("$ ls skills/".length * 200) + ("$ cat experience.log".length * 200) + 80} // Delay after experience command finishes + stagger
          />
        </section>
      </div>

      <section className="terminal-pane projects">
        <Typewriter
          command="$ tree projects/"
          output={[
            "├── PRACTO SCRAPER (Dr. Dweepobotee Brahma - Dec 2024)",
            "│   ├── Scraped data of 6600 doctors in 2 hours.",
            "│   ├── Implemented a master-worker architecture to accomplish the task.",
            "│   ├── Deployed the master using Firebase Functions and the worker using Docker containers on AWS Elastic Kubernetes Service (EKS).",
            "│   └── Addressed challenges related to efficiency, code reusability, and race conditions in Firestore.",
          ]}
          delay={whoamiCommand.length * 200 + ("$ cat education.txt".length * 200) + ("$ ls skills/".length * 200) + ("$ cat experience.log".length * 200) + ("$ ls achievements/".length * 200) + 100} // Delay after achievements command finishes + stagger
        />
      </section>
    </div>
  );
};

export default About;
