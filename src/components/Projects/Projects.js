import React from 'react';
import ProjectFiles from './ProjectFiles';

function Projects() {

    function renderProjects(projectsArray) {
        return projectsArray.map((proj, index) => {
            const {description, link, name, repo, thumbnail} = proj;
            return (
                <li key={index}>
                    <img src={thumbnail} alt={`${name} thumbnail`}></img>
                    <h3>
                        <a href={link} rel="noreferrer" target="_blank" >
                            {name}
                        </a>
                    </h3>
                    <p>{description}</p>
                    <br/>
                    <a href={repo} target="_blank" rel="noreferrer" aria-label="Project Github Repository">
                        <span>Github</span>
                    </a>
                </li>
            );
        });
    };

    return(
        <div>
            <ul>
                {renderProjects(ProjectFiles)}
            </ul>
        </div>
    );
};

export default Projects;