import React, { useState, useEffect } from 'react';
import './about.css';
import Typewriter from '../../components/Typewriter'; // Import the new Typewriter component
import SkillIcons from './SkillIcons'; // Import the new SkillIcons component
import { aboutData, TerminalSection } from '../../constants/aboutData';

const About: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    if (currentSectionIndex < aboutData.terminalSections.length) {
      const timer = setTimeout(() => {
        setCurrentSectionIndex(prev => prev + 1);
      }, calculateDelay(currentSectionIndex));
      return () => clearTimeout(timer);
    }
  }, [currentSectionIndex]);

  const calculateDelay = (index: number): number => {
    if (index === 0) {
      return 0;
    }
    let delay = 0;
    for (let i = 0; i < index; i++) {
      const section = aboutData.terminalSections[i];
      const sectionData = aboutData[section.dataKey];
      delay += sectionData.command.length * 200 + 20;
    }
    return delay;
  };

  const renderSection = (section: TerminalSection, index: number) => {
    const sectionData = aboutData[section.dataKey];
    const delay = calculateDelay(index);
    return (
      <section className={`terminal-pane ${section.className}`} key={section.id}>
        <Typewriter
          command={sectionData.command}
          output={Array.isArray(sectionData.output) ? sectionData.output.map(line => line.replace(/\-\-+/g, '<span style="color: #a855f7">$&</span>').replace(/\|/g, '<span style="color: #a855f7">|</span>')) : [sectionData.output]}
          delay={delay}
        />
        {section.hasSkillIcons && <SkillIcons />}
      </section>
    );
  };

  return (
    <div className="about-container">

      <div className='left-column'>
        {renderSection(aboutData.terminalSections[0], 0)}
        {renderSection(aboutData.terminalSections[1], 1)}
        {renderSection(aboutData.terminalSections[3], 3)}
      </div>
      
      <div className='right-column'>
        {renderSection(aboutData.terminalSections[2], 2)}
        {renderSection(aboutData.terminalSections[4], 4)}
        {renderSection(aboutData.terminalSections[5], 5)}
      </div>
    </div>
  );
};

export default About;
