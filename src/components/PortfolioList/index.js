import React, { useState } from "react";
import Project from "../Project";

const PortfolioList = ({tech}) => {

  const [projects] = useState([
    {
      name: "GIFT",
      src: "gift.png",
      tech: "Fullstack",
      description: "A gift solution app.",
      link: "https://gift-p3.herokuapp.com/",
      git: "https://github.com/kcheykim/GIFT.git"
    },
    {
      name: "Flavor Express",
      src: "flavor-express.png",
      tech: "Fullstack",
      description: "A recipe sharing app.",
      link: "https://flavor-express.herokuapp.com/",
      git: "https://github.com/kcheykim/FlavorExpress.git"
    },
    {
      name: "Music Matcher",
      src: "music-matcher.png",
      tech:"Front-End",
      description: "A music app that returns similar musics.",
      link: "https://kcheykim.github.io/MusicMatcher/",
      git: "https://github.com/kcheykim/MusicMatcher.git"
    },
    {
      name: "Coding Quiz",
      src: "coding-quiz.png",
      tech: "Front-End",
      description: "A quiz app for JavaScript, HTML and CSS.",
      link: "https://kcheykim.github.io/coding-quiz/",
      git: "https://github.com/kcheykim/coding-quiz.git"
    },
    {
      name: "Note Taker",
      src: "note-taker-landing.png",
      tech: "Back-End",
      description: "A note taking app.",
      link: "https://sleepy-cove-15810.herokuapp.com/",
      git: "https://github.com/kcheykim/note-taker.git"
    },
    {
      name: "Weather Dashboard",
      src: "weather-dashboard.png",
      tech: "Front-End",
      description: "A weather app.",
      link: "https://kcheykim.github.io/weather-dashboard/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
    },
    {
      name: "Work Day Scheduler",
      src: "work-day-scheduler.png",
      tech: "Front-End",
      description: "An app that keeps track of daily tasks.",
      link: "https://kcheykim.github.io/work-day-scheduler/",
      git: "https://github.com/kcheykim/work-day-scheduler.git"
    }
  ]);

  return (
    <div className="outer-container">
      <div className=" flex-row project-container">
        {projects.map((project, i) => (
         <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
