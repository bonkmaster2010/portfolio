import { AB1, AB2, AB3, AB4, EC1, EC2, DB1, DB2, blog1, blog2, blog3, GNL, AC1, AC2, ET1, ET2, TTT1, TTT2, TDLR, WTHR1, WTHR2, TDLJS, calc } from './image.tsx'

type Project = {
  title: string;
  desc: string;
  tools: string;
  images: string[];
  web: string;
  git: string;
  isActive: boolean;
};

export const projectData: Project[] = [
    {
      title: "AirBnB Clone",
      desc: "An AirBnB Clone ( Place Renting ) were u can create listings, edit them, Book them, review them and more!",
      tools: "REACT • TSX • CSS • Zustand",
      images: [AB1, AB2, AB3, AB4],
      web: "https://bir-an-a-new.vercel.app/",
      git: "https://github.com/bonkmaster2010/BirAnA",
      isActive: false
    },
    {
      title: "e-commerce store",
      desc: "You can create products, add them to cart, checkout, check the product details! (Note this project doesn't have many futures)",
      tools: "REACT • JS • CSS ",
      images: [EC1, EC2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/E-commerce",
      isActive: false
    },
    {
      title: "Data DashBoard",
      desc: "a Basic dashboard that accepts json & csv files  (im sorry if you encounter issues with big complex files)",
      tools: "REACT • JS • CSS ",
      images: [DB1, DB2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/DataDashBoard",
      isActive: false
    },
    {
      title: "Multi Blog App",
      desc: "a blog app with routing i made this to test my routing skills :) (this is a basic project)",
      tools: "REACT • JS • CSS ",
      images: [blog1, blog2, blog3],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Multi-Blog-App",
      isActive: false
    },
    {
      title: "Guess N Live",
      desc: "A Guess the word game you only have 5 lives so choose wisely",
      tools: "REACT • JS • CSS ",
      images: [GNL],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Guess-N-Live",
      isActive: false
    },
    {
      title: "Megatron (🥀)",
      desc: " A basic ai chat app i made it to test my fetching skills and some css skills",
      tools: "REACT • JS • CSS ",
      images: [AC1, AC2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Ai-Chat-Bot",
      isActive: false
    },
    {
      title: "Expense Tracker",
      desc: "An Expense Tracker with a dashboard & a chart",
      tools: "REACT • JS • CSS ",
      images: [ET1, ET2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Expense-Tracker",
      isActive: false
    },
    {
      title: "TicTacToe",
      desc: "A simple TicTacToe game",
      tools: "REACT • JS • CSS ",
      images: [TTT1, TTT2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/TicTacToe",
      isActive: false
    },
    {
      title: "To Do List",
      desc: "A React To Do List",
      tools: "REACT • JS • CSS ",
      images: [TDLR],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/TDL-React-",
      isActive: false
    },

    {
      title: "Weather App",
      desc: "A Weather App",
      tools: "JS • CSS • HTML ",
      images: [WTHR1, WTHR2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Weather-App",
      isActive: false
    },
    {
      title: "Calculator",
      desc: "every web dev made a calculator",
      tools: " JS • CSS • HTML ",
      images: [calc],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/Calculator-App",
      isActive: false
    },
    {
      title: "To Do List",
      desc: "Can you call yourself a web developer if you never made a to do list?",
      tools: " JS • CSS • HTML ",
      images: [TDLJS],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/To-Do-List-App",
      isActive: false
    },
];

  