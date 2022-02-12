import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiReact, DiMongodb } from "react-icons/di";
import { faNodeJs } from "react-icons/fa";
import { GrNode, GrHeroku } from "react-icons/gr";

function Resume() {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <div>
        <h3 className="mx-5"><BsGithub /> <DiReact /> <DiMongodb /> <GrNode /> <GrHeroku /> </h3>
      </div>
      <div>
      <a href="cheykim-portfolio/assets/images/kcheykim_resume.pdf"><button>Resume</button></a>
      </div>
    </section>
  );
}

export default Resume;