function ProjectCard({ name, screenshot, githubRepo, techUsed, writeUp }) {
  return (
    <article className="flex flex-col bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl hover:border-slate-600 transition-all duration-300">
      {/* 2. Screenshot */}
      <div className="h-48 overflow-hidden bg-slate-950">
        <img 
          src={screenshot} 
          alt={`${name} preview`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* 1. Name */}
        <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>
        
        {/* 4. Tech Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techUsed.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 5. Short Write-up */}
        <div className="space-y-2 text-slate-300 text-sm mb-6 flex-grow">
          <p><strong className="text-slate-100">Description:</strong> {writeUp.description}</p>
          <p><strong className="text-slate-100">What I Learned:</strong> {writeUp.learned}</p>
          <p><strong className="text-slate-100">Role:</strong> {writeUp.role}</p>
          <p><strong className="text-slate-100">Challenges Solved:</strong> {writeUp.challenges}</p>
        </div>

        {/* 3. Github Repo */}
        <a 
          href={githubRepo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-colors text-center"
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;