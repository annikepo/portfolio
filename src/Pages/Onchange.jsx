import { useState } from 'react';

export default function Onchange() {
  const [text, setText] = useState('');

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">OnChange Event Handler</h1>
      <p className="text-slate-400 mb-6">Capturing user input dynamically as it changes.</p>

      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        className="bg-slate-800 border border-slate-700 w-full px-4 py-3 rounded-xl text-white mb-6 focus:outline-none focus:border-indigo-500"
      />

      <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-left">
        <p className="text-slate-400 text-sm">Live Output Preview:</p>
        <p className="text-lg font-semibold text-indigo-400 mt-1">{text || 'Waiting for input...'}</p>
      </div>
    </div>
  );
}