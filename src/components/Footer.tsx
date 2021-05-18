import * as React from "react";
import { HitCounter } from "./HitCounter";
import "./styles/Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="music">Music here</div>
      <HitCounter />
    </div>
  );
};
