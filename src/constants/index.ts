import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Research in AI in Healthcare",
    icon: mobile,
  },
  {
    title: "Shopify Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Project Intern",
    companyName: "Scanbo Technologies, Canada",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - January 2025",
    points: [
      "Developed a deep learning model for hyperglycemia detection using ECG and PPG signals, improving accuracy to 85% by using ECG wave data from 100+ tested patients",
"Produced high quality visualizations of prognosis result with accuracy of 95% (linear regression) which showcased direct relation between hyperglycemia and heart activities thereby adding value to the existing research",
"Worked directly under the CEO to advance non-invasive healthcare solutions",
"Published a research paper for this project in Springer LNNS series, indexed in Scopus"
,
    ],
  },
  {
    title: "Startup Engineer",
    companyName: "Chemisphere, India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - July 2025",
    points: [
      "Leading the strategic design and development of our website and apps, ensuring a cohesive and impactful digital presence",
"Created the official Chemisphere website from scratch and improved the organic ranking to #1 by adapting best SEO practices",
"Spearheading operational excellence and driving social media expansion for the startup, actively contributing to scalable growth",
"Single handedly pushed the social growth of the company from 2K to more than 250K associated students within the community",
"Hiring and managing interns and providing essential training and required skillset to solve various problems in both tech and non-tech domain",
"Operating the Chemisphere Store and single handedly deployed a fully functional supply chain"
    ],
  },
  {
    title: "Founder & President",
    companyName: "Entrepreneurship Cell, MCT's Rajiv Gandhi Institute of Technology, India",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2022 - July 2024",
    points: [
      "Founded and served as the inaugural President of the Entrepreneurship Cell (E-Cell) at Rajiv Gandhi Institute of Technology (RGIT), leading a dynamic team of over 100 motivated students",
"Spearheaded initiatives to establish an unparalleled startup ecosystem, fostering innovation and entrepreneurship within the institution",
"Provided strategic guidance and support to aspiring studentpreneurs, creating a fertile environment for their growth and success",
"Cultivated a profound entrepreneurial spirit among students, driving the institution's reputation as a hub for innovative ventures"

    ],
  },
  {
    title: "Data Science Intern",
    companyName: "All India Council for Technical Education (AICTE)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Engineered a sophisticated machine learning model to forecast car prices based on multifaceted features, performing comprehensive data cleaning and preprocessing",
"Segmented the dataset into training and testing sets, trained the linear regression model, and rigorously evaluated its performance",
"Developed a user-centric interface for car price prediction utilizing the Flask web framework",
"Designed and implemented an interactive landing page with HTML, CSS, and JavaScript, incorporating insightful visualizations using Matplotlib"

    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Hyperglycemia Detection using ECG and PPG Signals using Deep Learning",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
