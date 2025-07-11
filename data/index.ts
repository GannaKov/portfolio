export interface navItemProps {
  name: string;
  link: string;
}
export type navItemsProps = navItemProps[];

export const navItems: navItemsProps = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
//--------------------------------
export interface gridItemProps {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}
export type gridItemsProps = gridItemProps[];

export const gridItems: gridItemsProps = [
  {
    id: 1,
    title: "Collaborative & Independent Dev",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/gridItems/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/gridItems/globe1.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/gridItems/grid.svg",
    spareImg: "/gridItems/b4.svg",
  },

  {
    id: 5,
    title:
      "Open to full-time, part-time, and freelance positions. Eager to learn and grow in a dynamic environment.",
    description: "Open to Diverse Opportunities",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start ",
    img: "/gridItems/b5.svg",
    spareImg: "/gridItems/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
//---------------------------
export interface projectProps {
  id: number;
  title: string;
  des: string;

  img: string;
  iconLists: string[];
  link: string;
}
export type ProjectsProps = projectProps[];

export const projects: ProjectsProps = [
  {
    id: 1,
    title: "Driving School Connector App",
    des: "A mobile app built with React Native (Expo) that connects students with certified driving instructors. Students select a service center and see available instructors in real time, making it easy to book practice sessions quickly and efficiently.",

    img: "/projects/eWikno.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/firebase.svg",
      "/techIcons/expo.svg",
      "/techIcons/tail.svg",
      "/techIcons/ts.svg",
    ],
    link: "https://expo.dev/preview/update?message=Auto%20update%20from%20GitHub%20PR&updateRuntimeVersion=1.0.0&createdAt=2025-06-12T20%3A49%3A13.151Z&slug=exp&projectId=55431412-9d1d-4f4f-bb49-e945ad2df957&group=f2d0ddf4-cbfe-431a-a984-19526c23f55b",
  },
  {
    id: 2,
    title: "Factory Equipment Tracker",
    des: "Demo version – In Progress. Internal tool for tracking equipment status and downtime at a manufacturing plant. Prototype evolves alongside the real app (NDA-protected). Demo access: login user1, password 123456.",

    img: "/projects/plant-hub-1.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/next.svg",
      "/techIcons/tail.svg",
      "/techIcons/ts.svg",
      "/techIcons/postgresql_logo.svg",
      "/techIcons/drizzle_logo.svg",
    ],
    link: "https://plant-hub-navy.vercel.app/",
  },
  {
    id: 3,
    title: "Everything can move",
    des: "This is a bold and thrilling team project featuring stunning animations and a unique concept: two completely different designs with a Switch button.",

    img: "/projects/ani5.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/next.svg",
      "/techIcons/tail.svg",
      "/techIcons/ts.svg",
      "/techIcons/framer-motion.svg",
      "/techIcons/three-js.svg",
      "/techIcons/vercel.svg",
    ],
    link: "https://baza-everything-can-move.vercel.app/",
  },
  {
    id: 4,
    title: "Sales Dashboard",
    des: "An interactive dashboard for visualizing supermarket sales data. Users can filter by city, customer type, gender, and age group. Built with Python, Streamlit, and Plotly for real-time data exploration and beautiful visualizations.",

    img: "/projects/sales-dashboard.png",
    iconLists: [
      "/techIcons/python.svg",
      "/techIcons/streamlit.svg",
      "/techIcons/pandas.svg",
      "/techIcons/ploty.svg",
    ],
    link: "dashboard-test-sells.streamlit.app/",
  },
  {
    id: 5,
    title: "Travel Scratchpad",
    des: "This is the initial version of a travel-focused social network, created as a final project at WBS Coding School. To access the full functionality of the project: login:test@test.com, password:123456",

    img: "/projects/travel.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/nodejs-icon.svg",
      "/techIcons/cloudinary.svg",
      "/techIcons/chatgpt-icon.svg",
      "/techIcons/google-maps.svg",
      "/techIcons/mongodb-icon-2.svg",
      "/techIcons/vercel.svg",
    ],
    link: "https://travel-scratchpad.vercel.app/",
  },

  {
    id: 6,
    title: "Snap & Share: A React Native Photo App",
    des: "A mobile app created with React Native that lets users snap photos, tag locations automatically, and share with others who can like and comment on posts.",

    img: "/projects/native.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/expo.svg",
      "/techIcons/firebase.svg",
    ],
    link: "https://github.com/GannaKov/goit-react-native-hw-01",
  },
  {
    id: 7,
    title: "Developer's Portfolio",
    des: "A creative and interactive portfolio website designed to showcase my professional skills and experiences in web development",

    img: "/projects/portfolio1.png",
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/tail.svg",
      "/techIcons/ts.svg",
    ],
    link: "https://portfolio-ganna-kovchyk.vercel.app",
  },
  {
    id: 8,
    title: "SoYummy: A React Recipe App ",
    des: "A collaborative project. My contributions to the project included developing the HomePage, Search functionality, and Recipe Card components.",

    img: "/projects/yummy.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/redux.svg",
      "/techIcons/styled.svg",
    ],
    link: "https://vladossid.github.io/project-fullstack-frontend/home",
  },
  {
    id: 9,
    title: "New Project",
    des: "I am continuously striving to improve my skills, working on new projects, and learning from best practices.",

    img: "/projects/next-project.png",
    iconLists: [
      "/techIcons/re.svg",
      "/techIcons/next.svg",
      "/techIcons/tail.svg",
      "/techIcons/ts.svg",
    ],
    link: "https://github.com/GannaKov",
  },
];
//----------------------
export interface workExperience {
  id: number;
  title: string;
  desc1: string;

  desc2: string;
  className: string;
  thumbnail: string;
}
export type WorkExperienceProps = workExperience[];
export const workExperience: WorkExperienceProps = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc1: "Freelance ( 04/2025 - present)",
    desc2:
      "Designed and developed an internal equipment management system for a manufacturing company. Built a QR-based tracking solution using Next.js, PostgreSQL, and Drizzle ORM. Implemented secure authentication, stoppage logging, and staff assignment features. Delivered updates based on direct communication with stakeholders.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc1: "Baza Trainee Ukraine, remote (Aug 2024 - Feb 2025)",
    desc2:
      "Contributed to responsive web applications using Next.js and TypeScript. Implemented UI/UX designs, integrated payment systems, and enhanced interactivity with Framer Motion and Three.js. Collaborated with a cross-functional team in an Agile environment.",
    className: "md:col-span-2",

    thumbnail: "/experience/exp4.svg",
  },

  {
    id: 3,
    title: "Business Owner",
    desc1: "Ukraine ( until 24.02.2022)",
    desc2:
      "Managed all aspects of business operations, including strategy, finance, client relations, hiring, and team leadership. Led negotiations and secured long-term partnerships, driving sustainable business growth. Oversaw investment planning and expansion, growing the company from the ground up into a successful enterprise.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp3.svg",
  },
  {
    id: 4,
    title: "Head of Product Sales",
    desc1: "LLC 'Triton', Kharkiv, Ukraine",
    desc2:
      "Led B2B sales and inventory operations in a dynamic business environment. Managed a team of sales professionals, enhancing performance through training and clear processes. Implemented a tailored inventory management system, improving accuracy and overall workflow efficiency.",
    className: "md:col-span-2",

    thumbnail: "/experience/exp2.svg",
  },
];
//-----------------
export interface socialMedia {
  id: number;
  img: string;
  link: string;
}
export type SocialMediaProps = socialMedia[];

export const socialMedia: SocialMediaProps = [
  {
    id: 1,
    img: "/socialMedia/git.svg",
    link: "https://github.com/GannaKov",
  },

  {
    id: 3,
    img: "/socialMedia/link.svg",
    link: "https://www.linkedin.com/in/ganna-kovchyk/",
  },
];
//------------------------
export interface myPlans {
  title: string;
  description: string;
}
export type MyPlansProps = myPlans[];

export const myPlans: MyPlansProps = [
  {
    title: "Integrating AI/LLM into Web Applications",
    description:
      "Learning how to integrate artificial intelligence, specifically large language models (LLMs), into web applications to create smarter and more interactive user experiences.",
  },
  {
    title: "AWS (Amazon Web Services)",
    description:
      "Gaining proficiency in AWS to manage and deploy scalable web applications and services.",
  },
  {
    title: "Vue.js",
    description:
      "Exploring Vue.js to expand my front-end development expertise.",
  },
];
