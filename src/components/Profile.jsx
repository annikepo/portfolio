import './Profile.css';
import profileImg from '../assets/profile.png'; // Image 

export default function Profile() {
  return (
    <div className="profile-card bg-slate-800 border border-slate-700 p-6 rounded-xl text-white max-w-sm mx-auto shadow-lg">
      <img src={profileImg} alt="Profile" className="profile-img w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-500" />
      <h2 className="text-2xl font-bold text-center">Anni Developer</h2>
      <p className="text-indigo-400 text-center text-sm mb-4">Frontend React Engineer</p>
      <p className="text-slate-300 text-sm text-center">Passionate about building scalable UI components and web applications.</p>
    </div>
  );
}