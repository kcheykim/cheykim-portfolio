import React from 'react';
import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {

    return (
        <div className="mx-2 my-1 flex-rowWe ">
            <h4>{project.name}
            <span id="icon" className="mx-5"><a href={project.git}><BsGithub /> GitHub Link</a></span></h4>
            <a href={project.link}><img src={require(`../../assets/images/projects/${project.src}`)}
                alt={project.name}
                className="img-thumbnail"
                key={project.name} /></a>
            <p id="description">{project.description}</p>
        </div>
    );
};

export default Project;