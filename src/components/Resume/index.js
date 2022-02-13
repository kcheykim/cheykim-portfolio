import React from "react";
import { BsGithub, BsBootstrap } from "react-icons/bs";
import { SiApollographql, SiHandlebarsdotjs, SiMysql, SiInsomnia, SiJquery } from "react-icons/si";
import { DiMongodb, DiHtml5 } from "react-icons/di";
import { GrNode, GrHeroku, GrGraphQl, GrReactjs } from "react-icons/gr";

function Resume({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section id="resume" className="flex-row">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={require("../../assets/images/kcheykim_resume.pdf")} download ><button>Resume</button></a>
      </div>
      <div id="outer-tools">
          <h3 id="tools">
            <li><BsGithub />GitHub </li>
            <li><DiMongodb />MongoDB</li> 
            <li><GrNode />Node.js/Express.js</li>  
            <li><GrHeroku />Heroku</li>  
            <li><DiHtml5 />HTML</li> 
            <li><GrGraphQl />GraphQL</li>  
            <li><SiApollographql />ApolloServer</li>  
            <li><GrReactjs />React</li> 
            <li><SiHandlebarsdotjs />Handlebars</li>  
            <li><SiMysql />MySQL</li>  
            <li><SiInsomnia />Insomnia</li> 
            <li><BsBootstrap />Bootstrap</li> 
            <li><SiJquery />jQuery</li>
          </h3>
        </div>
    </section>
  );
}

export default Resume;