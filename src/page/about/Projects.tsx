
import React, { useState } from 'react';
import { projectsData, Project, ProjectCategory } from '../../constants/projectsData';
import './projects.css';

const Projects: React.FC = () => {
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const getGitHubUrl = (repoName: string, isPrivate: boolean = false) => {
    if (isPrivate) return '#'; // Private repos don't have public links
    return `https://github.com/MagnusCarlsen26/${repoName}`;
  };

  const getCategoryColor = (categoryName: string): string => {
    const colorMap: { [key: string]: string } = {
      'Extension': '#00ff7f',      // Neon green
      'Scraping': '#1f6feb',       // Bright blue
      'Website': '#ffae00',        // Amber yellow
      'Mobile App': '#ff66c4',     // Soft magenta
      'Linux': '#ff5555',          // Terminal red
      'Trading': '#00e5ff'         // Cyan
    };
    return colorMap[categoryName] || '#00ff7f';
  };

  const getProjectTooltip = (project: Project): string => {
    if (project.hasRealUsers) {
      return 'Real users actively using this project';
    }
    return `View ${project.name} on GitHub`;
  };

  const handleProjectHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const tooltip = target.getAttribute('data-tooltip');
    
    // Clear any existing hide timeout
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    
    // Create or update tooltip element
    let tooltipEl = document.getElementById('project-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'project-tooltip';
      tooltipEl.style.position = 'fixed';
      tooltipEl.style.zIndex = '99999';
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.display = 'block';
      tooltipEl.style.backgroundColor = '#1a1a2e';
      tooltipEl.style.color = '#d4d4d4';
      tooltipEl.style.padding = '4px 8px';
      tooltipEl.style.borderRadius = '4px';
      tooltipEl.style.fontSize = '11px';
      tooltipEl.style.whiteSpace = 'nowrap';
      tooltipEl.style.border = '1px solid #00ff7f';
      tooltipEl.style.boxShadow = '0 0 8px rgba(0, 255, 127, 0.3)';
      tooltipEl.style.opacity = '0';
      tooltipEl.style.transition = 'opacity 0.2s ease';
      document.body.appendChild(tooltipEl);
    }
    
    tooltipEl.textContent = tooltip || '';
    
    // Calculate position to ensure tooltip is within viewport
    const tooltipHeight = 30; // Approximate height of tooltip
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    
    let topPosition, leftPosition;
    
    // Position tooltip above or below based on available space
    if (spaceAbove > spaceBelow + tooltipHeight) {
      // Position above
      topPosition = rect.top - tooltipHeight - 8;
    } else {
      // Position below
      topPosition = rect.bottom + 8;
    }
    
    // Ensure tooltip doesn't go off the top of the screen
    if (topPosition < 10) {
      topPosition = 10;
    }
    
    // Calculate left position to center tooltip
    leftPosition = rect.left + rect.width / 2;
    
    // Ensure tooltip doesn't go off the sides of the screen
    const tooltipWidth = 200; // Approximate max width
    if (leftPosition - tooltipWidth / 2 < 10) {
      leftPosition = 10 + tooltipWidth / 2;
    }
    if (leftPosition + tooltipWidth / 2 > window.innerWidth - 10) {
      leftPosition = window.innerWidth - 10 - tooltipWidth / 2;
    }
    
    tooltipEl.style.top = `${topPosition}px`;
    tooltipEl.style.left = `${leftPosition}px`;
    tooltipEl.style.transform = 'translateX(-50%)';
    
    // Clear any existing tooltip timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    
    // Show tooltip with delay
    const newTimeout = setTimeout(() => {
      if (tooltipEl) {
        tooltipEl.style.opacity = '1';
      }
    }, 300);
    
    setTooltipTimeout(newTimeout);
  };

  const handleProjectLeave = () => {
    // Clear any existing tooltip timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
      setTooltipTimeout(null);
    }
    
    // Set a delay before hiding the tooltip to allow moving to adjacent elements
    const newHideTimeout = setTimeout(() => {
      const tooltipEl = document.getElementById('project-tooltip');
      if (tooltipEl) {
        tooltipEl.style.opacity = '0';
        setTimeout(() => {
          if (tooltipEl.parentNode) {
            tooltipEl.parentNode.removeChild(tooltipEl);
          }
        }, 200);
      }
    }, 100); // Small delay to allow moving to adjacent elements
    
    setHideTimeout(newHideTimeout);
  };

  return (
    <div className="projects-container">
      <div className="projects-flowchart">
        {/* Categories row */}
        <div className="categories-row">
          {projectsData.map((category, index) => (
            <div key={index} className="category-node" style={{ borderBottomColor: getCategoryColor(category.name) }}>
              <div className="category-name">{category.name.toUpperCase()}</div>
              <div className="category-badge">{category.projects.length} Projects</div>
            </div>
          ))}
        </div>
        
        {/* Projects row */}
        <div className="projects-row">
          {projectsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="projects-column">
              {category.projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="project-node"
                  style={{ borderColor: getCategoryColor(category.name) }}
                  data-tooltip={getProjectTooltip(project)}
                  onMouseEnter={handleProjectHover}
                  onMouseLeave={handleProjectLeave}
                >
                  <a
                    href={getGitHubUrl(project.repoName, project.isPrivate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.name}
                  </a>
                  {project.hasRealUsers && (
                    <span className="real-users-tag">real users</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Connection lines */}
        <svg className="connection-lines" preserveAspectRatio="none">
          {projectsData.map((category, categoryIndex) => {
            // Calculate the center position of each category column
            const columnWidth = 100 / projectsData.length;
            const position = (categoryIndex * columnWidth) + (columnWidth / 2);
            return (
              <g key={categoryIndex}>
                {/* Vertical line from category to first project */}
                <line
                  x1={`${position}%`}
                  y1="0"
                  x2={`${position}%`}
                  y2="100%"
                  stroke={getCategoryColor(category.name)}
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.5"
                />
              </g>
            );
          })}
        </svg>
        
        {/* Additional text at the end */}
        <div className="projects-footer">
          and many more half completed projects...
        </div>
      </div>
    </div>
  );
};

export default Projects;