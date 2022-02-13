import React from "react";
import { BsGithub, BsBootstrap } from "react-icons/bs";
import { SiApollographql, SiHandlebarsdotjs, SiMysql, SiInsomnia, SiJquery } from "react-icons/si";
import { DiReact, DiMongodb, DiHtml5 } from "react-icons/di";
import { GrNode, GrHeroku, GrGraphQl, GrReactjs } from "react-icons/gr";

function Resume() {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <div>
      <div>
        <a href={require("../../assets/images/kcheykim_resume.pdf")} download ><button>Resume</button></a>
      </div>
        <div>
          <h3 id="tools" className="mx-5">
            <BsGithub />
            <DiReact />
            <DiMongodb />
            <GrNode /> 
            <GrHeroku /> 
            <DiHtml5 />
            <GrGraphQl /> 
            <SiApollographql /> 
            <GrReactjs />
            <SiHandlebarsdotjs /> 
            <SiMysql /> 
            <SiInsomnia />
            <BsBootstrap /> 
            <SiJquery />
          </h3>
        </div>
      </div>
      
    </section>
  );
}

export default Resume;