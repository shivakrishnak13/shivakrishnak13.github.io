import React from 'react';
import "../Styles/techstack.css";
import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiRedux, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiMui, 
  SiChakraui, 
  SiSass, 
  SiGit, 
  SiFigma,
  SiMongodb
} from 'react-icons/si';

const SkillsModern = () => {
  const skills = [
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
    { icon: <SiVuedotjs />, name: 'Vue.js', color: '#4FC08D' },
    { icon: <SiRedux />, name: 'Redux Toolkit', color: '#764ABC' },
    { icon: <SiVuedotjs />, name: 'Pinia', color: '#4FC08D' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
    { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiMui />, name: 'Material UI', color: '#0081CB' },
    { icon: <SiChakraui />, name: 'Chakra UI', color: '#319795' },
    { icon: <SiSass />, name: 'SCSS', color: '#CC6699' },
    { icon: <SiGit />, name: 'Git', color: '#F05032' },
    { icon: <SiFigma />, name: 'Figma', color: '#F24E1E' }
  ];

  return (
    <section className='tech-stacks' id='skills'>
      <div className='heading-section'>
        <h1 className='main-heading'>
          Technical <span className='heading-accent'>Skills</span>
        </h1>
      </div>

      <div className='skills-grid'>
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className='skill-card'
            style={{ 
              '--skill-color': skill.color,
              animationDelay: `${index * 0.1}s` 
            }}
          >
            <div className='skill-icon' style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className='skill-name'>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsModern;
