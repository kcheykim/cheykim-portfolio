import React, { useState } from 'react';

const Project = ({project}) => {

  return (
    <div>
          <img
            src={require(`../../assets/images/projects/${project.src}`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
          <h1>{project.name}</h1>
          <p>{project.description}</p>
    </div>
  );
};

export default Project;
