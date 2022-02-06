import React, { useState } from 'react';
import Project from '../Project';

const PortfolioList = () => {

  const [projects] = useState([
    {
      name: 'Flavor Express',
      src: 'flavor-express.png',
      category: 'commercial',
      description: 'A recipe sharing application.',
      link: '',
    },
    {
      name: 'Music Matcher',
      src: 'music-matcher.png',
      category:'commercial',
      description: 'A music applicaton that returns similar musics.',
      link: '',
    },
    {
      name: 'Celion Dion Fan Page',
      src: 'celine-fanpage.png',
      category: 'commercial',
      description: 'A Fan Page for Celion Dion.',
      link: '',
    },
    {
      name: 'Coding Quiz',
      src: 'coding-quiz.png',
      category: 'commercial',
      description: 'An application that test your knowledge of JavaScript, HTML and CSS.',
      link: '',
    },
    {
      name: 'Note Taker',
      src: 'note-taker-landing.png',
      category: 'commercial',
      description: 'An application that keeps track of your memos.',
      link: '',
    },
    {
      name: 'Password Generator',
      src: 'password-generator.png',
      category: 'portraits',
      description: 'An application that will generator a password base on specification.',
      link: '',
    },
    {
      name: 'Weather Dashboard',
      src: 'weather-dashboard.png',
      category: 'portraits',
      description: 'An application that display weather around the world.',
      link: '',
    },
    {
      name: 'Work Day Scheduler',
      src: 'work-day-scheduler.png',
      category: 'portraits',
      description: 'An application that keeps track of daily schedule.',
      link: '',
    }
  ]);
  //const currentProjects = projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
         <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
