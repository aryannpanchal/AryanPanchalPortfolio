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
      "Aryan helped scale my company from 2k to 250K followers. He helped setup the entire technical infrastructure and managed interns incredibly well.",
    name: "Chandan Biswas",
    designation: "CEO",
    company: "Chemisphere",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Aryan's approach towards research is unique and noteworthy!",
    name: "Dr. Sharmila Rathod",
    designation: "Associate Professor",
    company: "RGIT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Aryan's leadership and management skills are unmatched!",
    name: "Dr. Ajay Parabhakar",
    designation: "Founder",
    company: "Ananta Bharat Abhiyaan",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Hyperglycemia Detection using ECG and PPG Signals using Deep Learning",
    description:
      "Hyperglycemia Detection using ECG and PPG Signals using Deep Learning is a cutting-edge research project focused on identifying elevated blood glucose levels through non-invasive biosignals. By leveraging deep learning models on ECG and PPG data, the system ensures early and accurate hyperglycemia detection. This approach offers a promising alternative to traditional invasive glucose monitoring methods",
    tags: [
      {
        name: "Feed-forward Neural Network",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Research Published in Springer Nature",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/aryannpanchal/Major",
  },
  {
    name: "Innovative Strategies for Multiple Disease Prognosis using Machine Learning",
    description:
      "The project explores advanced algorithms to predict various diseases like Diabetes Mellitus, Myocardial Infarction and Chronic Kidney Disease from clinical data with high accuracy. The project integrates models like Logistic Regression, SVM, and Naive Bayes to enhance diagnostic precision. It aims to support early intervention and personalized healthcare through intelligent data-driven insights.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Project copyrighted by Government of India",
        color: "green-text-gradient",
      },
      {
        name: "Research published in IJIRE - Indexed by Google Scholar and Mendeley",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/aryannpanchal/multiple-disease-prognosis-using-machine-learning",
  },
  {
    name: "Chemisphere.in Official Website",
    description:
      "The Chemisphere.in official website is a modern, responsive platform built using Next.js, Tailwind CSS, and Form.js. It delivers a seamless user experience for students seeking premium chemistry coaching, featuring fast navigation, clean design, and interactive forms for easy enrollment and inquiry",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Form.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://www.chemisphere.in",
  },

  
];

export { services, technologies, experiences, testimonials, projects };
