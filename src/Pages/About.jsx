// Import your profile photo from the assets folder
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: High-Contrast, Crystal Clear Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Me
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              Hi! I am a passionate frontend web developer building cool things with React, JavaScript, and Tailwind CSS. I enjoy crafting clean, responsive user interfaces and interactive web applications.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, refining my component architectures, and building modern portfolio projects.
            </p>
          </div>

          {/* Right Side: Much Bigger Photo Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-indigo-500/40 bg-slate-800">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}