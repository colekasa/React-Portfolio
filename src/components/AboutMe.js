import React, { useState } from "react";
import "../App.css";
import pic1 from "../Assets/me-marissa.jpeg";
import pic2 from "../Assets/wedding.jpeg";

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
                src={pic1}
                className="marissaPic"
                alt="this is a picture of me and my girlfriend"
              ></img>
              <p className="paragraphs">
                As a former Fire Academy Cadet, details matter. When it is not
                only your life at stake but also the lives of others, there is
                no doubt that everything must be done meticulously. While coding
                may not entail the same high-pressure life-or-death situations,
                the ability to consistently work as a team towards a common goal
                is a quality I hold in high regard. Progressing through training
                and participating in mock drills involving realistic fire
                scenarios has given me valuable perspective on the importance of
                continuous preparation and learning. Each day, I make it a
                priority to acquire new knowledge, no matter how small, as it
                fuels my passion for coding and keeps it alive. The pursuit of
                knowledge and constant improvement remains the driving force
                behind my dedication to coding.
              </p>
            </div>
          </div>
          <div className={`nextSlide ${isNextSlideHidden ? "none" : ""}`}>
            <img
              src={pic2}
              className="weddingPic"
              alt="this is a picture of me and my girlfriend"
            ></img>
            <div className="me-paragraphs">
              <p className="paragraphs secondP">
                When comparing who I want to become with who I am today, certain
                disparities become apparent. My aspiration is to be someone who
                can provide for their family by working diligently and imparting
                valuable life lessons. This involves seizing opportunities by
                showcasing my accomplishments thus far. However, this is far
                from the culmination of my ambitions; it is merely the starting
                point. I invite you to appreciate what I have created and kindly
                offer any constructive feedback by reaching out to me through
                the contact information provided on my contact page.
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
