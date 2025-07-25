import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <ul className="flex justify-center space-x-6 p-4">
        <li>
          <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-yellow-400">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-yellow-400">Register</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="hover:text-yellow-400">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;