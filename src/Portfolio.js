import React, { useState } from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";

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
          <a href=""></a>
        </p>
      </footer>
    </div>
  );
}
