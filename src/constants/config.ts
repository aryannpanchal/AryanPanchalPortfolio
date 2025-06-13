type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Official Website of Aryan Panchal",
    fullName: "Aryan Panchal",
    email: "panchal@clemson.edu",
  },
  hero: {
    name: "Aryan Panchal",
    p: ["AI Researcher in Healthcare | Startup Engineer |"," Leadership | Innovation"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "",
      h2: "About me.",
      content: `A dedicated and passionate Computer Engineering student with over 3 years of corporate exposure and 2 years of technical experience. I thrive at the intersection of innovation and leadership, having served as the founding president of the Entrepreneurship Cell at Rajiv Gandhi Institute of Technology, Mumbai. In this role, I adeptly led a team of over 100 students, honing my problem-solving skills and technical acumen. My polished communication skills and extensive leadership experience have been pivotal in guiding multiple startups and small-scale companies toward operational excellence and scalability. Beyond my professional endeavors, I possess a profound affinity for music and am currently refining my proficiency in playing the violin, which adds a creative dimension to my technical pursuits.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
