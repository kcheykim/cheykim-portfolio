import React from 'react';

import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {

    return (
        <div className="mx-2 my-1">
            <h1><a href={project.link}>{project.name}</a>
            <span className="mx-5"><a href={project.git}><BsGithub /></a></span></h1>
            <img src={require(`../../assets/images/projects/${project.src}`)}
                alt={project.name}
                className="img-thumbnail"
                key={project.name} />
            <p>{project.description}</p>
        </div>
    );
};

export default Project;