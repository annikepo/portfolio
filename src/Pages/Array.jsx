import { useState } from 'react';

export default function Arrays() {
  const [items, setItems] = useState(['React', 'Tailwind', 'JavaScript']);
  const [inputVal, setInputVal] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setItems([...items, inputVal]);
    setInputVal('');
  };

  const removeItem = (targetIndex) => {
    setItems(items.filter((_, index) => index !== targetIndex));
  };

  return (
    <div className="p-8 text-white max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2 text-center">Array Manipulation</h1>
      <p className="text-slate-400 mb-6 text-center">Adding items with spread and filtering items out.</p>

      <form onSubmit={addItem} className="flex gap-2 mb-6">
        <input 
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Add new tech skill..."
          className="bg-slate-800 border border-slate-700 flex-1 px-4 py-2.5 rounded-xl text-white"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl font-medium cursor-pointer">Add</button>
      </form>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl">
            <span>{item}</span>
            <button 
              onClick={() => removeItem(index)}
              className="text-red-400 hover:text-red-300 text-sm font-semibold cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}