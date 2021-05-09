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
    Typescript & React course created by Stephen Grider.
  </a>
</p>
`;

const newsFlashDesc = `
  This was my capstone project from my time at Flatiron School. I didn't actually know what I wanted to make, which made it very difficult to finish.
  I ended up settling on a news aggregator site, and this was the result. Since finishing school, I used this project as an opportunity to learn <em>Typescript</em> and the popular
  <em>react-query</em> library.
`;

const jsTetDesc = `
  This was my third project at Flatiron, and my first attempt at paired programming.
  I had two great partners working on this and  I learned a lot about working in a codebase with others.
  It was also just a very fun project to make, every break from code during school was spent playing Tetris.
  It's a very simple app, but I learned a lot about CSS, HTML, and Javascript from this project.
`;

projects.push({
  repo: "https://github.com/javila35/in-browser-compiler",
  title: "JSNote",
  tech: ["React", "Typescript", "Redux", "esbuild"],
  thumbnail: "v1620238345/npm_screenshot_dfgk53.png",
  description: jsNoteDesc,
});

projects.push({
  repo: "https://github.com/javila35/News-Flash-Frontend",
  backendRepo: "https://github.com/javila35/News-Flash-Backend",
  deployedLink: "https://news-flash-site.netlify.app/",
  title: "Newsflash",
  tech: ["React", "Typescript", "Rails", "react-query"],
  thumbnail: "v1620430852/news-flash.png",
  description: newsFlashDesc,
});

projects.push({
  repo: "https://github.com/javila35/JS-Tetris",
  backendRepo: "",
  deployedLink: "https://mod-3-tetris.herokuapp.com/",
  title: "JS Tetris",
  tech: ["Javascript"],
  thumbnail: "v1620430840/js-tet_vwbrkf.png",
  description: jsTetDesc,
});

export default projects;
