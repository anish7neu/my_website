import React, { useState } from "react";
import "../shared/Navbar.css";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <>
      {/* <nav className="navbar">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" to="/works">
              Works
            </Link>
          </li>
          <li>
            <Link className="link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav> */}

      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              offset={-150}
              duration={500}
              smooth={true}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              offset={-150}
              duration={500}
              smooth={true}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="works"
              spy={true}
              offset={-150}
              duration={500}
              smooth={true}
              onClick={closeMenu}
            >
              Works
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="blogs"
              spy={true}
              offset={-150}
              duration={500}
              smooth={true}
              onClick={closeMenu}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              offset={-150}
              duration={500}
              smooth={true}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
