import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: "PATLURU SRISHANTH",
    role: "B.Tech CSE Student | Aspiring Software Engineer | Tech Enthusiast",
    building: "Software Applications, Data Structures & Emerging Web Technologies",
    status: "Open for Software Opportunities & Projects",
    intro: "B.Tech Computer Science Engineering student passionate about software development, problem-solving, and building practical technology solutions.",
    bio: "I am a B.Tech Computer Science Engineering student with a strong interest in software development and emerging technologies. I am currently building my skills in programming, problem-solving, and computer science fundamentals. I enjoy learning new technologies, exploring different areas of computer science, and working on projects that help me improve my practical knowledge. I am currently learning programming languages and tools such as C, Java, Python, Linux, and databases. I am passionate about continuous learning and improving my technical skills while connecting with professionals and like-minded people in the technology field. My goal is to become a skilled software engineer and contribute to innovative technology solutions.",
    location: "Telangana, India",
    currentFocus: "C, Java, Python, Linux & Full-Stack Web Development",
    experience: "B.Tech CS Student & Developer",
    careerGoals: "My goal is to become a skilled software engineer and contribute to innovative technology solutions.",
    interests: ["Software Development", "Data Structures & Algorithms", "Full-Stack Web Apps", "Linux & Systems", "Artificial Intelligence"],
    avatarUrl: "/srishanth-avatar.jpg",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/srishanth9912",
      linkedin: "https://www.linkedin.com/in/patluru-srishanth-652437412",
      email: "srishanth9912@gmail.com"
    }
  },

  skills: [
    { name: "C", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Databases (SQL/MongoDB)", category: "Database" },

    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "ReactJS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    { name: "Linux", category: "Cloud / DevOps" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" }
  ],

  projects: [
    {
      id: "project-1",
      title: "CFAI_PROJECT",
      category: "AI",
      description: "Python-based Artificial Intelligence & Machine Learning algorithmic model repository.",
      detailedDescription: "CFAI_PROJECT is an AI and Machine Learning development repository focused on data parsing, algorithm implementation, and predictive model scoring in Python.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "AI / Machine Learning", "Data Processing"],
      features: [
        "Automated dataset ingestion and pre-processing",
        "Machine learning model training pipeline",
        "Performance evaluation and prediction visualizer"
      ],
      challenges: [
        "Handling complex data structures during training phases",
        "Optimizing prediction computational speed"
      ],
      learnings: [
        "Python data structures and ML model architecture",
        "Feature scaling and evaluation metrics"
      ],
      githubUrl: "https://github.com/srishanth9912/CFAI_PROJECT",
      liveUrl: "https://github.com/srishanth9912/CFAI_PROJECT"
    },
    {
      id: "project-2",
      title: "dailyexpensetraker",
      category: "Web",
      description: "Interactive financial management web application for tracking daily spending and budgets.",
      detailedDescription: "dailyexpensetraker is a web application designed to help users log daily expenses, categorize transactions, calculate real-time net balances, and inspect spending habits.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Storage"],
      features: [
        "Real-time expense entry and category filtering",
        "Total balance calculation engine",
        "Browser local storage persistence for historical entries",
        "Clean, responsive user interface"
      ],
      challenges: [
        "State synchronization upon expense deletion",
        "Handling float calculation accuracy for currency values"
      ],
      learnings: [
        "Client-side DOM state management and validation",
        "User experience design for productivity web tools"
      ],
      githubUrl: "https://github.com/srishanth9912/dailyexpensetraker",
      liveUrl: "https://github.com/srishanth9912/dailyexpensetraker"
    },
    {
      id: "project-3",
      title: "FEDF_GROUP_PRJ_term_3",
      category: "Full Stack",
      description: "Front-End Development Frameworks collaborative web development project.",
      detailedDescription: "A collaborative web application developed for the Front-End Development Frameworks curriculum, showcasing modular component architecture and modern web design.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
      features: [
        "Component-driven React design",
        "Responsive layout cross-device rendering",
        "RESTful API integration",
        "Collaborative GitHub team workflow"
      ],
      challenges: [
        "Managing multi-developer Git branching conflicts",
        "Standardizing layout CSS design tokens"
      ],
      learnings: [
        "Professional team version control best practices",
        "TypeScript static type enforcement in web applications"
      ],
      githubUrl: "https://github.com/srishanth9912/FEDF_GROUP_PRJ_term_3",
      liveUrl: "https://github.com/srishanth9912/FEDF_GROUP_PRJ_term_3"
    },
    {
      id: "project-4",
      title: "DSA_PROJECT",
      category: "Other",
      description: "Java implementations of core Data Structures and Algorithmic problem solving.",
      detailedDescription: "DSA_PROJECT features clean Java implementations of foundational data structures (Trees, Graphs, Linked Lists, Queues, Stacks) and algorithmic sorting/searching optimizations.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      technologies: ["Java", "Data Structures", "Algorithms", "OOP"],
      features: [
        "Efficient Graph & Tree traversal algorithms",
        "Searching & Sorting runtime performance tests",
        "Clean object-oriented code design"
      ],
      challenges: [
        "Minimizing spatial memory footprint in recursive algorithms",
        "Enforcing Big-O time complexity targets"
      ],
      learnings: [
        "Deep understanding of algorithmic complexity analysis",
        "Strict object-oriented programming standards in Java"
      ],
      githubUrl: "https://github.com/srishanth9912/DSA_PROJECT",
      liveUrl: "https://github.com/srishanth9912/DSA_PROJECT"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering, Computer Science",
      institution: "KL University",
      startYear: "2025",
      endYear: "2029",
      description: "Studying Computer Science Engineering focusing on Programming, Problem Solving, Data Structures, Algorithms, Software Engineering, Linux, and Databases."
    },
    {
      degree: "Higher Secondary / Intermediate Education",
      institution: "Sri Chaitanya College of Education",
      startYear: "2023",
      endYear: "2025",
      description: "Completed higher secondary education with a strong foundation in Mathematics, Science, and Computer Science fundamentals."
    }
  ],

  certifications: [
    {
      name: "Legacy Responsive Web Design V8",
      issuer: "freeCodeCamp",
      date: "Certified",
      credentialUrl: "https://www.freecodecamp.org/"
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "Certified",
      credentialUrl: "https://www.hackerrank.com/"
    },
    {
      name: "ReactJS for Beginners",
      issuer: "Simplilearn",
      date: "Certified",
      credentialUrl: "https://www.simplilearn.com/"
    }
  ],

  achievements: [
    {
      title: "Computer Science Project Evaluations & Hackathons",
      category: "Hackathon",
      organization: "KL University",
      date: "2025 - Present",
      description: "Actively developing web applications, Python tools, and algorithmic solutions for academic evaluations and developer hackathons."
    },
    {
      title: "Open Source Code Contributions",
      category: "Open Source",
      organization: "GitHub Community",
      date: "2024 - Present",
      description: "Creating and maintaining public GitHub repositories in C, Java, Python, JavaScript, and Web Technologies."
    }
  ]
};
