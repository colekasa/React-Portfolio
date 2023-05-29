import React, { useState } from "react";
import "../App.css";

export default function AboutMe() {
  const [isFirstSlideHidden, setIsFirstSlideHidden] = useState(false);
  const [isNextSlideHidden, setIsNextSlideHidden] = useState(true);

  const handleArrowLeftClick = () => {
    setIsFirstSlideHidden(false);
    setIsNextSlideHidden(true);
  };

  const handleArrowRightClick = () => {
    setIsFirstSlideHidden(true);
    setIsNextSlideHidden(false);
  };

  return (
    <div>
      <a name="aboutme"></a>
      <h2 className="pageHeader">About me</h2>
      <section className="aboutme">
        <button className="arrow left" onClick={handleArrowLeftClick}>
          ❰
        </button>
        <div className="imageContainer">
          <div className={`slideFirst ${isFirstSlideHidden ? "none" : ""}`}>
            <div className="me-paragraphs">
              <img
                src="assets/images/me-marissa.jpeg"
                className="marissaPic"
                alt="this is a picture of me and my girlfriend"
              ></img>
              <p className="paragraphs">
                My name is Cole Kasabian and welcome to my Portfolio Page. I am
                a full-stack developer based out of Fresno California, making a
                career out of programming. This has become more than a passion,
                instead it has become an obsession that I have passion for and
                want to continue to learn more about. It is an evolving space
                that you are able to use critical thinking to problem solve at
                the same time as learning something new nearly every day. To
                really get to know me though a few things I love would include,
                playing basketball, playing video games, spending time with
                people I care about, and working out. These are all things that
                helped shape the person I am today.
              </p>
            </div>
          </div>
          <div className={`nextSlide ${isNextSlideHidden ? "none" : ""}`}>
            <img
              src="assets/images/wedding.jpeg"
              className="weddingPic"
              alt="this is a picture of me and my girlfriend"
            ></img>
            <div className="me-paragraphs">
              <p className="paragraphs secondP">
                When looking at who I want to be compared to who I am today
                there are some differences. What I aspire to be is someone who
                can take care of their family by working and giving them
                important life lessons. This means creating opportunity for
                myself by showcasing some of the work that I have accomplished
                so far. This is by no means an end to what I want to work on and
                in fact it is only the beginning. Please enjoy looking at what I
                have created and if you have any constructive feedback, please
                let me know by contacting me with the information provided on my
                contact page. Thank you for visiting!
              </p>
            </div>
          </div>
        </div>
        <button className="arrow right" onClick={handleArrowRightClick}>
          ❱
        </button>
      </section>
    </div>
  );
}
