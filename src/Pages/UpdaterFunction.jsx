import { useState } from 'react';

export default function UpdaterFunction() {
  const [score, setScore] = useState(0);

  // Using a callback updater function for safe state calculation based on previous state
  const addPoints = (points) => {
    setScore(prevScore => prevScore + points);
  };

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">Updater Functions Demo</h1>
      <p className="text-slate-400 mb-6">Safely update state using previous state arguments.</p>
      
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
        <p className="text-4xl font-black text-indigo-400 mb-6">Current Score: {score}</p>
        <div className="flex justify-center gap-4">
          <button onClick={() => addPoints(1)} className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-medium">+1 Point</button>
          <button onClick={() => addPoints(5)} className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-medium">+5 Points</button>
          <button onClick={() => setScore(0)} className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium">Reset</button>
        </div>
      </div>
    </div>
  );
}