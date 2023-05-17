import "../App.css";
import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <div>
        <nav className="nav-bar">
          <a onClick={() => handlePageChange("Home")} href="#home">
            <h1> CK</h1>
          </a>

          <ul className="nav-links">
            <li className="tabs">
              <a onClick={() => handlePageChange("AboutMe")} href="#aboutme">
                About Me
              </a>
            </li>
            <li className="tabs">
              <a onClick={() => handlePageChange("MyWork")} href="#mywork">
                My work
              </a>
            </li>
            <li className="tabs">
              <a
                onClick={() => handlePageChange("ContactMe")}
                href="#contactme"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className="linked-in-ref">
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
      </div> */}
      </div>
    </div>
  );
}
