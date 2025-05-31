import {N1, N2, N3, AB1, AB2, AB3, AB4, EC1, EC2, DB1, DB2, blog1, blog2, blog3, GNL, AC1, AC2, ET1, ET2, TTT1, TTT2, TDLR, WTHR1, WTHR2, TDLJS, calc, poke } from './image.tsx'

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
    title: "Netflix Clone",
    desc: "A fully responsive Netflix-style streaming platform clone built with React and Zustand. Browse movies, search titles, and get real-time content via a movie database API. A great project for practicing API integration, dynamic UI, and state management.",
    tools: "REACT • TSX • CSS • Zustand",
    images: [N1, N2, N3],
    web: "https://net-flix-raox.vercel.app/",
    git: "https://github.com/bonkmaster2010/net-flix",
    isActive: false
  },
  {
    title: "AirBnB Clone",
    desc: "A place rental app where users can create, edit, and book listings, plus leave reviews. Demonstrates CRUD operations, complex UI states, and state management using React and Zustand.",
    tools: "REACT • TSX • CSS • Zustand",
    images: [AB1, AB2, AB3, AB4],
    web: "https://bir-an-a.vercel.app/create",
    git: "https://github.com/bonkmaster2010/BirAnA",
    isActive: false
  },
  {
    title: "E-commerce Store",
    desc: "A basic online store where users can browse products, add items to their cart, and checkout. This project helped me understand React component structure and shopping cart logic, though features are still limited.",
    tools: "REACT • JS • CSS",
    images: [EC1, EC2],
    web: "https://e-commerce-chi-six-60.vercel.app/",
    git: "https://github.com/bonkmaster2010/E-commerce",
    isActive: false
  },
  {
    title: "Data Dashboard",
    desc: "A simple dashboard that accepts JSON and CSV files to visualize data. Built to handle basic datasets, this project taught me file handling and dynamic rendering, but may struggle with very large files.",
    tools: "REACT • JS • CSS",
    images: [DB1, DB2],
    web: "https://data-dash-board-sepia.vercel.app/",
    git: "https://github.com/bonkmaster2010/DataDashBoard",
    isActive: false
  },
  {
    title: "Guess N Live",
    desc: "An interactive word guessing game where players have five lives to guess the correct word. This project helped me practice game logic, React state management, and user interaction.",
    tools: "REACT • JS • CSS",
    images: [GNL],
    web: "https://guess-n-live.vercel.app/",
    git: "https://github.com/bonkmaster2010/Guess-N-Live",
    isActive: false
  },
  {
    title: "Megatron (🥀)",
    desc: "A basic AI chat app created to test API fetching and CSS skills. Allows real-time chatting with an AI model and helped me practice asynchronous requests and UI updates.",
    tools: "REACT • JS • CSS",
    images: [AC1, AC2],
    web: "https://ai-chat-bot-orpin-two.vercel.app/",
    git: "https://github.com/bonkmaster2010/Ai-Chat-Bot",
    isActive: false
  },
];

export const otherProjects: Project[] = [
  {
    title: "Multi Blog App",
    desc: "A simple blog platform with routing built in React. Designed to practice dynamic page rendering and navigation with the ability to create and view posts.",
    tools: "REACT • JS • CSS",
    images: [blog1, blog2, blog3],
    web: "https://e-commerce-chi-six-60.vercel.app/",
    git: "https://github.com/bonkmaster2010/Multi-Blog-App",
    isActive: false
  },
  {
    title: "Expense Tracker",
    desc: "A personal finance app featuring a dashboard and charts to visualize spending. This project enhanced my skills in state management and data visualization.",
    tools: "REACT • JS • CSS",
    images: [ET1, ET2],
    web: "https://expense-tracker-three-gules.vercel.app/",
    git: "https://github.com/bonkmaster2010/Expense-Tracker",
    isActive: false
  },
  {
    title: "TicTacToe",
    desc: "A classic TicTacToe game built with React focusing on game logic and clean user interaction.",
    tools: "REACT • JS • CSS",
    images: [TTT1, TTT2],
    web: "https://tic-tac-toe-tau-silk-34.vercel.app/",
    git: "https://github.com/bonkmaster2010/TicTacToe",
    isActive: false
  },
  {
    title: "To Do List",
    desc: "A React to-do list app that helps users manage tasks by adding, editing, and deleting them, practicing controlled components and state updates.",
    tools: "REACT • JS • CSS",
    images: [TDLR],
    web: "https://tdl-react.vercel.app/",
    git: "https://github.com/bonkmaster2010/TDL-React-",
    isActive: false
  },
  {
    title: "Weather App",
    desc: "A simple weather forecast app using vanilla JS, CSS, and HTML that fetches and displays current weather data based on user input or location.",
    tools: "JS • CSS • HTML",
    images: [WTHR1, WTHR2],
    web: "https://weather-app-eight-zeta-95.vercel.app/",
    git: "https://github.com/bonkmaster2010/Weather-App",
    isActive: false
  },
  {
    title: "Calculator",
    desc: "A straightforward calculator app built with vanilla JS, practicing event handling and UI updates.",
    tools: "JS • CSS • HTML",
    images: [calc],
    web: "https://calculator-app-rosy-seven.vercel.app/",
    git: "https://github.com/bonkmaster2010/Calculator-App",
    isActive: false
  },
  {
    title: "To Do List",
    desc: "A classic to-do list app built with vanilla JavaScript, focused on DOM manipulation and user input handling.",
    tools: "JS • CSS • HTML",
    images: [TDLJS],
    web: "https://to-do-list-app-taupe-eight.vercel.app/",
    git: "https://github.com/bonkmaster2010/To-Do-List-App",
    isActive: false
  },
  {
    title: "Pokemon Fetcher",
    desc: "An app that fetches and displays Pokémon data from a public API, designed to practice API calls and dynamic content rendering.",
    tools: "JS • CSS • HTML",
    images: [poke],
    web: "https://pokemon-app-amber-seven.vercel.app/",
    git: "https://github.com/bonkmaster2010/Pokemon-App",
    isActive: false
  },
];
