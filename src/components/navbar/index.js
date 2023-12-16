import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <nav className="nav-wrapper">
      <div className="brand-container">
        <div className="brand-logo">
          <img src={logo} alt="brand logo" />
        </div>

        <div className="toggle-container">
          <div className="mode">
            <ImSun className="theme-btn" />
          </div>
          <div className="toggle">
            {navState ? (
              <MdClose className="close" onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                className="hamburger"
                onClick={() => setNavState(true)}
              />
            )}
          </div>
        </div>
        {navState && (
          <div className="mobile-links-container">
            <ul className="mobile-links">
              <li>
                <a href="#">Features</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Launch</a>
              </li>

              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        )}

        <div className="desktop-links-container">
          <ul className="links">
            <li>
              <a href="#">Features</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Launch</a>
            </li>

            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>

          <ImSun className="theme-btn" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
