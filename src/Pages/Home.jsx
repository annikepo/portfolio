export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-900">
      <div className="bg-white/80 backdrop-blur-md border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-sky-950">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Explore my work and learn more about me using the navigation above.
        </p>
      </div>
    </div>
  );
}