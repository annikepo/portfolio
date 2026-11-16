import { useState } from 'react';
import appTrackerImg from '../assets/AppTracker.jpg';
import petshopImg from '../assets/petshop.jpg';
import weatherImg from '../assets/Weather.jpg';

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    { id: 1, title: 'App Tracker', image: appTrackerImg, description: 'Track your daily app usage and productivity.' },
    { id: 2, title: 'Pet Shop', image: petshopImg, description: 'An e-commerce storefront for pet supplies.' },
    { id: 3, title: 'Weather App', image: weatherImg, description: 'Check real-time weather forecasts dynamically.' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      
      {/* Preview Button */}
      <button 
        onClick={() => setShowProjects(!showProjects)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        {showProjects ? 'Hide Projects' : 'Preview Projects'}
      </button>

      {/* Conditionally rendered projects section */}
      {showProjects && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}