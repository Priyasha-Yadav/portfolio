import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import LazyRender from './LazyRender';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const categorizedProjects = {
    "Featured": [
      {
        title: "Campus-Hub",
        description:
          "A university-scoped student platform using MERN stack, enabling marketplace listings, study group, and real-time messaging. JWT-based authentication, university isolation via email-domain logic, and Socket.io for real-time user conversations.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778571155/Screenshot_2026-05-12_at_12.53.26_PM_bgw9xj.png",
        tags: ["MERN", "JWT", "Vercel", "Multer", "Socket.io"],
        url: "https://campus-hub-livid.vercel.app",
      },
      {
        title: "MERNFolio",
        description:
          "A MERN based Portfolio builder designed for users who want to create their personal portfolio websites.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1763439540/Screenshot_2025-11-18_at_9.34.58_AM_vwsoe6.png",
        tags: ["MERN", "Firebase", "Render", "Netlify", "Multer"],
        url: "https://mernfolio-delta.vercel.app",
      },
      {
        title: "Jobmentum [ Job Portal ]",
        description:
          "A MERN-based job portal enabling job seekers to apply for roles and recruiters to post jobs and manage applications through secure dashboards.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166559/Screenshot_2025-03-05_at_2.51.41_PM_uhhicu.png",
        tags: ["MERN", "JWT", "Render", "Netlify", "Multer"],
        url: "https://jomentum.netlify.app",
      },
      {
        title: "Evara",
        description:
          "A women’s health companion with personalized wellness, cycle, nutrition, and hormonal health guidance through adaptive intelligence and real-time insights.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572221/Screenshot_2026-05-12_at_1.20.12_PM_hnjpqn.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/sGPG4ifQMSU8CQ4LjMlFNL/Evara?node-id=0-1&t=HsKTw60Z24Z5sDmL-1",
      },
      {
        title: "Tic Tac Toe",
        description:
          "An interactive browser-based Tic Tac Toe game with win detection and reset functionality.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_2.48.51_PM_sxnozm.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://tic-tac-toe-py.netlify.app",
      },
      {
        title: "Velox",
        description:
          "A premium, production-grade hackathon landing page built with React 19 and Vite. It features a fully immersive dark-themed design with interactive particle animations, glassmorphism UI, and a multi-step registration flow that generates a shareable participant ID card.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778571578/Screenshot_2026-05-12_at_1.09.30_PM_gmg0qd.png",
        tags: ["Frontend + AI Hackathon", "React.js", "Framer Motion"],
        url: "https://hack-street-hackathon-problem-state.vercel.app",
      },

    ],

    "Full-Stack Projects": [
      {
        title: "Campus-Hub",
        description:
          "A university-scoped student platform using MERN stack, enabling marketplace listings, study group, and real-time messaging. JWT-based authentication, university isolation via email-domain logic, and Socket.io for real-time user conversations.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778571155/Screenshot_2026-05-12_at_12.53.26_PM_bgw9xj.png",
        tags: ["MERN", "JWT", "Vercel", "Multer", "Socket.io"],
        url: "https://campus-hub-livid.vercel.app",
      },
      {
        title: "MERNFolio",
        description:
          "A MERN based Portfolio builder designed for users who want to create their personal portfolio websites.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1763439540/Screenshot_2025-11-18_at_9.34.58_AM_vwsoe6.png",
        tags: ["MERN", "JWT", "Render", "Netlify", "Multer"],
        url: "https://mernfolio-delta.vercel.app",
      },
      {
        title: "Jobmentum [ Job Portal ]",
        description:
          "A MERN-based job portal enabling job seekers to apply for roles and recruiters to post jobs and manage applications through secure dashboards.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166559/Screenshot_2025-03-05_at_2.51.41_PM_uhhicu.png",
        tags: ["MERN", "JWT", "Render", "Netlify", "Multer"],
        url: "https://jomentum.netlify.app",
      },
      {
        title: "GearGuard",
        description: "A comprehensive MERN stack maintenance management system that helps companies track their assets (machines, vehicles, computers) and manage maintenance requests efficiently.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778573895/Screenshot_2026-05-12_at_1.48.06_PM_ph52ak.png",
        tags: ["MERN", "FullCalender", "React Beautiful DnD", "JWT"],
        url: "https://gearguard-delta.netlify.app",
      }
    ],
    APIs: [
      {
        title: "LeafDaily",
        description:
          "A backend API that tracks eco-friendly actions, awards points, and exposes sustainability dashboards for client applications.",
        image:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        tags: ["Node.js", "Express.js", "Backend"],
        url: "https://documenter.getpostman.com/view/39189648/2sAYX3sjFp",
      },
      {
        title: "Instagram-Inspired API",
        description:
          "A RESTful API supporting authentication, posts, likes, comments, and feed retrieval for a social media platform.",
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
        tags: ["Node.js", "Express.js", "MongoDB"],
        url: "https://github.com/Priyasha-Yadav/Instagram-Inspired-API",
      },
      {
        title: "Students API",
        description:
          "A CRUD-based backend service for managing student records using Node.js, Express, and MongoDB.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        tags: ["Node.js", "Express.js", "MongoDB"],
        url: "https://github.com/Priyasha-Yadav/Students-API",
      },
      {
        title: "Companies API",
        description:
          "An API for storing and filtering detailed company data including salary, hiring criteria, benefits, and interview rounds.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2230",
        tags: ["Next.js", "MongoDB"],
        url: "https://documenter.getpostman.com/view/39189648/2sB3QRmSR1",
      },
    ],

    Clones: [
      {
        title: "YouTube Clone",
        description:
          "A React-based YouTube UI clone that fetches and displays videos using the YouTube Data API.",
        image:
          "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Youtube.png?raw=true",
        tags: ["React.js", "YouTube API"],
        url: "https://youtube-vite.netlify.app",
      },
      {
        title: "Target E-commerce Clone",
        description:
          "A static front-end clone of Target’s landing page focusing on layout, typography, and UI structure.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166578/Screenshot_2025-03-05_at_11.08.09_AM_iz39v1.png",
        tags: ["HTML", "CSS"],
        url: "https://targetclonecg.netlify.app",
      },
      // {
      //   title: "Amazon Landing Page Clone",
      //   description:
      //     "A pixel-accurate static recreation of Amazon’s homepage using modern HTML and CSS techniques.",
      //   image:
      //     "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/amazon.png?raw=true",
      //   tags: ["HTML", "CSS"],
      //   url: "https://static-amazon.netlify.app",
      // },

      {
        title: "Flipkart Landing Page Clone",
        description:
          "A structured static Flipkart homepage clone designed to replicate grid layout and branding.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1761052349/flipkart.png",
        tags: ["HTML", "CSS"],
        url: "https://static-flip-dev.netlify.app",
      },
    ],

    "Mini Projects": [
      {
        title: "Tic Tac Toe",
        description:
          "An interactive browser-based Tic Tac Toe game with win detection and reset functionality.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_2.48.51_PM_sxnozm.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://tic-tac-toe-py.netlify.app",
      },
      {
        title: "Static Sudoku",
        description:
          "A visually styled static Sudoku board built using CSS grid layouts.",
        image:
          "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Sudoku/Sudoku.png?raw=true",
        tags: ["HTML", "CSS"],
        url: "https://static-sudoku.netlify.app",
      },
      {
        title: "Static Chess",
        description:
          "A static chessboard UI designed with HTML and CSS focusing on layout precision.",
        image:
          "https://github.com/Priyasha-Yadav/Task/blob/main/Frontend_Task/Chess/Chess.png?raw=true",
        tags: ["HTML", "CSS"],
        url: "https://static-chess-dev.netlify.app",
      },
      {
        title: "Calculator-2.0",
        description:
          "A modern web calculator with improved UI and interactive arithmetic functionality.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1756798060/Screenshot_2025-09-02_at_12.57.31_PM_h687hk.png",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://calc-two.netlify.app",
      },
    ],

    "Figma Projects": [
      {
        title: "Lapto",
        description:
          "A clean Figma website design showcasing laptop products with card-based layouts.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572550/Screenshot_2026-05-12_at_1.25.36_PM_pyxk05.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/gIyQO0jTCwEuxiBdfwyykh/Lapto---Your-Laptop-Companion?node-id=0-1&t=pzd4Xzme7Mk8bTTJ-1",
      },
      {
        title: "Evara",
        description:
          "A women’s health companion with personalized wellness, cycle, nutrition, and hormonal health guidance through adaptive intelligence and real-time insights.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572221/Screenshot_2026-05-12_at_1.20.12_PM_hnjpqn.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/sGPG4ifQMSU8CQ4LjMlFNL/Evara?node-id=0-1&t=HsKTw60Z24Z5sDmL-1",
      },
      {
        title: "Marvel Movie Booking",
        description: "A sleek Figma design for a Marvel movie booking website featuring a dark theme and elements.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572362/Screenshot_2026-05-12_at_1.22.36_PM_t5tmuy.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/CfdnRVPt1pdfkpmWtnh9dv/Marvel-Booking?node-id=0-1&t=SbvbqM68ZAA2qFIH-1",
      },
      {
        title: "By the line",
        description:
          "A minimalist Figma design for a blog website with a focus on typography and content layout.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572329/Screenshot_2026-05-12_at_1.21.59_PM_aanjdm.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/B6IUObr3f5NFe7tJSNMmjM/By-the-Line-Blog?node-id=0-1&t=OS1usggQPLdzLj86-1",
      },
      {
        title: "Instagram UI Clone",
        description: "A sleek Figma design for an Instagram UI clone featuring a modern layout and intuitive user experience.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778572265/Screenshot_2026-05-12_at_1.20.59_PM_tvjlnv.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/Mak3m2fnwHIzyFoelNSdJU/Instagram-UI-Clone?node-id=0-1&t=ypSCgFaLRcWrD24M-1",
      },
      {
        title: "Netflix UI Clone",
        description:
          "A cinematic dark-themed Netflix homepage UI clone created in Figma.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741167228/Screenshot_2025-03-05_at_3.02.47_PM_mqtdrf.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/A5WYSeMi3ffMYJcyzJOq7K/Netflix",
      },
      {
        title: "Jobmentum – UI Design",
        description:
          "A job portal UI/UX design in Figma focusing on recruiter and job-seeker dashboards.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166557/Screenshot_2025-03-05_at_11.06.07_AM_ku7gql.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/rCJvmrMjiTtu9J3uqajM6z/Jobmentum",
      },

      {
        title: "LeafDaily UI/UX Design",
        description:
          "A UI/UX prototype for an eco-lifestyle tracking application designed in Figma.",
        image:
          "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1741166572/Screenshot_2025-03-05_at_2.47.56_PM_nubwh9.png",
        tags: ["UI/UX", "Figma"],
        url: "https://www.figma.com/design/rUVgdmJUXLelwqm0oFhEy0/LeafDaily",
      },

    ],
    "Hackathon Projects": [
      {
        title: "Velox",
        description:
          "A premium, production-grade hackathon landing page built with React 19 and Vite. It features a fully immersive dark-themed design with interactive particle animations, glassmorphism UI, and a multi-step registration flow that generates a shareable participant ID card.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778571578/Screenshot_2026-05-12_at_1.09.30_PM_gmg0qd.png",
        tags: ["Frontend + AI Hackathon", "React.js", "Framer Motion"],
        url: "https://hack-street-hackathon-problem-state.vercel.app",
      },
      {
        title: "GearGuard",
        description: "A comprehensive MERN stack maintenance management system that helps companies track their assets (machines, vehicles, computers) and manage maintenance requests efficiently.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778573895/Screenshot_2026-05-12_at_1.48.06_PM_ph52ak.png",
        tags: ["MERN", "FullCalender", "React Beautiful DnD", "JWT"],
        url: "https://gearguard-delta.netlify.app",
      },
      {
        title: "Expense Manager",
        description: "A full-stack expense management system purpose-built for hackathon and rapid development. It supports company bootstrap on signup, role-based access (Admin, Manager, Employee), multi-step and conditional approval flows (percentage, specific approver, hybrid), receipts OCR, currency conversion with caching, dashboards per role, and a complete admin override + history view.",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1778573895/Screenshot_2026-05-12_at_1.48.06_PM_ph52ak.png",
        tags: ["MERN", "Odoo Hackathon", "Tailwind CSS"],
        url: "https://expensemanager012.netlify.app",
      }
    ]
  };
  // Get all categories including "All"
  const categories = Object.keys(categorizedProjects);

  // Filter projects based on active category
  const filteredProjects = categorizedProjects[activeCategory] || [];


  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden p-10">
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with animated gradient */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient p-2 leading-[1.2]">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across various technologies and platforms, from full-stack applications to design projects.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-2 md:justify-center min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with animations */}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <LazyRender key={project.url} height={420}>
                <ProjectCard project={project} />
              </LazyRender>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
