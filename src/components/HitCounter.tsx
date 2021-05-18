import * as React from "react";

const postConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const HitCounter: React.FC = () => {
  const [counter, setCounter] = React.useState<number | null>(null);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    token ? null : localStorage.setItem("visited", "true");
    // If we find a token, do a get request.
    if (token) {
      fetch("https://nameless-waters-21558.herokuapp.com/counter")
        .then((res) => res.json())
        .then((res) => setCounter(res));
    } else {
      // If we don't find a token, set one and do a post request
      fetch("https://nameless-waters-21558.herokuapp.com/", postConfig)
        .then((res) => res.json())
        .then((res) => setCounter(res));
    }
  }, []);

  return <div className="hit-counter">{counter}</div>;
};
