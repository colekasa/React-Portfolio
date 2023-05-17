import "../App.css";
import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="mobileContainer">
        <nav className="nav-bar">
          <a onClick={() => handlePageChange("Home")} >
            <h1> CK</h1>
          </a>
          <ul className="nav-links">
            <li className="tabs">
              <a onClick={() => handlePageChange("AboutMe")} >
                About Me
              </a>
            </li>
            <li className="tabs">
              <a onClick={() => handlePageChange("MyWork")}>
                My Work
              </a>
            </li>
            <li className="tabs">
              <a
                onClick={() => handlePageChange("ContactMe")}
                
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
