import * as React from "react";
import { LeftColumn } from "./LeftColumn";
import "./styles/Layout.css";
import "./styles/Typography.css";

interface LayoutProps {
  /** Whether or not to display Joe's picture */
  noLeft?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, noLeft }) => {
  return (
    <>
      {!noLeft && <LeftColumn />}
      <div className={noLeft ? "center" : "right"}>{children}</div>
    </>
  );
};
