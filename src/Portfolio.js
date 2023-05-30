import React, { useState } from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import github from "./Assets/githb-logo.png";
import linkedIn from "./Assets/linkedin-logo.webp";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "MyWork") {
      return <MyWork />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
        <p className="footer">
          <a href="https://github.com/colekasa">
            <img alt="github logo" src={github} className="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/cole-kasabian/">
            <img alt="linkedin logo" src={linkedIn} className="linkedIn"></img>
          </a>
        </p>
      </footer>
    </div>
  );
}
