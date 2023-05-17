import "../App.css";
import React from "react";

export default function MyWork() {
  return (
    <div>
      <a name="mywork"></a>
      <h2 className="pageHeader">My Work</h2>
      <section className="mywork">
        <div className="container">
          <a href="#" className="flex-item javascript">
            <div>
              <h4>Javascript</h4>
            </div>
          </a>
          <a href="#" className="flex-item react">
            <div>
              <h4>React</h4>
            </div>
          </a>
          <a href="#" className="flex-item mern">
            <div>
              <h4>Mern</h4>
            </div>
          </a>
          <a href="#" className="flex-item sql">
            <div>
              <h4>SQL</h4>
            </div>
          </a>
          <a href="#" className="flex-item project">
            <div>
              <h4>Project</h4>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
