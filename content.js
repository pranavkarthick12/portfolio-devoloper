/* ============================================================
   All portfolio copy lives here — customized for Pranav Karthick S K
   All text dynamically populates the portfolio without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Connect", href: "#contact" },

  headline: "Pranav",
  role: ["Software Developer &", "Quality Engineer"],
  meta: ["Full Stack", "AI", "Creative Development", "UI/UX"],

  notification: {
    name: "Pranav Karthick",
    time: "now",
    lead: "Software Engineer",
    message: "B.E. ECE @ Sri Eshwar · Building robust full-stack apps, AI tools & accessible digital solutions.",
  },

  section2: {
    sideLeft: ["Pranav Karthick", "Solutions."],
    sideRight: ["Precision.", "Innovation."],
  },

  /* My Works — Pranav Karthick's projects */
  works: {
    brand: "Pranav Karthick Portfolio",
    projects: [
      {
        key: "ai-interview-assistant",
        name: "AI Interview Assistant",
        img: "assets/work-ai-interview.jpg",
        w: 1200,
        h: 896,
        cat: "AI · React · Redux",
        year: "2025",
        accent: "#4da3ff",
        title: "AI-based interview simulation platform with resume parsing, timed interviews, automated scoring & dual-role interfaces.",
      },
      {
        key: "pachyderm-partner",
        name: "Pachyderm Partner",
        img: "assets/work-pachyderm.jpg",
        w: 1200,
        h: 896,
        cat: "IoT · ESP32 · Hardware",
        year: "2025",
        accent: "#a8e063",
        title: "IoT wearable safety device for elephants enhancing mahout safety via Bluetooth & ESP32 mobile integration (2nd Place Project Expo).",
      },
      {
        key: "phishsiren",
        name: "PhishSiren",
        img: "assets/work-phishsiren.jpg",
        w: 1200,
        h: 896,
        cat: "Cybersecurity · ML · Flask",
        year: "2025",
        accent: "#f28b3c",
        title: "Machine learning phishing & spam detection web app integrating Gmail OAuth 2.0 and Scikit-learn model with MongoDB storage.",
      },
    ],
  },

  /* ---- BIG ROBOT section (05 · The Mind) ---- */
  bigRobot: {
    labels: {
      left: "B.E. ECE Student · Sri Eshwar",
      right: "Full Stack · QA & Accessibility",
    },
    eyebrow: "( 05 · The Mind )",
    titleLines: [
      "I engineer resilient systems that",
      "bridge hardware, AI & web.",
    ],
    description:
      "From QA accessibility testing & scalable REST APIs with Spring Boot and MERN to IoT systems and ML threat detection.",
    hint: "Scroll to explore my engineering domains.",

    techIdeas: [
      {
        no: "01",
        title: "Full-Stack & Quality Engineering",
        description:
          "Internships at Hudsmer Business Solutions (QA & Accessibility) & Rampex Technologies (MERN Stack). Building accessible, high-performance web apps.",
        tags: ["React.js", "Spring Boot", "Node.js", "Docker", "QA Testing", "Accessibility", "MongoDB", "MySQL"],
      },
      {
        no: "02",
        title: "AI, Cybersecurity & IoT Systems",
        description:
          "Developing machine learning classification models, Gmail OAuth integrations, and ESP32 wearable hardware recognized in Project Expo & Flipkart GRiD 7.0.",
        tags: ["Machine Learning", "Scikit-learn", "Flask", "IoT (ESP32)", "REST APIs", "AWS Cloud", "Python"],
      },
    ],
  },

  /* ---- EDITORIAL / SKILLS section (06 · The Method) ---- */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code with precision.", "Design for accessibility."],
    note: "Electronics & Communication Engineering student driven by clean architecture, test-driven reliability, and user-centric accessibility.",
    skills: {
      title: "Technical Skills & Arsenal",
      groups: [
        {
          name: "Programming Languages",
          items: ["C++", "Python", "Java", "JavaScript"],
        },
        {
          name: "Web & Frameworks",
          items: ["React.js", "Node.js", "Spring Boot", "Flask", "Redux Toolkit", "HTML5 & CSS3"],
        },
        {
          name: "Databases & Cloud",
          items: ["MongoDB", "MySQL", "AWS Cloud", "Docker"],
        },
        {
          name: "Tools & Testing",
          items: ["Git & GitHub", "VS Code", "Selenium", "Figma", "Claude & ChatGPT", "Antigravity"],
        },
        {
          name: "Core Concepts",
          items: ["Data Structures & Algorithms", "OOPS", "DBMS", "Operating Systems", "RESTful APIs"],
        },
      ],
    },
    mindset: {
      title: "Analyze → Architect → Test → Optimize",
      lines: [
        "I understand core problems through algorithmic rigor (400+ DSA problems solved).",
        "I build full-stack interfaces and scalable backend services with React and Spring Boot.",
        "I audit accessibility and debug defects to ensure inclusive, zero-compromise software.",
        "I deploy, iterate, and innovate across web, AI, and IoT hardware.",
      ],
    },
    exploring: {
      title: "Certifications & Milestones",
      items: [
        "AWS Cloud Foundation & Infosys Springboard MongoDB Fundamentals (2025)",
        "React.js (Codecademy) & Python Basic (HackerRank)",
        "Data Structures & Algorithms in C++ (Udemy)",
        "AR/VR Certification (Praya Labs)",
        "Flipkart GRiD 7.0 — Semi-Finalist",
        "Project Expo — 2nd Place Winner for IoT elephant safety system",
        "LeetCode Contest Rating 1,697 (250+ solved) & CodeChef 1081 (150+ solved)",
        "Toastmasters Best Speaker Award & VP Media & Branding (SLC)",
      ],
    },
    ending: {
      lines: ["Driven by passion.", "Validated by tests.", "Built to scale."],
      note: "Pranav Karthick S K — Software Developer & Quality Engineer.",
    },
  },

  /* ---- SMALL ROBOT section ---- */
  smallRobot: {
    eyebrow: "( 06 · Problem Solving )",
    titleLines: ["Competitive mindset,", "collaborative spirit."],
    description: "LeetCode Contest Rating 1,697 (250+ solved) and CodeChef Rating 1081 (150+ solved). Toastmasters Best Speaker.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ---- */
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let’s build", "something impactful."],
    line: "Open to Software Engineering, Full Stack, and Quality/Accessibility Internships and Full-time roles.",
    email: "pranavkarthicksk@gmail.com",
    emailLabel: "Send an email",
    columns: [
      {
        title: "Navigation",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Engineering", href: "#work" },
          { label: "About Me", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Profiles & Experience",
        items: [
          { label: "Email: pranavkarthicksk@gmail.com", href: "mailto:pranavkarthicksk@gmail.com" },
          { label: "Phone: +91 6381335486", href: "tel:+916381335486" },
          { label: "LinkedIn Profile", href: "https://linkedin.com" },
          { label: "GitHub Profile", href: "https://github.com" },
          { label: "LeetCode Profile (Rating 1697)", href: "https://leetcode.com" },
          { label: "CodeChef Profile (Rating 1081)", href: "https://codechef.com" },
        ],
      },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "LeetCode", href: "https://leetcode.com" },
      { label: "CodeChef", href: "https://codechef.com" },
    ],
    legal: "© 2026 Pranav Karthick S K. All rights reserved.",
    note: "Crafted with clean code, accessibility, and modern design.",
    backToTop: "Back to top",
  },

  /* About Me chapter */
  about: {
    boxes: {
      who: {
        title: "Who I Am",
        sub: "Pranav Karthick S K — B.E. ECE Student & Software Developer.",
      },
      what: {
        title: "What I Do",
        sub: "Full Stack · AI · Creative Development · UI/UX",
      },
      think: {
        title: "How I Think",
        sub: "Analyze · Architect · Test · Optimize · Deliver",
      },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Pranav Karthick S K",
        text: "B.E. Electronics & Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore (CGPA 7.6). Experienced in Full Stack development, QA & accessibility testing, and competitive programming (400+ problems solved across LeetCode & CodeChef).",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Full-Stack, QA & Intelligent Systems",
        text: "Internships at Hudsmer Business Solutions (QA & Accessibility Engineering), Rampex Technologies (MERN Stack), and Spring Boot REST API integration. Hands-on experience developing ML phishing detection, IoT elephant safety devices, and responsive web applications.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Quality & User-Centric Engineering",
        text: "Combining analytical problem solving, accessible UI design, and defect-preventive testing with leadership as Student Leadership Council VP of Media & Branding and Toastmasters Best Speaker.",
      },
    },
  },
};
