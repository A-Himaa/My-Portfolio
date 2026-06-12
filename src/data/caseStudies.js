import portfolio from "../assets/projects/portfolio.png";
import portfolio1 from "../assets/projects/portfolio1.png";
import portfolio2 from "../assets/projects/portfolio2.png";
import portfolio3 from "../assets/projects/portfolio3.png";
import portfolio4 from "../assets/projects/portfolio4.png";

import atmosphera from "../assets/projects/atmosphera.png";
import atmosphera1 from "../assets/projects/atmosphera1.png";
import atmosphera2 from "../assets/projects/atmosphera2.png";
import atmosphera3 from "../assets/projects/atmosphera3.png";
import atmosphera4 from "../assets/projects/atmosphera4.png";

import crimeRadar from "../assets/projects/crimeRadar.png";
import crimeRadar1 from "../assets/projects/cr1.png";
import crimeRadar2 from "../assets/projects/cr2.png";
import crimeRadar3 from "../assets/projects/cr3.png";
import crimeRadar4 from "../assets/projects/cr4.png";

import rangiriWeb from "../assets/projects/rangiriWeb.png";
import rangiriWeb1 from "../assets/projects/rh1.png";
import rangiriWeb2 from "../assets/projects/rh2.png";
import rangiriWeb3 from "../assets/projects/rh3.png";
import rangiriWeb4 from "../assets/projects/rh4.png";

import rangiriAqua from "../assets/projects/rangiriAqua.png";
import rangiriAqua1 from "../assets/projects/ra1.png";
import rangiriAqua2 from "../assets/projects/ra2.png";
import rangiriAqua3 from "../assets/projects/ra3.png";
import rangiriAqua4 from "../assets/projects/ra4.png";

export const caseStudies = [
  {
    id: 0,
    title: "Personal Portfolio",
    subtitle: "Modern Developer Personal Portfolio Website",
    img: portfolio,
    desc: "A responsive personal portfolio website built to showcase the projects, skills, experience, and achievements.",
    tech: ["React.js", "Vite", "Tailwind CSS", "CSS3"],
    overview: "This project is a modern personal portfolio website designed to showcase my work, skills, and professional achievements. Built with React and Vite for optimal performance, the site features smooth animations, responsive design, and an intuitive navigation system. The portfolio demonstrates my expertise in frontend development with a focus on user experience and modern web design practices.",
    role: "UI/UX Design & Frontend Development",
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/A-Himaa/My-Portfolio.git",
    screenshots: [portfolio1, portfolio2, portfolio3, portfolio4],
    nextProjectId: 1,
  },
  {
    id: 1,
    title: "ATMOSPHERA",
    subtitle: "AI-Based Analysis for Exoplanetary Biosignatures & Profiling using Spectral Data",
    img: atmosphera,
    desc: "An AI-powered atmospheric analysis system for processing exoplanet spectral data to detect atmospheric gases, evaluate potential biosignatures, and generate planetary habitability profiles for astronomical research.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "SciPy", "FastAPI"],
    overview: "ATMOSPHERA is an advanced AI system developed for analyzing spectral data from exoplanets. It uses deep learning models and machine learning algorithms to detect atmospheric gases, identify potential biosignatures, and generate detailed habitability profiles. The system is designed to assist astronomers and researchers in identifying potentially habitable exoplanets. The backend is built with FastAPI for high performance, and the machine learning pipeline utilizes PyTorch and scikit-learn for data processing and model inference.",
    role: "AI/ML Engineer & Full-Stack Developer",
    liveLink: "#",
    githubLink: "https://github.com/yourusername/atmosphera",
    screenshots: [atmosphera1, atmosphera2, atmosphera3, atmosphera4],
    nextProjectId: 2,
  },
  {
    id: 2,
    title: "Crime Radar",
    subtitle: "Real-time Crime Reporting & Awareness Platform",
    img: crimeRadar,
    desc: "A community-driven crime awareness system featuring live crime mapping, real-time reporting, analytical dashboards, and secure anonymous reporting.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Nodemailer"],
    overview: "Crime Radar is a comprehensive community safety platform that enables real-time crime reporting and awareness. The application features an interactive map showing crime incidents, detailed analytics dashboards, and anonymous reporting capabilities. Users can receive notifications about crimes in their area and contribute to community safety. The platform uses a secure backend with Node.js and Express, MongoDB for data management, and React for a responsive frontend interface.",
    role: "Full Stack Developer",
    liveLink: "https://crime-radar.example.com",
    githubLink: "https://github.com/yourusername/crime-radar",
    screenshots: [crimeRadar1, crimeRadar2, crimeRadar3, crimeRadar4],
    nextProjectId: 3,
  },
  {
    id: 3,
    title: "Rangiri Holdings Website",
    subtitle: "Corporate Website for Rangiri Holdings",
    img: rangiriWeb,
    desc: "A responsive corporate website designed to strengthen Rangiri Holdings' digital presence by showcasing its services, CSR activities, project portfolio, and business achievements while enabling seamless customer engagement through contact forms.",
    tech: ["Next.js 15", "React", "Tailwind CSS", "Framer Motion"],
    overview: "Rangiri Holdings website is a professional corporate platform built with Next.js 15, featuring server-side rendering for optimal SEO performance. The website showcases the company's services, corporate social responsibility initiatives, and completed projects. It includes interactive animations using Framer Motion, a responsive design that works seamlessly across all devices, and integrated contact forms for customer engagement.",
    role: "Frontend Developer & UI/UX Designer",
    liveLink: "https://rangirixyz.example.com",
    githubLink: "https://github.com/yourusername/rangiri-holdings",
    screenshots: [rangiriWeb1, rangiriWeb2, rangiriWeb3, rangiriWeb4],
    nextProjectId: 4,
  },
  {
    id: 4,
    title: "Rangiri Aqua Website",
    subtitle: "Adventure, Training & Event Management Platform",
    img: rangiriAqua,
    desc: "A modern corporate website developed to showcase Rangiri Aqua's adventure activities, team-building programs, corporate training services, and event management solutions while providing an engaging and responsive user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    overview: "Rangiri Aqua website is a dynamic platform showcasing adventure activities, corporate training programs, and event management services. Built with vanilla HTML5, CSS3, and JavaScript, the website provides an engaging user experience with interactive elements, smooth scrolling, and responsive design. It serves as a comprehensive digital presence for the company's multiple service offerings.",
    role: "Frontend Developer",
    liveLink: "https://rangirilaqua.example.com",
    githubLink: "https://github.com/yourusername/rangiri-aqua",
    screenshots: [rangiriAqua1, rangiriAqua2, rangiriAqua3, rangiriAqua4],
    nextProjectId: 0,
  },
];
