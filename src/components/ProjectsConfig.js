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
    liveDemoLink: "https://yatharth-portfolio.vercel.app/",
    githubLink: "https://github.com/yatharth1706/my-portfolio",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "TODO App",
    previewImage: Todo,
    description:
      "In this project, I built Interactive CLI Tool for writing emojis in commit messages.It gives user some list of emojis in terminal before making commit. From that list user can select emojis according to the commit task he has done. After choosing that user can right commit message along with that emoji.",
    liveDemoLink: "https://www.npmjs.com/package/emojigit",
    githubLink: "https://github.com/yatharth1706/emojigit",
    downloads:
      "https://img.shields.io/npm/dt/emojigit.svg?style=flat-square)](https://www.npmjs.com/package/emojigit",
    backgroundColor: "bg-indigo-500",
  },
  {
    title: "Digital Agency Landing Page",
    previewImage: DigitalAgency,
    description:
      "Form creation tool similar to typeform and form.app Built using nextjs. Supports typeform and Airtable type of forms. Supports drag and drop functionality to create forms with ease. User can share links of form to get responses",
    liveDemoLink: "https://form-vibe.vercel.app/",
    githubLink: "https://github.com/yatharth1706/FormVibe",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "Branding Landing Page",
    previewImage: Landwind,
    description:
      "Full stack blogging application which i actually built as a part of assignment for one startup hiring. It was fun building this project. Learnt a lot of things. Built using nextjs, tailwind css, mongodb and appwrite",
    liveDemoLink: "https://blog-buddy-seven.vercel.app/",
    githubLink: "https://github.com/yatharth1706/BlogBuddy",
    backgroundColor: "",
  },

  {
    title: "Solar System",
    previewImage: SpaceWeb,
    description:
      "Fast One to One messaging app built using NextJS, Styled Components, Firebase v8 (Firestore and Auth), and React Firebase hooks for realtime fetching of data from the database. It allows user to send messages in realtime and can see when the person was last time online. It was amazing learning experience while building this project. ",
    liveDemoLink: "https://chat-space.vercel.app",
    githubLink: "https://github.com/yatharth1706/chatspace",
    backgroundColor: "bg-gray-800",
  },
];

export default projectsConfig;
