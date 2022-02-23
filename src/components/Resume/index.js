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
        <a href={require("../../assets/images/kosalcheykim_resume.pdf")} download ><button>Resume</button></a>
      </div>
      <div id="outer-tools">
          <h3 id="tools" className="mx-5"><BsGithub />GitHub, <DiMongodb />MongoDB, <GrNode />Node/Express/JavaScript, 
          <GrHeroku />Heroku, <DiHtml5 />HTML, <GrGraphQl />GraphQL, <SiApollographql />ApolloServer, <GrReactjs />React, 
          <SiHandlebarsdotjs />Handlebars, <SiMysql />MySQL, <SiInsomnia />Insomnia, <BsBootstrap />Bootstrap, <SiJquery />jQuery
          </h3>
        </div>
    </section>
  );
}

export default Resume;