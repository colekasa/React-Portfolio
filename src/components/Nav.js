import "../App.css";
import React from "react";

export default function Nav() {
  return (
    <div className="top-background">
      <nav className="nav-bar">
        <h1>Cole Kasabian</h1>
        <ul className="nav-links">
          <li>
            <a href="#aboutme"> About Me </a>
          </li>
          <li>
            <a href="#mywork"> My Work </a>
          </li>
          <li>
            <a href="#contactme"> Contact Me </a>
          </li>
        </ul>
      </nav>
      <div className="linked-in-ref">
        <img
          className="profile-pic"
          src="Assets/profile-pic.PNG"
          alt="Profile picture of me on LinkedIn"
        />
        <p>
          Come Visit My <span className="Linked">Linked</span>
        </p>
        <a href="https://www.linkedin.com/in/cole-kasabian-767b08222">
          <button className="linked-in-button">In</button>
        </a>
      </div>
    </div>
  );
}
