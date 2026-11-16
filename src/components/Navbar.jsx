import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6 shadow-md">
      <Link to="/" className="hover:text-gray-300 font-medium">Home</Link>
      <Link to="/about" className="hover:text-gray-300 font-medium">About</Link>
      <Link to="/portfolio" className="hover:text-gray-300 font-medium">Portfolio</Link>
    </nav>
  );
}