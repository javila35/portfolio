import * as React from "react";
import { Link } from "gatsby";
import { Project, IProject, Layout } from "../components";
import ProjectArray from "../assets/projects";

const Projects: React.FC = () => {
  const renderProjects = (projects: IProject[]) => {
    return projects.map((project, index) => {
      return <Project key={index} project={project}></Project>;
    });
  };

  return (
    <Layout noLeft>
      <nav>
        <Link to="/">{"<- Back"}</Link>
      </nav>
      <h5 style={{ color: "red" }}>
        {
          "This part of the site is under construction. Check back soon. <3 5/7/21"
        }
      </h5>
      <h2>Projects</h2>
      {renderProjects(ProjectArray)}
    </Layout>
  );
};

export default Projects;
