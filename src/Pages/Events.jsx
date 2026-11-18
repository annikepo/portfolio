export default function Events() {
  const handleClick = (message) => {
    alert(`Button clicked! Message: ${message}`);
  };

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">React Events Demo</h1>
      <p className="text-slate-400 mb-6">Handling user interactions like clicks, mouseovers, and submissions.</p>

      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-4">
        <button 
          onClick={() => handleClick("Hello from event listener!")}
          className="bg-indigo-600 hover:bg-indigo-500 text-white w-full py-3 rounded-lg font-medium transition cursor-pointer"
        >
          Click Me with Argument
        </button>
        <div 
          onMouseEnter={() => console.log("Mouse hovered over box!")}
          className="bg-slate-900 border border-slate-700 p-4 rounded-lg text-slate-400 text-sm"
        >
          Hover over this container and check your browser console!
        </div>
      </div>
    </div>
  );
}