import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navigation-holder">
        <h3 className="nav-logo">React course</h3>
        <div className="nav-link-holder">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/team">Team</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
