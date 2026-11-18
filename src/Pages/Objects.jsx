import { useState } from 'react';

export default function Objects() {
  const [user, setUser] = useState({
    username: 'Anni',
    title: 'Frontend Developer',
    status: 'Active'
  });

  const updateTitle = () => {
    setUser(prevState => ({
      ...prevState,
      title: 'Principal Software Architect'
    }));
  };

  return (
    <div className="p-8 text-white max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-4">Updating Objects in State</h1>
      <p className="text-slate-400 mb-6">Using the spread operator (...) to preserve unchanged object properties.</p>

      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl text-left space-y-3 mb-6">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Title:</strong> {user.title}</p>
        <p><strong>Status:</strong> <span className="text-green-400">{user.status}</span></p>
      </div>

      <button 
        onClick={updateTitle}
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
      >
        Update Title Property
      </button>
    </div>
  );
}