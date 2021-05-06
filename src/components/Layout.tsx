import * as React from "react";
import { LeftColumn } from "./Left";
import "./styles/Layout.css";
import "./styles/typography.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <LeftColumn />
      {children}
    </>
  );
};
