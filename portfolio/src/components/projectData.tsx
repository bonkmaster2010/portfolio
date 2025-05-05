import AB1 from '../images/airbnb/AB1.png';
import AB2 from '../images/airbnb/AB2.png';
import AB3 from '../images/airbnb/AB3.png';
import AB4 from '../images/airbnb/AB4.png';
/* renting app */
import EC1 from '../images/ecom/ecom1.png';
import EC2 from '../images/ecom/ecom2.png';
/* e-commerce*/
import DB1 from '../images/ddb/DB1.png'
import DB2 from '../images/ddb/DB2.png'
/* Data DashBoard */

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
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/BirAnA",
      isActive: false
    },
    {
      title: "Simple e-commerce store",
      desc: "You can create products, add them to cart, checkout, check the product details! (Note this project doesn't have many futures)",
      tools: "REACT • JSX • CSS ",
      images: [EC1, EC2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/E-commerce",
      isActive: false
    },
    {
      title: "Simple Data DashBoard (only accepts csv & json files)",
      desc: "a dahboard that accepts json & csv files  (im sorry if you encounter issues with big complex files im still improving)",
      tools: "REACT • JS • CSS ",
      images: [DB1, DB2],
      web: "https://example.com",
      git: "https://github.com/bonkmaster2010/DataDashBoard",
      isActive: false
    },
];

  