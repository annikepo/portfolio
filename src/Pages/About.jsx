// Import your profile photo from the assets folder
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Texts */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Hi! I am a passionate frontend web developer building cool things with React, JavaScript, and Tailwind CSS. I enjoy crafting clean, responsive user interfaces and interactive web applications.
          </p>
          <p className="text-slate-400">
            When I'm not coding, I'm exploring new technologies, refining my component architectures, and building modern portfolio projects.
          </p>
        </div>

        {/* Right Side: Photo */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-500/30 bg-slate-800">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}