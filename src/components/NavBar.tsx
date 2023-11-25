import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./tools/NavIcons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar border-b-2 border-blue-400">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            <span className="max-sm:text-2xl">Man-Comu</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                
                to="/"
                
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/about"
               
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/blog"
                
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/contact"
              
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/login"
                
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;