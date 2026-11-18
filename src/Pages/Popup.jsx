import { useState } from 'react';
import PopupWindow from '../components/PopupWindow';

export default function PopupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">Popup Component Demo</h1>
      <p className="text-slate-400 mb-6">Open a reusable modal popup component using state and props.</p>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow transition cursor-pointer"
      >
        Open Popup Modal
      </button>

      <PopupWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold text-white mb-2">Unique Project Details</h2>
        <p className="text-slate-300 text-sm mb-6">This popup modal is driven by reusable props and parent component state!</p>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white w-full py-2.5 rounded-lg font-medium transition cursor-pointer"
        >
          Close Modal
        </button>
      </PopupWindow>
    </div>
  );
}