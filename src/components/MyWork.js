import "../App.css";
import React from "react";

export default function MyWork() {
  return (
    <div>
      <a name="mywork"></a>
      <h2 className="pageHeader">My Work</h2>
      <section className="mywork">
        <div className="container">
          <a href="https://note-taker-pad.herokuapp.com/" className="flex-item">
            <div className="flex-inside">
              <img
                src="assets/images/note-taker.png"
                alt="This is a screenshot of my Note Taker application"
                className="javascript"
              ></img>
              <h4 className="flexheader">Note-Taker</h4>
              <p className="description">
                The Note Taker Application is a simple web-based tool that
                allows users to create, save, and manage their notes
                efficiently. Using the following technologies: HTML CSS
                JavaScript Node.js Express.js, I was able to create an
                application to help you write some notes for yourself!
              </p>
              <ul>
                <li className="workLi">
                  The Note Taker Application is a simple web-based tool that
                  allows users to create, save, and manage their notes
                  efficiently.
                </li>
                <li className="workLi">
                  Technologies Used: HTML, CSS, Node.js, Express.js.
                </li>
              </ul>
            </div>
          </a>
          <a
            href="https://arcane-falls-03228.herokuapp.com/"
            className="flex-item react"
          >
            <div className="flex-inside">
              <img
                src="assets/images/battle-binder.png"
                alt="This is a screenshot of my Battle Binder application"
                className="battle"
              ></img>
              <h4 className="flexheader">Battle Binder</h4>
              <p className="description">
                Battle-Binder is a full stack application that utilizes Node.js,
                Express.js, SQL, and more to accomplish the task of building you
                a deck of Yu-Gi-Oh cards based on your chosen favorites. When
                choosing a card as a favorite you are able to add this card to
                your deck and view it later by clicking on the "Favorites"
                button at the top of the screen.
              </p>
              <ul>
                <li className="workLi">
                  Battle Binder is a great application for beginners of Yugo-Oh
                  because it has all of the necessary starter cards. You can
                  choose from these cards to build your deck and have some fun!
                </li>
                <li className="workLi">
                  Tehcnologies Used: Node.js, Express.js, MySQL, Handlebars,
                  Sequelize ORM, Bulma, YGOPRODeck API
                </li>
              </ul>
            </div>
          </a>
          <a
            href="https://pwa-jate-colek.herokuapp.com/"
            className="flex-item mern"
          >
            <div>
              <img
                src="assets/images/jate.png"
                alt="This is a screenshot of my JATE PWA application"
                className="javascript"
              ></img>
              <h4 className="flexheader">JATE</h4>
              <p className="description">
                This is a Progressive Web Application (PWA) text editor that
                uses IndexedDB to create an object store and includes both GET
                and PUT methods. The application works without an internet
                connection, automatically saves content inside the text editor
                when the DOM window is unfocused, and is bundled with webpack.
              </p>
              <ul>
                <li className="workLi">
                  Technologies Used: Node.js, Express.js, MySQL, Progressive Web
                  Application, Javascript, HTML, CSS
                </li>
              </ul>
            </div>
          </a>
          <a
            href="https://willisson7.github.io/BrewerMe/"
            className="flex-item sql"
          >
            <div>
              <img
                src="assets/images/brewerMe.PNG"
                alt="This is a screenshot of my BrewerMe application"
                className="javascript"
              ></img>
              <h4 className="flexheader">BrewerMe</h4>
              <p className="description">
                This app works by taking in city and state locations provided by
                a user and passes that information into a third-party API called
                openbreweryAPI to locate breweries in the local area. The city
                input is passed into an openweatherAPI to return the local
                weather.
              </p>
              <ul>
                <li className="workLi">
                  This was my very first project that I developed and is the
                  starting point of my learning. With this as a building block,
                  by adding tools to my tool belt I will be able to accomplish
                  so much more.
                </li>
                <li className="workLi">
                  Technologies Used: Javascript, CSS, HTML, Third-Party API's
                </li>
              </ul>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
