import DigitalAgency from "../images/DigitalAgency.png";
import Rockets from "../images/RocketsWebsite.png";
import SpaceWeb from "../images/SpaceWebsite.png";
import Todo from "../images/TodoApp.png";
import Landwind from "../images/Landwind.png";

const projectsConfig = [
  {
    title: "SPACE X",
    previewImage: Rockets,
    description:
      "Portfolio website built using ReactJS and TailwindCSS. Includes information about me and my skills along with side projects.",
    liveDemoLink: "https://agono-david-frontend-developer.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/AgonoDavid-FrontendDeveloper",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "TODO App",
    previewImage: Todo,
    description:
      "In this project, I built Interactive CLI Tool for writing emojis in commit messages.It gives user some list of emojis in terminal before making commit. From that list user can select emojis according to the commit task he has done. After choosing that user can right commit message along with that emoji.",
    liveDemoLink: "https://todo-rho-gray.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/Todo",
    backgroundColor: "bg-indigo-500",
  },
  {
    title: "Digital Agency Landing Page",
    previewImage: DigitalAgency,
    description:
      "Form creation tool similar to typeform and form.app Built using nextjs. Supports typeform and Airtable type of forms. Supports drag and drop functionality to create forms with ease. User can share links of form to get responses",
    liveDemoLink: "https://tiny-truffle-159b3f.netlify.app/",
    githubLink: "https://github.com/AgonoDavid/DigitalAgencySolution",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "Branding Landing Page",
    previewImage: Landwind,
    description:
      "Full stack blogging application which i actually built as a part of assignment for one startup hiring. It was fun building this project. Learnt a lot of things. Built using nextjs, tailwind css, mongodb and appwrite",
    liveDemoLink: "https://landwind-agonodavid.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/Landwind",
    backgroundColor: "",
  },

  {
    title: "Solar System",
    previewImage: SpaceWeb,
    description:
      "Fast One to One messaging app built using NextJS, Styled Components, Firebase v8 (Firestore and Auth), and React Firebase hooks for realtime fetching of data from the database. It allows user to send messages in realtime and can see when the person was last time online. It was amazing learning experience while building this project. ",
    liveDemoLink: "https://space-website-r2zu.vercel.app/",
    githubLink: "https://github.com/AgonoDavid/SpaceWebsite",
    backgroundColor: "bg-gray-800",
  },
];

export default projectsConfig;
