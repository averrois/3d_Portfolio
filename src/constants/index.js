import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  upwork,
  fiverr,
  freelancer,
  tce,
  evofin,
  ytb,
  openai,
  movies,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ui/Ux Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Creating static web pages using HTML, CSS, and JavaScript on Fiverr to meet clients' needs.",
      "Collaborating with clients to design visually appealing and functional web pages.",
      "Implementing responsive layouts and cross-browser compatibility for seamless user experiences.",
      "Delivering high-quality static web pages promptly and offering exceptional customer support.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Redesigning web pages as a web developer on Freelancer.com, utilizing HTML, CSS, and JavaScript.",
      "Collaborating closely with clients to understand their requirements and revamp their web pages with modern design techniques.",
      "Implementing responsive layouts and cross-browser compatibility to enhance user experiences and engagement.",
      "Delivering high-quality redesigned web pages within project timelines, ensuring client satisfaction and positive outcomes.",
    ],
  },
  {
    title: "Front-End",
    company_name: "Training Edge Consutling",
    icon: tce,
    iconBg: "#E6DEDD",
    date: "January 2023 - June 2023",
    points: [
      "Contributing as a front-end developer specializing in HTML, CSS, JavaScript, and ReactJS at Training Edge Consulting, an esteemed agency.",
      "Collaborating with cross-functional teams and utilizing my expertise to create exceptional web solutions and user interfaces.",
      "Implementing responsive designs, seamless interactions, and cutting-edge technologies to deliver impactful user experiences.",
      "Successfully completing stage projects with Training Edge Consulting, meeting project requirements, and exceeding client expectations.",
    ],
  },
  {
    title: "Web Designer | Front-End",
    company_name: "UpWork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Offering web redesign services as a versatile web developer and Figma web designer on Upwork.",
      "Collaborating closely with clients to comprehend their needs and revamp their web pages with a fresh and modern look.",
      "Implementing responsive layouts, captivating visual designs, and cross-browser compatibility to elevate user experiences.",
      "Delivering high-quality web redesign projects on time, meeting client expectations, and providing top-notch service on Upwork.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EvoFin",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evofin,
    source_code_link: "https://github.com/Yassin-Aru/EvoFin",
    demo_link: "https://evofin.netlify.app/",
  },
  {
    name: "Youtbe Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ytb,
    source_code_link: "https://github.com/Yassin-Aru/Youtube-Clone",
    demo_link: "https://ytb-react-app.netlify.app/",
  },
  {
    name: "Articles Summerizer",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/Yassin-Aru/Articles-Summarizer-",
    demo_link: "https://artices-summarizer.netlify.app/",
  },
  {
    name: "MovoesList",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/Yassin-Aru/Movies-App",
    demo_link: "https://moviiezapp.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
