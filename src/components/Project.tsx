import * as React from "react";
import ReactHTMLParser from "react-html-parser";
import "./styles/Project.css";

export interface IProject {
  /** Link to repo, expected default is "frontend" for duo repos */
  repo: string;
  /** Name of app */
  title: string;
  /** Tech / libraries used */
  tech: string[];
  /** End off cloudinary string to interpolate srcset with */
  thumbnail: string;
  /** Description of app/site. */
  description: string;
  /** Optional link to backend repo */
  backendRepo?: string;
  /** Link to deployed app/site */
  deployedLink?: string;
}

interface ProjectProps {
  project: IProject;
}

export const Project: React.FC<ProjectProps> = ({
  project: {
    backendRepo,
    description,
    deployedLink,
    repo,
    title,
    tech,
    thumbnail,
  },
}) => {
  /** Generate a responsive image call to cloudinary dynamically. */
  const generateSrcSet = (
    imgLink: string
  ): React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > => {
    return (
      <img
        sizes="(min-width: 601px) 40vw, 70vw"
        srcSet={`
              https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_500/${imgLink} 512w, 
              https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_1024/${imgLink} 1024w`}
        src={`https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_600/${imgLink}`}
        alt={`Thumbnail for ${title}`}
      />
    );
  };

  const renderTechList = () => {
    return tech.map((item, index) => {
      if (tech.length <= index + 1) {
        return item;
      }
      return `${item}, `;
    });
  };

  return (
    <div className="project-container">
      <div>{generateSrcSet(thumbnail)}</div>
      <div className="project-body">
        <h4>{title}</h4>
        <em>{renderTechList()}</em>
        <p>{ReactHTMLParser(description)}</p>
        <a className="project-links" href={repo}>
          Repo
        </a>
        {backendRepo && (
          <a className="project-links" href={backendRepo}>
            Backend Repo
          </a>
        )}
        {deployedLink && (
          <a className="project-links" href={deployedLink}>
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};
