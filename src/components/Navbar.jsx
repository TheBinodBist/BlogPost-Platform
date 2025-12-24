import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog Platform</h2>
      <Link to="/create">Create Blog</Link>
    </nav>
  );
};

export default Navbar;
