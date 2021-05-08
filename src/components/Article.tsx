import * as React from "react";
import "./styles/Article.css";

type HeaderElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type ArticleProps = {
  /** Text to display in the header */
  title: string;
  /** Override header element.
   * Default: <h4></h4>
   */
  titleComponent?: HeaderElement;
  /** Text to display in the Article */
};

export const Article: React.FC<ArticleProps> = ({
  children,
  titleComponent = "h4",
  title,
}) => {
  /** Dynamically create a title and set it's content based on props */
  const header = React.createElement(titleComponent, null, title);
  return (
    <article>
      {header}
      {children}
    </article>
  );
};
