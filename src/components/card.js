import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/card.css";

import myPhoto from "../assets/me.jpg";

const Card = () => {
  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
    >
      <div className="card">
        <img src={myPhoto} alt="my-photo" className="my-photo" />
        <div className="about-me">
          <h1 style={{ color: "white" , fontSize: "1.75rem"}}>How would my peers describe me?</h1>
          <ul className="list">
            <li className="item">Dependable</li>
            <li className="item">Cheerful</li>
            <li className="item">Team Player</li>
            <li className="item">Confident</li>
            <li className="item">Focused</li>
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
