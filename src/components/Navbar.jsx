import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Moon Bracelet</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;