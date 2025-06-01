import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import '../styles/Layout.css';

export default function Layout() {
  const [showNav, setShowNav] = useState(true);
  const [animating, setAnimating] = useState(false);

  const toggleNav = () => {
    setAnimating(true);
    if (showNav) {
      setTimeout(() => {
        setShowNav(false);
        setAnimating(false);
      }, 300); 
    } else {
      setShowNav(true);
      setTimeout(() => setAnimating(false), 300);
    }
  };

  return (
    <>
      {/* Add class to control slide animation */}
      <nav className={`Layout ${showNav && !animating ? "slide-in" : animating && !showNav ? "slide-out" : ""}`}>
        {showNav && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/services">Services</NavLink>
            <button
              id="tgm"
              onClick={() => document.body.classList.toggle('minimal-mode')}
              aria-label="Toggle minimal mode"
            />
          </>
        )}
      </nav>

      {/* Navigation toggle button fixed under navbar, right side */}
      <button
        className="nav-toggle"
        onClick={toggleNav}
        aria-label={showNav ? "Hide navigation" : "Show navigation"}
        title={showNav ? "Hide navigation" : "Show navigation"}
      >
        {showNav ? "▲" : "▼"}
      </button>

      <Outlet />
    </>
  );
}
