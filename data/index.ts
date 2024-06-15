export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborative & Independent Dev",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/globe1.jpg",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Open to full-time, part-time, and freelance positions. Eager to learn and grow in a dynamic environment.",
    description: "Open to Diverse Opportunities",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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

export const projects = [
  {
    id: 1,
    title: "Travel Scratchpad",
    des: "This is the initial version of a travel-focused social network, created as a final project at WBS Coding School.",
    img: "/travel1.png",
    iconLists: [
      "/re.svg",
      "/nodejs-icon.svg",
      "/cloudinary.svg",
      "/chatgpt-icon.svg",
      "/google-maps.svg",
      "/mongodb-icon-2.svg",
    ],
    link: "https://travel-scratchpad.vercel.app/",
  },
  {
    id: 2,
    title: "TaskMaster Pro",
    des: "Classic To-Do List with a Not-So-Classic Twist. Сreated as a project for WBS Coding School.",
    img: "/todo2.png",
    iconLists: ["/re.svg", "material-ui-1.svg"],
    link: "https://gannakov.github.io/react-to-do/",
  },
  {
    id: 3,
    title: "Snap & Share: A React Native Photo App",
    des: "A mobile app created with React Native that lets users snap photos, tag locations automatically, and share with others who can like and comment on posts.",
    img: "/Travel2.png",
    iconLists: ["/re.svg", "/firebase.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Developer's Portfolio",
    des: "A creative and interactive portfolio website designed to showcase my professional skills and experiences in web development",
    img: "/portfolio2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://ui.shadcn.com/docs/dark-mode/next",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web and App Development course",
    desc1: "WBS CODING SCHOOL, Berlin, Germany ( 11/2023 - 05/2024)",
    desc2:
      "Project-based learning with a focus on team-oriented and agile methods. Completed numerous coding exercises, including a final individual project, and participated in pair programming tasks.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer course",
    desc1: "GoIT, Ukraine ( 05/2022 - 04/2023)",
    desc2:
      "Engaged in extensive project-based learning with an emphasis on team collaboration and agile methodologies. Contributed to large-scale team projects, including a comprehensive final project, and completed various individual assignments.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Business Owner",
    desc1: "Ukraine ( until 24.02.2022)",
    desc2:
      "Managed and grew a successful business, overseeing all aspects including operations, finance, and marketing. Developed strong project management and problem-solving skills. Led a team, fostering collaboration and effective communication.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Chief Sales Manager",
    desc1: "LLC 'Triton', Kharkiv, Ukraine",
    desc2:
      "Led a sales department, negotiating with clients and suppliers. Managed financial and inventory records. Supervised staff, ensuring effective team performance and customer satisfaction.",
    className: "md:col-span-2",

    thumbnail: "/exp2.svg",
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/GannaKov",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ganna-kovchyk/",
  },
];

export const myPlans = [
  {
    title: "TypeScript",
    description:
      "Enhancing my JavaScript skills with TypeScript to write more reliable and maintainable code.",
  },
  {
    title: "Vue.js",
    description:
      "Exploring Vue.js to expand my front-end development expertise.",
  },
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
];
