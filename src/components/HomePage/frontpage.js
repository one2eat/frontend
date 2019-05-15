import React from "react";
import styled from "@emotion/styled";
import { Row, Container, Col } from "reactstrap";
import { Link } from "react-router-dom";

import homeImage from "../../assets/images/home/home-image.jpg";
import logo from "../../assets/images/one2eat-logo.png";
import IngredientsLogo from "../../assets/images/home/ingredients.png";
import restaurantsLogo from "../../assets/images/home/restaurants.png";
import recommendationLogo from "../../assets/images/home/recommendation.png";

import { Footer } from "../Footer";

const BackgroundPicture = styled.img`
  min-height: 100vh;
  height: 100%;

  min-width: 100vw;
  width: 100%;
`;

const HomeLogo = styled.img`
  width: 400px;
  color: white;
  padding-left: 50px;
`;

const HomeButton = styled.button`
  font-size: 25px;
  color: white;
  box-shadow: 0px 10px 10px rgba(239, 71, 58, 0.5);
  border-radius: 50px;
  border-color: red;
  width: 250px;
  height: 75px;
  margin-left: 50px;
  background: linear-gradient(90deg, #cb2d3e 14.71%, #ef473a 82.48%);
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #ef473a 14.71%, #ef473a 82.48%);
  }
`;

const ImageContent = styled.div`
  position: absolute;
  top: 50px;
  color: white;
`;

const ContentDescription = styled.p`
  font-size: 36px;
  width: 700px;
  padding-top: 125px;
  padding-bottom: 100px;
  padding-left: 50px;
`;

const FrontpageText = styled.h3`
  border-bottom: 2px solid #ca2d3e;
`;

const RoundedLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 24px;
  background: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);

  img {
    width: 40%;
  }
`;

const RoundedLogoStyle = styled.div`
  padding: 40px 20px;
  background: #f3f3f3;
  border-radius: 10px;
`;

const OverrideCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterSpacer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeFrontpage = () => {
  return (
    <React.Fragment>
      <BackgroundPicture src={homeImage} alt="Home" />
      <ImageContent>
        <Container>
          <HomeLogo src={logo} alt="logo" />
          <ContentDescription>
            ONE2EAT is a service where you can find food inspiration and
            recommendation with your own ingredients.
          </ContentDescription>
          <Link to="/signin">
            <HomeButton>Get Started</HomeButton>
          </Link>
        </Container>
      </ImageContent>
      <Container>
        <div className="mb-4" />
        <FrontpageText>Get The Best Recommendation</FrontpageText>
        <div className="mb-4" />

        <RoundedLogoStyle>
          <Row>
            <OverrideCol>
              <RoundedLogo>
                <img src={IngredientsLogo} alt="ingredients-logo" />
              </RoundedLogo>
              Find recipes by your ingredients
            </OverrideCol>
            <OverrideCol>
              <RoundedLogo>
                <img src={restaurantsLogo} alt="restaurants-logo" />
              </RoundedLogo>
              Find the best restaurant
            </OverrideCol>
            <OverrideCol>
              <RoundedLogo>
                <img src={recommendationLogo} alt="rescommendation-logo" />
              </RoundedLogo>
              Get the best recommendation
            </OverrideCol>
          </Row>
        </RoundedLogoStyle>
      </Container>
      <div className="mb-4" />
      <Footer />
    </React.Fragment>
  );
};
