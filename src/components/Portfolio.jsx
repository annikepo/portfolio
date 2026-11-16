import { useState } from 'react';
import ProjectCard from './ProjectCard';

// Import all 3 local screenshots from src/assets/
import petShopImg from '../assets/petshop.jpg';
import appTrackerImg from '../assets/AppTracker.jpg';
import weatherImg from '../assets/Weather.jpg';

export default function Portfolio() {
  // Challenge requirement: Use useState, default to blank (false)
  const [showProjects, setShowProjects] = useState(false);

  const projectsData = [
    {
      id: 1,
      name: "Pet Shop E-Commerce Store",
      screenshot: petShopImg,
      githubRepo: "https://github.com/yourusername/pet-shop-ecommerce",
      techUsed: ["React", "HTML", "JavaScript", "Tailwind CSS", "Fetch API"],
      writeUp: {
        description: "A responsive e-commerce storefront for pet food and supplies featuring product filtering and dynamic cart capabilities.",
        learned: "Managing client-side cart state and designing clean multi-category product layouts.",
        role: "Frontend Developer (Solo Project)",
        challenges: "Designing an intuitive product grid and updating total price in real time."
      }
    },
    {
      id: 2,
      name: "Task Application Tracker",
      screenshot: appTrackerImg,
      githubRepo: "https://github.com/yourusername/task-tracker",
      techUsed: ["JavaScript", "React", "HTML", "CSS", "LocalStorage"],
      writeUp: {
        description: "A dashboard tool to track job applications, update status stages, and manage daily task lists.",
        learned: "DOM manipulation, event delegation, and storing persistent state with LocalStorage.",
        role: "UI Developer (Collaborative - 2 team members)",
        challenges: "Handling data persistence bugs when users refresh or clear browser state."
      }
    },
    {
      id: 3,
      name: "Weather Forecast",
      screenshot: weatherImg,
      githubRepo: "https://github.com/yourusername/weather-dashboard",
      techUsed: ["React", "JavaScript", "HTML", "Tailwind CSS", "OpenWeather API"],
      writeUp: {
        description: "Fetches live weather metrics, atmospheric conditions, and 7-day forecasts based on search queries.",
        learned: "Asynchronous data fetching (async/await), loading indicators, and error handling in React.",
        role: "Frontend Developer (Solo Project)",
        challenges: "Gracefully managing invalid city searches and handling missing API values."
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          My Developer Portfolio
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
          A collection of projects showcasing reusable React components and Tailwind CSS styling.
        </p>

        {/* Preview Button Challenge */}
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition cursor-pointer"
        >
          {showProjects ? 'Hide Projects' : 'Preview Projects'}
        </button>
      </header>

      {/* Conditionally rendered projects grid */}
      {showProjects && (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              screenshot={project.screenshot}
              githubRepo={project.githubRepo}
              techUsed={project.techUsed}
              writeUp={project.writeUp}
            />
          ))}
        </main>
      )}
    </div>
  );
}