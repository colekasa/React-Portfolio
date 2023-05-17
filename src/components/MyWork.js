import "../App.css";
import React from "react";

export default function MyWork() {
  return (
    <div>
      <a name="mywork"></a>
        <h2>My Work</h2>
      <section className="mywork">
        <div className="container">
          <a href="#" className="flex-item javascript">
            <div>
              <h3>Javascript</h3>
            </div>
          </a>
          <a href="#" className="flex-item react">
            <div>
              <h3>React</h3>
            </div>
          </a>
          <a href="#" className="flex-item mern">
            <div>
              <h3>Mern</h3>
            </div>
          </a>
          <a href="#" className="flex-item sql">
            <div>
              <h3>SQL</h3>
            </div>
          </a>
          <a href="#" className="flex-item project">
            <div>
              <h3>Project</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
