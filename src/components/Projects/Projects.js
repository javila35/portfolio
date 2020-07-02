import React from 'react';
import ProjectFiles from './ProjFiles';

function Projects() {

    function renderProjects(projectsArray) {
        return projectsArray.map((proj, index) => {
            const {description, link, name, repo, thumbnail} = proj;
            return (
                <li key="index" className="work-item">
                    <img src={thumbnail} className="image" alt={`${name} thumbnail`}></img>
                    <h3>
                        <a href={link} target="_blank">
                            {name}
                        </a>
                    </h3>
                    <p>{description}</p>
                    <br/>
                    <a href={repo} className="icon fa-github" target="_blank">
                        <span className="label">Github</span>
                    </a>
                </li>
            )
        });
    };

    return(
        <div>
            <ul className="actions">
                {renderProjects(ProjectFiles)}
            </ul>
        </div>
    )
};

export default Projects;