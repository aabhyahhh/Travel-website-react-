import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Laari Khojo
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "bx bx-exit" : "bx bx-menu"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/nearYou" className="nav-links" onClick={closeMobileMenu}>
                Near You
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
