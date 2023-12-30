import DigitalAgency from "../images/DigitalAgency.png";
import Rockets from "../images/RocketsWebsite.png";
import SpaceWeb from "../images/SpaceWebsite.png";
import Todo from "../images/TodoApp.png";
import Landwind from "../images/Landwind.png";
import Finsweet from "../images/finsweet.png";

const projectsConfig = [
  {
    title: "SPACE X",
    previewImage: Rockets,
    description:
      "Space X Website, built to show Rocket and Capsule details, app built with ReactJs and TailwindCss.",
    liveDemoLink: "https://agono-david-frontend-developer.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/AgonoDavid-FrontendDeveloper",
    backgroundColor: "bg-blue-500",
  },

  {
    title: "Solar System",
    previewImage: SpaceWeb,
    description:
      "In this project, i was able to implement react state management to manage the data being displayed on the ui at certain times, routing was implemented to navigate across different pages. This project was built with ReactJs and TailwindCss",
    liveDemoLink: "https://space-website-r2zu.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/SpaceWebsite",
    backgroundColor: "bg-gray-800",
  },
  {
    title: "Digital Agency Landing Page",
    previewImage: DigitalAgency,
    description:
      "A landing Page built for practice, this particular project was done to test my styling, it proved quite challenging due to the position of certain components but it was a fun project. This was built with Html and css",
    liveDemoLink: "https://tiny-truffle-159b3f.netlify.app/",
    githubLink: "https://github.com/AgonoDavid/DigitalAgencySolution",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "Branding Landing Page",
    previewImage: Landwind,
    description:
      "A landing page built with Html, Css and Javascript to test my ui skill.",
    liveDemoLink: "https://landwind-agonodavid.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/Landwind",
    backgroundColor: "",
  },
  {
    title: "Finsweet Complete Web Application",
    previewImage: Finsweet,
    description:
      "A dynamic web application developed using React.js, styled with Chakra UI, and enriched with Framer Motion for captivating animations. This project seamlessly blends a powerful front-end framework with a modern and user-friendly design, making it both visually appealing and highly functional.",
    liveDemoLink: "https://finsweet-lyart.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/Finsweet",
    backgroundColor: "",
  },
];

export default projectsConfig;
