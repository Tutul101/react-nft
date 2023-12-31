import React from "react";
import signup from "../../assets/signup.png";
import "./sign-up.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
          <button className="sign-up">Sign Up</button>
        </div>

        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home"></img>
          </div>
          {/* <div className="ellipse-container">
        <div className="ellipse pink"></div>
        <div className="ellipse orange"></div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
