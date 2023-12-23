import React from "react";
import icon from "../../assets/icon.png";
import Card from "../cards";

import super1 from "../../assets/super1.png";
import release2 from "../../assets/release2.png";

import "./free.scss";

const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon"></img>
          </div>
          <h2>Free NFT for early birds</h2>
          <p>Sign up today and you'll get a free NFT when we launch</p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Free;
