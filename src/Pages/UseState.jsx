import { useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">useState Hook Demo</h1>
      <p className="text-slate-400 mb-6">Manage local component state seamlessly using React's useState hook.</p>
      
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl inline-block">
        <p className="text-5xl font-black text-indigo-400 mb-6">{count}</p>
        <div className="flex gap-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition cursor-pointer"
          >
            Increment
          </button>
          <button 
            onClick={() => setCount(0)}
            className="bg-slate-700 hover:bg-slate-600 text-slate-300 px-5 py-2.5 rounded-lg font-medium transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}  