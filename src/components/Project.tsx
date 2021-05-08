import * as React from "react";
import "./styles/Project.css";

export interface IProject {
  /** Link to repo, expected default is "frontend" for duo repos */
  repo: string;
  /** Name of app */
  title: string;
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
  project: { repo, title, thumbnail, description, backendRepo, deployedLink },
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
        sizes="(min-width: 601px) 40vw, 30vw"
        srcSet={`https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_150/${imgLink} 256w, 
              https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_400/${imgLink} 512w, 
              https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_1024/${imgLink} 1024w`}
        src={`https://res.cloudinary.com/deijyaaid/image/upload/f_auto,c_scale,q_auto,r_30,w_600/${imgLink}`}
        alt={`Thumbnail for ${title}`}
      />
    );
  };

  return (
    <div className="project-container">
      {generateSrcSet(thumbnail)}
      <div className="project-body">
        <h4 className="project-text">{title}</h4>
        <p>{description}</p>
        <p>Description coming soon</p> {/* //! Remove this line */}
        <div className="project-text">
          <a href={repo}>Repo</a>
          {backendRepo && <a href={backendRepo}>Backend Repo</a>}
          {deployedLink && <a href={deployedLink}>Live Site</a>}
        </div>
      </div>
    </div>
  );
};
