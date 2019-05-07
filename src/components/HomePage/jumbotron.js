import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-image.jpg";
import logo from "../../assets/images/one2eat-logo.png";

const Container = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

const BackgroundPicture = styled.img`
  /* width: 1280px; */
`;

const HomeLogo = styled.img`
  width: 400px;
  color: white;
  padding-left: 50px;
`;

const HomeButton = styled.button`
  font-size: 25px;
  box-shadow: 0px 10px 10px rgba(239, 71, 58, 0.5);
  border-radius: 50px;
  width: 250px;
  height: 75px;
  margin-left: 50px;
  background: linear-gradient(90deg, #cb2d3e 14.71%, #ef473a 82.48%);

  a {
    text-decoration: none;
    color: #fff;
  }
`;

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
        <HomeButton>
          <Link to="/signin">Get Started</Link>
        </HomeButton>
      </ImageContent>
    </Container>
  );
};
