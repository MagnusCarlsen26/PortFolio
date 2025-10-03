import React from 'react';
import './skills.css';

import ReactSvg from '../../assets/svgs/skills/react.svg';
import JavascriptSvg from '../../assets/svgs/skills/javascript.svg';
import PythonSvg from '../../assets/svgs/skills/python.svg';
import NodejsSvg from '../../assets/svgs/skills/nodejs.svg';
import CplusplusSvg from '../../assets/svgs/skills/cplusplus.svg';
import FlaskSvg from '../../assets/svgs/skills/flask.svg';
import MongodbSvg from '../../assets/svgs/skills/mongodb.svg';
import NextjsSvg from '../../assets/svgs/skills/nextdotjs.svg';
import BootstrapSvg from '../../assets/svgs/skills/bootstrap.svg';
import TailwindcssSvg from '../../assets/svgs/skills/tailwindcss.svg';
import AmazonwebservicesSvg from '../../assets/svgs/skills/amazonwebservices.svg'; // Re-added and categorized as DevOps
import FirebaseSvg from '../../assets/svgs/skills/firebase.svg';
import DockerSvg from '../../assets/svgs/skills/docker.svg';
import KubernetesSvg from '../../assets/svgs/skills/kubernetes.svg';
import JavaSvg from '../../assets/svgs/skills/java.svg'; // Import Java SVG

interface Skill {
  name: string;
  icon: string; // Path to the SVG/PNG
  category: 'Languages' | 'Web Development' | 'DevOps';
}

const skills: Skill[] = [
  { name: "React", icon: ReactSvg, category: 'Web Development' },
  { name: "JavaScript", icon: JavascriptSvg, category: 'Languages' },
  { name: "Python", icon: PythonSvg, category: 'Languages' },
  { name: "Node.js", icon: NodejsSvg, category: 'Web Development' },
  { name: "C++", icon: CplusplusSvg, category: 'Languages' },
  { name: "Java", icon: JavaSvg, category: 'Languages' }, // Add Java skill
  { name: "Flask", icon: FlaskSvg, category: 'Web Development' },
  { name: "MongoDB", icon: MongodbSvg, category: 'Web Development' },
  { name: "Next.js", icon: NextjsSvg, category: 'Web Development' },
  { name: "Bootstrap", icon: BootstrapSvg, category: 'Web Development' },
  { name: "Tailwind CSS", icon: TailwindcssSvg, category: 'Web Development' },
  { name: "AWS", icon: AmazonwebservicesSvg, category: 'DevOps' }, // Re-added and categorized as DevOps
  { name: "Firebase", icon: FirebaseSvg, category: 'DevOps' }, // Changed category to DevOps
  { name: "Docker", icon: DockerSvg, category: 'DevOps' },
  { name: "Kubernetes", icon: KubernetesSvg, category: 'DevOps' },
];

const SkillIcons: React.FC = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <div className="skill-icons-container">
      {Object.entries(categorizedSkills).map(([category, skillList]) => (
        <div key={category} className="skill-category-group">
          <h3 className="compact-skill-category-title">{category}:</h3>
          {skillList.map((skill) => (
            <div key={skill.name} className="skill-icon" title={skill.name}>
              <img src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
