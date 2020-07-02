import React from 'react';
import ProjectFiles from './ProjFiles';

function Projects() {

    function renderProjects(projectsArray) {
        return projectsArray.map((proj, index) => {
            const {link, name, repo, thumbnail} = proj;
            return (
                <li>
                    <img src={thumbnail} className="image"></img>
                    <a href={link}>{name}</a>
                    <br/>
                    <a href={repo} className="icon fa-github" target="_blank">
                        <span className="label">Github</span>
                    </a>
                </li>
            )
        });
    };

    return(
        <div className="work-item">
            <ul className="actions small">
                {renderProjects(ProjectFiles)}
            </ul>
        </div>
    )
};

export default Projects;