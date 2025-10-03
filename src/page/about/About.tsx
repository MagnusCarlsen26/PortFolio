import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="terminal-pane whoami">
        <pre className="command">$ whoami</pre>
        <p className="output">khushal_sindhav — Full Stack Developer<span className="cursor"></span></p>
      </section>

      <div className="terminal-row">
        <section className="terminal-pane education">
          <pre className="command">$ cat education.txt</pre>
          <div className="output">
            <p>&gt; 2025 IIT Jodhpur - B.Tech AI & Data Science</p>
            <p>&gt; 2021 JHASV, Surat - Class 12 (93%)</p>
            <p>&gt; 2019 JHASV, Surat - Class 10 (91%)<span className="cursor"></span></p>
          </div>
        </section>

        <section className="terminal-pane experience">
          <pre className="command">$ cat experience.log</pre>
          <div className="output">
            <p>&gt; Oasis of Ideas (Feb 2025 – July 2025)</p>
            <p className="indent">- Solely designed, implemented, and maintained an end-to-end system for scraping and processing startup ideas.</p>
            <p className="indent">- Scraped data from multiple websites using asynchronous Python programming.</p>
            <p className="indent">- Processed scraped content via multi-stage LLM pipelines powered by OpenAI, DeepSeek, and Gemini.</p>
            <p className="indent">- Deployed and scaled the system across 8 AWS EC2 instances; used tmux for concurrent task management.</p>
            <p className="indent">- Built a fully automated pipeline for idea extraction, filtering, and curation using LLMs.</p>
            <p>&gt; SURVEY PORTAL Software Intern (Dec 2024)</p>
            <p className="indent">- Developed a custom survey website to conduct surveys at IIT Jodhpur.</p>
            <p className="indent">- The website handled 270 users without any errors during the survey.</p>
            <p className="indent">- Designed a responsive UI and implemented security measures, such as preventing users from changing or skipping responses to questions.</p>
            <p className="indent">- Created a user-friendly admin panel to manage user access effectively.<span className="cursor"></span></p>
          </div>
        </section>
      </div>

      <div className="terminal-row">
        <section className="terminal-pane skills">
          <pre className="command">$ ls skills/</pre>
          <p className="output">C/C++ JavaScript Python NodeJS Flask MongoDB React NextJS Bootstrap Tailwind AWS Firebase Docker Kubernetes<span className="cursor"></span></p>
        </section>

        <section className="terminal-pane achievements">
          <pre className="command">$ ls achievements/</pre>
          <div className="output">
            <p>Pupil at Codeforces (peak rating 1369)</p>
            <p>Secured 352 Global rank in CodeChef Starters 92 (Div. 2)</p>
            <p>Secured 1700 rank in Google Kickstart Round C 2022</p>
            <p>Among top 0.8% in JEE Advanced 2021</p>
            <p>Discovered auth vulnerability in college ERP system</p>
            <p>Made an extension to fill feedback for all courses in one click<span className="cursor"></span></p>
          </div>
        </section>
      </div>

      <section className="terminal-pane projects">
        <pre className="command">$ tree projects/</pre>
        <div className="output">
          <p>├── PRACTO SCRAPER (Dr. Dweepobotee Brahma - Dec 2024)</p>
          <p>│   ├── Scraped data of 6600 doctors in 2 hours.</p>
          <p>│   ├── Implemented a master-worker architecture to accomplish the task.</p>
          <p>│   ├── Deployed the master using Firebase Functions and the worker using Docker containers on AWS Elastic Kubernetes Service (EKS).</p>
          <p>│   └── Addressed challenges related to efficiency, code reusability, and race conditions in Firestore.<span className="cursor"></span></p>
        </div>
      </section>
    </div>
  );
};

export default About;
