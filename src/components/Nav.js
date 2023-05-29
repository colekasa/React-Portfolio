import "../App.css";
import React, { useRef } from "react";
import Resume from "../Assets/cole-kasabian-resume.docx";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="mobileContainer">
        <nav className="nav-bar">
          <div className="homeBtn">
            <a onClick={() => handlePageChange("Home")}>
              <h1> CK</h1>
            </a>
            <form method="get" className="myResume" action={Resume}>
              <button type="submit" className="homeResume">
                Resume`
              </button>
            </form>
          </div>
          <ul className="nav-links">
            <li className="tabs">
              <a onClick={() => handlePageChange("AboutMe")}>About Me</a>
            </li>
            <li className="tabs">
              <a onClick={() => handlePageChange("MyWork")}>My Work</a>
            </li>
            <li className="tabs">
              <a onClick={() => handlePageChange("ContactMe")}>Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
