import React, { useState } from "react";
import Project from "../Project";

const PortfolioList = () => {

  const [projects] = useState([
    {
      name: "Flavor Express",
      src: "flavor-express.png",
      category: "commercial",
      description: "A recipe sharing app.",
      link: "https://flavor-express.herokuapp.com/",
      git: "https://github.com/kcheykim/FlavorExpress.git"
    },
    {
      name: "Music Matcher",
      src: "music-matcher.png",
      category:"commercial",
      description: "A music app that returns similar musics.",
      link: "https://kcheykim.github.io/MusicMatcher/",
      git: "https://github.com/kcheykim/MusicMatcher.git"
    },
    {
      name: "Celion Dion Fan Page",
      src: "celine-fanpage.png",
      category: "commercial",
      description: "A Fan Page for Celion Dion.",
      link: "https://kcheykim.github.io/fanpage-prework/",
      git: "https://github.com/kcheykim/fanpage-prework.git"
    },
    {
      name: "Coding Quiz",
      src: "coding-quiz.png",
      category: "commercial",
      description: "An quiz app for JavaScript, HTML and CSS.",
      link: "https://kcheykim.github.io/coding-quiz/",
      git: "https://github.com/kcheykim/coding-quiz.git"
    },
    {
      name: "Note Taker",
      src: "note-taker-landing.png",
      category: "commercial",
      description: "An note taking app.",
      link: "https://sleepy-cove-15810.herokuapp.com/",
      git: "https://github.com/kcheykim/note-taker.git"
    },
    {
      name: "Password Generator",
      src: "password-generator.png",
      category: "portraits",
      description: "A password generator app.",
      link: "https://kcheykim.github.io/password-generator/",
      git: "https://github.com/kcheykim/password-generator.git"
    },
    {
      name: "Weather Dashboard",
      src: "weather-dashboard.png",
      category: "portraits",
      description: "An weather app.",
      link: "https://kcheykim.github.io/weather-dashboard/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
    },
    {
      name: "Work Day Scheduler",
      src: "work-day-scheduler.png",
      category: "portraits",
      description: "An application that keeps track of daily schedule.",
      link: "https://kcheykim.github.io/work-day-scheduler/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
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
