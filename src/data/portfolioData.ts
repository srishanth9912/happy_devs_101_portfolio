import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: "Srishanth",
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
      email: "srishanth9912@gmail.com",
      web3formsKey: "" // Enter your free Access Key from web3forms.com here to activate form submissions
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
      id: "project-campus-complaint",
      title: "Campus Complaint System",
      category: "Full Stack",
      description: "Comprehensive university campus grievance & facility issue resolution portal with real-time status tracking.",
      detailedDescription: "A full-featured campus complaint management web application enabling students and faculty to register, prioritize, and track administrative and campus maintenance issues with clean dashboards.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
      features: [
        "Interactive complaint registration & category tagging",
        "Real-time ticket progression status workflow",
        "Admin & student specialized views",
        "Responsive, mobile-optimized interface"
      ],
      challenges: [
        "Managing multi-tier ticket escalation workflows",
        "Ensuring instant UI state synchronization across status changes"
      ],
      learnings: [
        "Next.js full-stack routing and server architecture",
        "Vercel cloud production deployment lifecycle"
      ],
      githubUrl: "https://github.com/srishanth9912/happy_devs_101_-Campus-Complaint-",
      liveUrl: "https://happy-devs-101-campus-complaint.vercel.app"
    },
    {
      id: "project-flight-booking",
      title: "Flight Booking & Travel UI",
      category: "Web",
      description: "Interactive flight discovery, seat booking, and travel itinerary reservation platform with sleek animation flows.",
      detailedDescription: "Modern airline travel portal designed for searching flights, comparing routes, selecting customized seating, and managing itinerary bookings smoothly.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "CSS3", "HTML5", "UI/UX Design", "Vercel"],
      features: [
        "Flight route discovery & real-time pricing filter",
        "Interactive seating map and passenger details manager",
        "Smooth transition animations and modern travel UI",
        "Cloud hosted live deployment on Vercel"
      ],
      challenges: [
        "Designing responsive seat-selection matrix for various device screens",
        "Dynamic ticket price calculation based on passenger count"
      ],
      learnings: [
        "Advanced CSS3 grid & animation techniques",
        "UX flow design for multi-step checkout experiences"
      ],
      githubUrl: "https://github.com/srishanth9912/happy_devs_101_FLIGHT",
      liveUrl: "https://happy-devs-101-flight.vercel.app"
    },
    {
      id: "project-developer-portfolio",
      title: "Cyberpunk Developer Portfolio",
      category: "Web",
      description: "High-performance brutalist portfolio with interactive TechRadar, GitHub metrics, custom cursor, and dynamic filtering.",
      detailedDescription: "State-of-the-art interactive portfolio crafted with React, TypeScript, and Framer Motion showcasing live projects, skills radar, career timeline, and GitHub API activity.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Netlify"],
      features: [
        "Dynamic live GitHub API synchronization",
        "Interactive Tech Radar and category filtering",
        "Custom neon cursor with hover animations",
        "Full-screen inspection modals for all repositories"
      ],
      challenges: [
        "Fine-tuning 60fps Framer Motion physics and spring animations",
        "Designing cyber-brutalist aesthetic with balanced contrast"
      ],
      learnings: [
        "Modular React architecture with Tailwind token systems",
        "Advanced TypeScript typing and component design patterns"
      ],
      githubUrl: "https://github.com/srishanth9912/happy_devs_101_portfolio",
      liveUrl: "https://happydevs.netlify.app/"
    },
    {
      id: "project-cfai",
      title: "CFAI Machine Learning Suite",
      category: "AI",
      description: "Python-based Artificial Intelligence & Machine Learning algorithmic model repository and classifier pipeline.",
      detailedDescription: "CFAI_PROJECT is an AI and Machine Learning development repository focused on data parsing, algorithm implementation, and predictive model scoring in Python.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Machine Learning", "Data Processing", "NumPy", "Scikit-Learn"],
      features: [
        "Automated dataset ingestion and pre-processing pipeline",
        "Machine learning classification model training",
        "Performance evaluation and predictive visualizer",
        "Modular algorithmic scripts for feature extraction"
      ],
      challenges: [
        "Handling complex multidimensional datasets during training",
        "Optimizing prediction computational speed and accuracy"
      ],
      learnings: [
        "Python data science structures and ML model architecture",
        "Feature scaling, normalization, and evaluation metrics"
      ],
      githubUrl: "https://github.com/srishanth9912/CFAI_PROJECT",
      liveUrl: "https://github.com/srishanth9912/CFAI_PROJECT"
    },
    {
      id: "project-expense-tracker",
      title: "Daily Expense & Budget Tracker",
      category: "Web",
      description: "Interactive financial management web application for logging daily expenses, income streams, and budget analytics.",
      detailedDescription: "dailyexpensetraker is a web application designed to help users log daily expenses, categorize transactions, calculate real-time net balances, and inspect spending habits.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Storage", "Analytics"],
      features: [
        "Real-time expense entry and category filtering",
        "Total net balance & expenditure calculation engine",
        "Browser local storage persistence for historical entries",
        "Clean, responsive financial dashboard interface"
      ],
      challenges: [
        "State synchronization upon expense updates and deletion",
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
      id: "project-fedf-group",
      title: "FEDF Collaborative Web Platform",
      category: "Full Stack",
      description: "Front-End Development Frameworks collaborative web platform showcasing modular React architecture.",
      detailedDescription: "A collaborative web application developed for the Front-End Development Frameworks curriculum, showcasing modular component architecture, API integration, and team workflows.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS", "Git Workflow"],
      features: [
        "Component-driven React architecture",
        "Responsive layout cross-device rendering",
        "RESTful API integration & asynchronous data fetching",
        "Collaborative GitHub team workflow and version control"
      ],
      challenges: [
        "Managing multi-developer Git branching and merge conflicts",
        "Standardizing layout CSS design tokens across team modules"
      ],
      learnings: [
        "Professional team version control best practices",
        "TypeScript static type enforcement in modern web apps"
      ],
      githubUrl: "https://github.com/srishanth9912/FEDF_GROUP_PRJ_term_3",
      liveUrl: "https://github.com/srishanth9912/FEDF_GROUP_PRJ_term_3"
    },
    {
      id: "project-fedf-personal",
      title: "FEDF Personal Web Architecture",
      category: "Web",
      description: "Custom front-end framework exploration with interactive DOM manipulations, responsive layouts, and UI components.",
      detailedDescription: "A dedicated personal development project built to explore modern front-end concepts, CSS Grid/Flexbox layouts, dynamic scripting, and user-centric component styling.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "DOM API"],
      features: [
        "Modular JavaScript functions for DOM manipulation",
        "Responsive mobile-first styling",
        "Custom interaction states and transition effects",
        "Clean structure adhering to front-end best practices"
      ],
      challenges: [
        "Cross-browser layout rendering consistency",
        "Efficient event delegation for dynamic UI elements"
      ],
      learnings: [
        "Core DOM API lifecycle and manipulation methods",
        "Modern CSS layout paradigms"
      ],
      githubUrl: "https://github.com/srishanth9912/FEDF_PERSONAL_PRJ",
      liveUrl: "https://github.com/srishanth9912/FEDF_PERSONAL_PRJ"
    },
    {
      id: "project-dsa",
      title: "Data Structures & Algorithms Suite",
      category: "Systems",
      description: "Java implementations of core Data Structures, Tree traversals, Graph algorithms, and optimization patterns.",
      detailedDescription: "DSA_PROJECT features clean Java implementations of foundational data structures (Trees, Graphs, Linked Lists, Queues, Stacks) and algorithmic sorting/searching optimizations.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      technologies: ["Java", "Data Structures", "Algorithms", "OOP", "Complexity Analysis"],
      features: [
        "Efficient Graph & Tree traversal algorithms (BFS, DFS, Dijkstra)",
        "Searching & Sorting runtime performance benchmarks",
        "Clean object-oriented architecture in Java",
        "Comprehensive edge-case test cases"
      ],
      challenges: [
        "Minimizing spatial memory footprint in recursive algorithms",
        "Enforcing optimal Big-O time complexity targets"
      ],
      learnings: [
        "Deep understanding of algorithmic complexity analysis",
        "Strict object-oriented programming standards in Java"
      ],
      githubUrl: "https://github.com/srishanth9912/DSA_PROJECT",
      liveUrl: "https://github.com/srishanth9912/DSA_PROJECT"
    },
    {
      id: "project-os-skilling",
      title: "Operating Systems & Process Schedulers",
      category: "Systems",
      description: "C-based operating system implementations: CPU process scheduling algorithms, memory paging, and system calls.",
      detailedDescription: "Core low-level system programming in C focusing on OS scheduling algorithms (FCFS, SJF, Round Robin, Priority), POSIX threads, semaphore synchronization, and virtual memory management.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Operating Systems", "Linux", "POSIX Threads", "System Calls"],
      features: [
        "CPU Scheduling simulators (FCFS, SJF, Round Robin, Priority)",
        "Inter-process communication and semaphore synchronization",
        "Memory management and page replacement simulations",
        "Compiled and optimized for Linux environments"
      ],
      challenges: [
        "Handling race conditions and deadlocks in multi-threaded execution",
        "Precise calculation of turnaround and waiting times"
      ],
      learnings: [
        "Low-level memory management and pointer operations in C",
        "Under-the-hood workings of modern operating system kernels"
      ],
      githubUrl: "https://github.com/srishanth9912/os_skilling1",
      liveUrl: "https://github.com/srishanth9912/os_skilling1"
    },
    {
      id: "project-my-html",
      title: "HTML5 & CSS3 Web Foundations",
      category: "Web",
      description: "Structured semantic HTML5 and CSS3 webpage layouts with responsive and accessible design elements.",
      detailedDescription: "Collection of web layout prototypes demonstrating HTML5 semantic structure, modern CSS styling, forms, responsive viewports, and navigation components.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML5", "CSS3", "Semantic Web", "Responsive Design"],
      features: [
        "Clean semantic markup with HTML5 tags",
        "CSS flexbox and grid layouts",
        "Form validation and styling",
        "Cross-browser compatible structure"
      ],
      challenges: [
        "Ensuring clean responsiveness without external CSS frameworks",
        "Accessibility compliance across semantic tags"
      ],
      learnings: [
        "Foundational mastery of the Document Object Model and web standards",
        "Best practices in accessible web structure"
      ],
      githubUrl: "https://github.com/srishanth9912/MY-HTML-PRJ",
      liveUrl: "https://github.com/srishanth9912/MY-HTML-PRJ"
    },
    {
      id: "project-demo",
      title: "Interactive Web Prototype Demo",
      category: "Web",
      description: "Live prototype demonstrating client-side scripting, animated interactions, and dynamic layout flows.",
      detailedDescription: "Experimental showcase sandbox used for prototyping new web techniques, JavaScript event handling, animation effects, and user interaction concepts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML5", "JavaScript", "CSS Animation", "DOM Events"],
      features: [
        "Interactive button and modal state animations",
        "Event listener-driven DOM manipulations",
        "Live web prototype accessible via GitHub Pages / browser"
      ],
      challenges: [
        "Building lightweight animations using vanilla JavaScript",
        "Maintaining clean code organization in rapid prototypes"
      ],
      learnings: [
        "Fast prototyping and iteration techniques",
        "Vanilla JavaScript event loop and DOM manipulation"
      ],
      githubUrl: "https://github.com/srishanth9912/DEMO",
      liveUrl: "https://github.com/srishanth9912/DEMO"
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
