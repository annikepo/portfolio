import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <div className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-xl">
        
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Crystal Clear Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sky-950">
              About Me
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Hi! I am a passionate frontend web developer building cool things with React, JavaScript, and Tailwind CSS. I enjoy crafting clean, responsive user interfaces and interactive web applications.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, refining my component architectures, and building modern portfolio projects.
            </p>
          </div>

          {/* Right Side: Photo Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-sky-200 bg-sky-100">
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