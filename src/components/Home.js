import "../App.css";
import React from "react";
import profilePic from "../Assets/profile-pic.PNG";

export default function Home() {
  return (
    <div>
      <div className="homeImage">
        <div className="homeName">
          <h2>Cole Kasabian</h2>
          <h2 className="developer">Full-Stack Software Developer</h2>
          <p className="homeDescription">
            I am a driven full-stack developer from Fresno, California who has
            completed a Fire Academy and has his Bachelors in Finance. If you
            are still interested stick around!
          </p>
        </div>
        <img
          alt="profile picture"
          src={profilePic}
          className="profilePic"
        ></img>
        <p></p>
      </div>
      <h3 className="skillsheader">Skills</h3>
      <ul className="skillsList">
        <li>Javascript</li>
        <li>REACT</li>
        <li>Node.js</li>
        <li>NoSQL</li>
        <li>MERN </li>
      </ul>
      <ul className="skillsList">
        <li>Express.js</li>
        <li>PWA</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
