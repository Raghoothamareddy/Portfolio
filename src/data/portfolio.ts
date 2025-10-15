import { PersonalInfo, Project, Skill, Experience, Education, Certification } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Raghoothama Reddy Kaliki",
  title: "Full Stack Software Engineer & .NET Specialist",
  bio: "Master of Science in Computer Science candidate with 2.5+ years of professional experience in full-stack software engineering using the .NET framework. Proven ability in developing, modernizing, and deploying cloud-native applications on Microsoft Azure. Specialized in C#, .NET MAUI, machine learning, and enterprise application development.",
  avatar: "/avatar.jpg",
  resumeUrl: "/RaghoothamaReddyKaliki_Resume.pdf",
  contact: {
    email: "raghoothamakaliki@gmail.com",
    phone: "+1 (203) 666-0811",
    location: "Bridgeport, Connecticut, 06604",
    linkedin: "https://www.linkedin.com/in/raghoothama-reddy-kaliki-aa2292208/",
    github: "https://github.com/Raghoothamareddy",
    website: "/"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Keratoconus Detection via Corneal Imaging Analysis",
    description: "Designed a machine learning system capable of detecting early-stage Keratoconus with higher accuracy than existing clinical software. Developed and trained a suite of ML models including CNN, Random Forest, and XGBoost, achieving 94% detection accuracy with 12% performance improvement over traditional systems.",
    technologies: ["Python", "PyTorch", "Scikit-learn", "CNN", "Random Forest", "XGBoost", "NumPy", "OpenCV"],
    image: "/projects/keratoconus.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/keratoconus-detection",
    liveUrl: "https://keratoconus-demo.com",
    featured: true
  },
  {
    id: "2",
    title: "Synchronized Desktop Calendar",
    description: "Built a multi-user desktop application allowing teams to schedule meetings and share calendars in real-time. Architected client-server application using C# and WPF with SQL Server backend, implementing conflict detection and XML-based configuration management.",
    technologies: ["C#", ".NET Framework", "WPF", "SQL Server", "XML", "Multi-threading"],
    image: "/projects/calendar.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/synchronized-calendar",
    liveUrl: "https://calendar-demo.com",
    featured: true
  },
  {
    id: "3",
    title: "devNXT Legacy Application Modernization Platform",
    description: "Engineered and deployed key features for devNXT, a legacy application modernization platform using .NET MAUI Blazor and C#, contributing to a solution that accelerates cloud migration for enterprise clients. Developed centralized settings module reducing client onboarding time by 20%.",
    technologies: [".NET MAUI", "Blazor", "C#", "Microsoft Azure", "Azure App Service", "Azure Functions"],
    image: "/projects/devnxt.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/devnxt-platform",
    liveUrl: "https://devnxt-demo.com",
    featured: true
  },
  {
    id: "4",
    title: "Digital Interactive Assistant (DIA) Chat System",
    description: "Implemented a DIA chat feature integrating with backend services to provide real-time remediation suggestions and answers from a knowledge base, improving developer productivity. Built with .NET framework and deployed on Azure cloud infrastructure.",
    technologies: ["C#", ".NET", "Microsoft Azure", "REST APIs", "SQL Server", "Real-time Communication"],
    image: "/projects/dia-chat.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/dia-chat-system",
    liveUrl: "https://dia-chat-demo.com",
    featured: false
  },
  {
    id: "5",
    title: "Full-Stack .NET Smart Web Application",
    description: "Developed a comprehensive full-stack .NET smart web application as a capstone project, demonstrating proficiency in C#, ASP.NET, and SQL Server. Implemented RESTful APIs using ASP.NET Web API for seamless CRUD operations and efficient data communication.",
    technologies: ["C#", "ASP.NET", "ASP.NET Web API", "SQL Server", "REST APIs", "CRUD Operations"],
    image: "/projects/smart-webapp.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/smart-webapp",
    liveUrl: "https://smart-webapp-demo.com",
    featured: false
  },
  {
    id: "6",
    title: "Legacy Code Modernization & UI Refactoring",
    description: "Collaborated in an Agile team to refactor legacy .NET and ASP 2.0 codebases, enhancing maintainability and preparing applications for UI modernization to React and Angular frameworks. Implemented modern development practices and CI/CD pipelines.",
    technologies: [".NET", "ASP.NET", "React", "Angular", "Git", "Agile", "CI/CD", "Legacy Modernization"],
    image: "/projects/legacy-modernization.jpg",
    githubUrl: "https://github.com/raghoothama-reddy-kaliki/legacy-modernization",
    liveUrl: "https://legacy-modernization-demo.com",
    featured: false
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "C#", level: 95, category: "programming", icon: "csharp" },
  { name: "Python", level: 90, category: "programming", icon: "python" },
  { name: "SQL", level: 90, category: "programming", icon: "sql" },
  { name: "JavaScript", level: 85, category: "programming", icon: "javascript" },
  { name: "HTML5", level: 90, category: "programming", icon: "html5" },
  { name: "CSS3", level: 90, category: "programming", icon: "css3" },
  
  // .NET Framework & Technologies
  { name: ".NET Framework", level: 95, category: "framework", icon: "dotnet" },
  { name: ".NET MAUI", level: 90, category: "framework", icon: "dotnet" },
  { name: "Blazor", level: 85, category: "framework", icon: "blazor" },
  { name: "ASP.NET", level: 90, category: "framework", icon: "aspnet" },
  { name: "ASP.NET Web API", level: 90, category: "framework", icon: "api" },
  { name: "WPF", level: 85, category: "framework", icon: "wpf" },
  
  // Machine Learning & AI
  { name: "PyTorch", level: 85, category: "ml", icon: "pytorch" },
  { name: "TensorFlow", level: 80, category: "ml", icon: "tensorflow" },
  { name: "Scikit-learn", level: 90, category: "ml", icon: "scikit" },
  { name: "CNN", level: 85, category: "ml", icon: "neural" },
  { name: "Random Forest", level: 90, category: "ml", icon: "tree" },
  { name: "XGBoost", level: 85, category: "ml", icon: "boost" },
  { name: "NumPy", level: 90, category: "ml", icon: "numpy" },
  { name: "OpenCV", level: 80, category: "ml", icon: "opencv" },
  
  // Databases
  { name: "Microsoft SQL Server", level: 95, category: "database", icon: "sqlserver" },
  { name: "PostgreSQL", level: 80, category: "database", icon: "postgresql" },
  
  // Cloud & DevOps
  { name: "Microsoft Azure", level: 90, category: "cloud", icon: "azure" },
  { name: "Azure App Service", level: 85, category: "cloud", icon: "azure" },
  { name: "Azure Functions", level: 80, category: "cloud", icon: "azure" },
  { name: "REST APIs", level: 95, category: "cloud", icon: "api" },
  { name: "GraphQL", level: 75, category: "cloud", icon: "graphql" },
  { name: "Docker", level: 80, category: "cloud", icon: "docker" },
  { name: "Git", level: 95, category: "cloud", icon: "git" },
  
  // Developer Tools
  { name: "Visual Studio", level: 95, category: "tools", icon: "visualstudio" },
  { name: "PyCharm", level: 85, category: "tools", icon: "pycharm" },
  { name: "Node.js", level: 75, category: "tools", icon: "nodejs" },
  { name: "Django", level: 70, category: "tools", icon: "django" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Wipro Limited",
    position: "Project Engineer",
    duration: "May 2022 – Aug 2024",
    description: [
      "Engineered and deployed key features for devNXT, a legacy application modernization platform, using .NET MAUI Blazor and C#, contributing to a solution that accelerates cloud migration for enterprise clients",
      "Developed a centralized settings module for the devNXT application, streamlining the configuration process and reducing client onboarding time by an estimated 20%",
      "Implemented a DIA (Digital Interactive Assistant) chat feature, integrating with backend services to provide real-time remediation suggestions and answers from a knowledge base, improving developer productivity",
      "Deployed and managed application components on Microsoft Azure, utilizing Azure App service and Azure functions to ensure a scalable and resilient cloud-native architecture",
      "Collaborated in an Agile team to refactor legacy .NET and ASP 2.0 codebases, enhancing maintainability and preparing applications for UI modernization to React and Angular frameworks",
      "Actively participated in the full software development lifecycle, including sprint planning, daily stand-ups, and peer code reviews using Git to maintain code quality and ensure timely feature delivery"
    ],
    technologies: [".NET MAUI", "Blazor", "C#", "Microsoft Azure", "Azure App Service", "Azure Functions", "React", "Angular", "Git", "Agile"],
    current: false
  },
  {
    id: "2",
    company: "Wipro Limited",
    position: "Intern",
    duration: "Feb 2022 – April 2022",
    description: [
      "Completed an intensive corporate training program on the .NET framework and Microsoft Azure, focusing on building and deploying enterprise-level cloud applications",
      "Achieved official Microsoft certifications in Azure Fundamentals (AZ-900) and Azure Data Fundamentals (DP-900), demonstrating validated expertise in cloud concepts and core data services",
      "Architected and implemented RESTful APIs using ASP.NET Web API to facilitate seamless CRUD operations, ensuring efficient data communication between the user interface and the SQL Server database",
      "Developed a full-stack .NET smart web application as a capstone project, demonstrating proficiency in C#, ASP.NET, and SQL Server to build a functional, data-driven solution"
    ],
    technologies: [".NET Framework", "Microsoft Azure", "ASP.NET Web API", "C#", "SQL Server", "REST APIs", "CRUD Operations"],
    current: false
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Bridgeport",
    degree: "Master of Science in Computer Science",
    duration: "Sept 2024 – May 2026",
    description: "Currently pursuing Master's degree with focus on advanced computer science concepts. Relevant coursework includes Object-oriented programming with design patterns, Deep Learning, Introduction to robotics, Cyber Security, and Natural language processing."
  },
  {
    id: "2",
    institution: "GITAM University Hyderabad",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "June 2018 – April 2022",
    description: "Graduated with comprehensive knowledge in computer science fundamentals. Completed coursework in Data Structures, Algorithms, Software Engineering, Database Management, Computer Networks, and Programming Languages. Developed strong foundation in software development and system design."
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "August 9, 2022",
    description: "Validated expertise in cloud concepts and core Azure services, including compute, networking, storage, and security fundamentals."
  },
  {
    id: "2",
    name: "Full Stack .NET Smart Web App-L3",
    issuer: "Wipro Limited",
    date: "November 30, 2022",
    description: "Comprehensive certification in full-stack .NET development, covering web applications, APIs, and database integration."
  },
  {
    id: "3",
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "January 21, 2023",
    description: "Demonstrated knowledge of core data concepts and how they're implemented using Microsoft Azure data services."
  },
  {
    id: "4",
    name: "Tata-Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group",
    date: "August 7, 2025",
    description: "Practical experience in cybersecurity analysis, threat detection, and security best practices in enterprise environments."
  },
  {
    id: "5",
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "September 13, 2025",
    description: "Comprehensive understanding of generative AI technologies, applications, and ethical considerations in modern software development."
  }
];
