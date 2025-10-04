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
    
    // Function to color company names dynamically
    const colorCompanyNames = (text: string, colors: string[] = []): string => {
      if (colors.length === 0) return text;
      
      let coloredText = text;
      colors.forEach((color, colorIndex) => {
        // Find lines that start with > or ├── which typically indicate company/project names
        const companyPattern = colorIndex === 0
          ? /^>(.+?)(\s*\([^)]*\))?$/gm  // Match lines starting with >
          : /^├──(.+?)(\s*\([^)]*\))?$/gm; // Match lines starting with ├──
        
        coloredText = coloredText.replace(companyPattern, (match) => {
          return `<span style="color: ${color}; font-weight: bold;">${match}</span>`;
        });
      });
      
      return coloredText;
    };
    
    // Function to process color tags
    const processColorTags = (text: string): string => {
      let processedText = text;
      
      // Process color tags: [color]text[/color]
      processedText = processedText.replace(
        /\[(green|cyan|amber|magenta|gray)\]([^[]+)\[\/\1\]/g,
        (match, color, content) => {
          const colorMap: { [key: string]: string } = {
            green: '#10b981',    // emerald-500
            cyan: '#06b6d4',     // cyan-500
            amber: '#f59e0b',    // amber-500
            magenta: '#ec4899',  // pink-500
            gray: '#6b7280'      // gray-500
          };
          
          return `<span style="color: ${colorMap[color]};">${content}</span>`;
        }
      );
      
      // Process timeline dates in brackets to be gray
      processedText = processedText.replace(
        /\[([^\]]+(?:\d{4}[^\]]*)?)\]/g,
        '<span style="color: #6b7280;">[$1]</span>'
      );
      
      return processedText;
    };
    
    return (
      <section className={`terminal-pane ${section.className}`} key={section.id}>
        <Typewriter
          command={sectionData.command}
          output={Array.isArray(sectionData.output)
            ? sectionData.output.map(line => {
                let processedLine = line
                  .replace(/\-\-+/g, '<span style="color: #a855f7">$&</span>')
                  .replace(/\|/g, '<span style="color: #a855f7">|</span>');
                
                // Apply company colors if available
                if ('companyColors' in sectionData && sectionData.companyColors && sectionData.companyColors.length > 0) {
                  processedLine = colorCompanyNames(processedLine, sectionData.companyColors);
                }
                
                // Process color tags
                processedLine = processColorTags(processedLine);
                
                return processedLine;
              })
            : [sectionData.output]}
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
