import React, { useState } from 'react';

const Project = ({ project }) => {

    return (
        <div className="mx-2 my-1">   
            <h1>{project.name}</h1>
            <img
                src={require(`../../assets/images/projects/${project.src}`)}
                alt={project.name}
                className="img-thumbnail"
                key={project.name}
            />
            <p>{project.description}</p>
        </div>
    );
};

export default Project;
