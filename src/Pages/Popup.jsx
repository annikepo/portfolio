export default function Popup({ project, onClose }) {
  // If no project is selected, don't render the modal
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 text-slate-100 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1 rounded-full text-sm font-bold transition cursor-pointer"
        >
          ✕
        </button>

        {/* 1. Project Name */}
        <h2 className="text-3xl font-extrabold text-white mb-4 pr-10">{project.name}</h2>

        {/* 2. Project Screenshot */}
        <div className="mb-6 rounded-xl overflow-hidden border border-slate-700 shadow-md">
          <img 
            src={project.screenshot} 
            alt={project.name} 
            className="w-full h-64 object-cover"
          />
        </div>

        {/* 4. Tech Used */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techUsed.map((tech, index) => (
              <span key={index} className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Short Write-Up (What it does, Learned, Role, Challenges) */}
        <div className="space-y-4 text-slate-300 text-sm mb-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
          <div>
            <strong className="text-white block mb-1">What the project does:</strong>
            <p>{project.writeUp.description}</p>
          </div>
          <div>
            <strong className="text-white block mb-1">What you learned:</strong>
            <p>{project.writeUp.learned}</p>
          </div>
          <div>
            <strong className="text-white block mb-1">Your role:</strong>
            <p>{project.writeUp.role}</p>
          </div>
          <div>
            <strong className="text-white block mb-1">Challenges solved:</strong>
            <p>{project.writeUp.challenges}</p>
          </div>
        </div>

        {/* 3. GitHub Repo Link & Close Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={project.githubRepo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition shadow"
          >
            View on GitHub &rarr;
          </a>
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition font-medium cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}