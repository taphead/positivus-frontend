import "./Navbar.css";
import navbar_icon from "../../assets/navbar_icon.png";
import menu_icon from "../../assets/menu.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={navbar_icon} />
          <span>Positivus</span>
        </a>

        <img
          src={menu_icon}
          className="menu-icon"
          onClick={() => {
            setMenuOpen(true);
          }}
        />
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Use Cases</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>

          <button className="navbar-button">Request a quote</button>
        </div>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Use Cases</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
