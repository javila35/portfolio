import * as React from "react";
import { TextScramble } from "./TextScramble";

const postConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const HitCounter: React.FC = () => {
  const visitCount = React.useRef<HTMLDivElement | null>(null);
  const [counter, setCounter] = React.useState<number | null>(null);
  const [hover, setHover] = React.useState<boolean>(false);
  let fx;

  /** Watch for ref to sync up to declare the text scramble class */
  React.useEffect(() => {
    //   console.log("reinstantiating textScramble");
    if (visitCount && visitCount.current && !fx) {
      fx = new TextScramble(visitCount.current);
    }
  }, [visitCount.current]);

  /** Fetch visitor count from backend */
  React.useEffect(() => {
    const token = typeof window !== 'undefined' && window.localStorage.getItem("token");
    token ? null : window.localStorage.setItem("visited", "true");
    // If we find a token, do a get request.
    if (token) {
      fetch("https://nameless-waters-21558.herokuapp.com/counter")
        // fetch("http://localhost:3000/counter/")
        .then((res) => res.json())
        .then((res) => setCounter(res))
        .catch(() => null);
    } else {
      // If we don't find a token, set one and do a post request
      fetch("https://nameless-waters-21558.herokuapp.com/", postConfig)
        // fetch("http://localhost:3000/", postConfig)
        .then((res) => res.json())
        .then((res) => setCounter(res));
    }
  }, []);

  const onEnterHover = () => {
    if (visitCount && visitCount.current && fx && !hover) {
      fx.setText("# of total visitors");
      setHover(true);
    }
    (() =>
      setTimeout(() => {
        setHover(false);
      }, 10))();
  };

  const onLeaveHover = () => {
    fx = new TextScramble(visitCount.current);
    fx.setText(counter.toString());
  };

  return (
    <div
      className="hit-counter neon-text"
      ref={visitCount}
      onMouseEnter={onEnterHover}
      onMouseLeave={onLeaveHover}
    >
      {counter}
    </div>
  );
};
