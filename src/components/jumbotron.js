import React from "react";
import { Button } from "reactstrap";
import styled from "@emotion/styled";
import homeImage from "../assets/home-image.jpg";
import logo from "../assets/one2eat-logo.png";

const Container = styled.div`
  position: relative;
`;

const BackgroundPicture = styled.img`
  height: 700px;
  width: 1440px;
`;

const HomeLogo = styled.img`
  width: 400px;
  color: white;
  padding-left: 50px;
`;

const HomeButton = {
  fontFamily: "Nunito",
  fontSize: "25px",
  boxShadow: "0px 10px 10px rgba(239, 71, 58, 0.5)",
  borderRadius: "50px",
  width: "250px",
  height: "75px",
  marginLeft: "50px",
  background: "linear-gradient(90deg, #cb2d3e 14.71%, #ef473a 82.48%)"
};

const ImageContent = styled.div`
  position: absolute;
  top: 50px;
  color: white;
`;

const ContentText = styled.p`
  font-family: Nunito;
  font-size: 36px;
  width: 700px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 50px;
`;

export const HomeJumbotron = () => {
  return (
    <Container>
      <BackgroundPicture src={homeImage} alt="Home" />
      <ImageContent>
        <HomeLogo src={logo} alt="logo" />
        <ContentText>
          ONE2EAT is a service where you can find food inspiration and
          recommendation with your own ingredients.
        </ContentText>
        <Button style={HomeButton}>Get Started</Button>
      </ImageContent>
    </Container>
  );
};
