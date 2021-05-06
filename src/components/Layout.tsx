import * as React from "react";
import { LeftColumn } from "./LeftColumn";
import "./styles/Layout.css";
import "./styles/typography.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <LeftColumn />
      <div className="right">{children}</div>
    </>
  );
};
