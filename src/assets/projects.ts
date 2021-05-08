import { IProject } from "../components/Project";

const projects: IProject[] = [];

const jsNoteDesc = `
<p>
  This is an in browser code executor. Behind the scenes I used the <em>esbuild web assembly</em> API to compile, bundle, and execute user code input, 
  including importing npm packages.
  I used <em>Redux</em> with <em>immer</em> to store the code and markdown cells.
  One really cool feature is cumulative code. Cells have access to variables, imported packages and components created in the preceding cells. 
</p>

<p>
  This project is also published on npm. If you're a developer (or familiar with CLI's) you can easily use this application by running 
  <em>npx @javila-jsnote/cli serve</em> in your terminal.
</p>

<p class="text_small">
  This fun project was the result of a 
  <a href='https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project' target='_blank'>
    Typescript & React course created by Stephen Grider
  </a>. 
</p>
`;

const newsFlashDesc = ``;

const jsTetDesc = ``;

projects.push({
  repo: "https://github.com/javila35/in-browser-compiler",
  title: "JSNote",
  thumbnail: "v1620238345/npm_screenshot_dfgk53.png",
  description: jsNoteDesc,
});

projects.push({
  repo: "https://github.com/javila35/News-Flash-Frontend",
  backendRepo: "https://github.com/javila35/News-Flash-Backend",
  deployedLink: "https://news-flash-site.netlify.app/",
  title: "Newsflash",
  thumbnail: "v1620430852/news-flash.png",
  description: newsFlashDesc,
});

projects.push({
  repo: "https://github.com/javila35/JS-Tetris",
  backendRepo: "",
  deployedLink: "https://mod-3-tetris.herokuapp.com/",
  title: "JS Tetris",
  thumbnail: "v1620430840/js-tet_vwbrkf.png",
  description: jsTetDesc,
});

export default projects;
