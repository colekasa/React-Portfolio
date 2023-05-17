import "../App.css";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="homeImage">
        <img
          alt="profile picture"
          src="/assets/images/profile-pic.PNG"
          className="profilePic"
        ></img>
        <p></p>
      </div>
      <h2>Cole Kasabian</h2>
      <p className="homeDescription">
        I am a driven full-stack developer from Fresno, California. Please take
        some time to learn a little more about me, starting with some of my skills
        listed below.
      </p>
      <h3>Skills</h3>
      <ul className="skillsList">
        <li>Javascript</li>
        <li>REACT</li>
        <li>Node.js</li>
        <li>NoSQL</li>
        <li>MERN </li>
        <li>Express.js</li>
        <li>PWA</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
