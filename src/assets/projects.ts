import { IProject } from "../components/Project";

const projects: IProject[] = [];

projects.push({
  repo: "https://github.com/javila35/in-browser-compiler",
  title: "JSNote",
  thumbnail: "v1620238345/npm_screenshot_dfgk53.png",
  description: "",
});

projects.push({
  repo: "https://github.com/javila35/News-Flash-Frontend",
  backendRepo: "https://github.com/javila35/News-Flash-Backend",
  deployedLink: "https://news-flash-site.netlify.app/",
  title: "Newsflash",
  thumbnail: "v1620430852/news-flash.png",
  description: "",
});

projects.push({
  repo: "https://github.com/javila35/JS-Tetris",
  backendRepo: "",
  deployedLink: "https://mod-3-tetris.herokuapp.com/",
  title: "JS Tetris",
  thumbnail: "v1620430840/js-tet_vwbrkf.png",
  description: "",
});

export default projects;
