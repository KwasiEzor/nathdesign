import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaPenNib } from "react-icons/fa";
import { BiX } from "react-icons/bi";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
    console.log("clicked");
  };
  useEffect(() => {
    if (window.innerWidth > 968) {
      setIsActive(false);
    }
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);
  return (
    <nav className={navActive ? " navbar fixed-top" : "navbar "}>
      <div>
        <NavLink to={"/"} className={`logo`}>
          Nath
          <span>design</span>{" "}
          <span className="pen-nib">
            <FaPenNib />
          </span>
        </NavLink>
      </div>
      <div className={isActive ? `navbar-menu active` : `navbar-menu`}>
        <NavLink to={`/`} onClick={() => setIsActive(false)}>
          Home
        </NavLink>
        <NavLink to={`/about`} onClick={() => setIsActive(false)}>
          About
        </NavLink>
        <NavLink to={`/projects`} onClick={() => setIsActive(false)}>
          Projects
        </NavLink>
        <NavLink to={`/contact`} onClick={() => setIsActive(false)}>
          Contact
        </NavLink>
      </div>
      <span className="menu-hamburger" onClick={handleActive}>
        {isActive ? <BiX className="close-icon" /> : <FaBars />}
      </span>
    </nav>
  );
};

export default Navbar;
