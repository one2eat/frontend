import React from "react";
import { Button } from "reactstrap";
import homeImage from "../assets/home-image.jpg";
import logo from "../assets/one2eat-logo.png";

const container = {
  position: "relative"
};

const backgroundPicture = {
  height: "700px",
  width: "1440px"
};

const homeLogo = {
  width: "500px",
  color: "white",
  paddingLeft: "50px"
};

const homeButton = {
  fontFamily: "Nunito",
  fontSize: "25px",
  boxShadow: "0px 10px 10px rgba(239, 71, 58, 0.5)",
  backgroundColor: "linear-gradient(90deg, #CB2D3E 14.71 %, #EF473A 82.48 %)",
  borderRadius: "50px",
  width: "250px",
  height: "75px",
  marginLeft: "50px"
};

const imageContent = {
  position: "absolute",
  top: "50px",
  color: "white"
};

const contentText = {
  fontFamily: "Nunito",
  fontSize: "36px",
  width: "700px",
  paddingTop: "100px",
  paddingBottom: "100px",
  paddingLeft: "50px"
};

export const HomeJumbotron = () => {
  return (
    <div style={container}>
      <img src={homeImage} alt="Home" style={backgroundPicture} />
      <div style={imageContent}>
        <img src={logo} alt="logo" style={homeLogo} />
        <p style={contentText}>
          ONE2EAT is a service where you can find food inspiration and
          recommendation with your own ingredients.
        </p>
        <Button style={homeButton}>Get Started</Button>{" "}
      </div>
    </div>
  );
};
