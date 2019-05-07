import React from "react";
import styled from "@emotion/styled";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-image.jpg";
import logo from "../../assets/images/one2eat-logo.png";
import IngredientsLogo from "../../assets/images/ingredients.png";
import restaurantsLogo from "../../assets/images/restaurants.png";
import recommendationLogo from "../../assets/images/recommendation.png";

const Container = styled.div`
  position: relative;
`;

const BackgroundPicture = styled.img`
  height: 700px;
  width: 1614px;
  @media (width: 1440px) {
    height: 700px;
    width: 1440px;
  }
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

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    font-weight: bold;
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
  text-decoration: underline;
  text-decoration-color: red;
  padding-top: 50px;
  padding-left: 50px;
`;

const FooterBackground = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  width: 1614px;
  background: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
  @media (width: 1440px) {
    width: 1440px;
  }
`;

const FooterCopyright = styled.div`
  font-size: 12px;
  padding-top: 10px;
  padding-right: 25px;
`;

const FooterLogo = styled.img`
  height: 25px;
  width: 125px;
  padding-left: 25px;
`;

const RoundedLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
`;

const RoundedLogoStyle = styled.div`
  margin-top: 100px;
  margin-bottom: 500px;
`;

const OverrideCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

export const HomeFrontpage = () => {
  return (
    <Container>
      <BackgroundPicture src={homeImage} alt="Home" />
      <ImageContent>
        <HomeLogo src={logo} alt="logo" />
        <ContentDescription>
          ONE2EAT is a service where you can find food inspiration and
          recommendation with your own ingredients.
        </ContentDescription>
        <HomeButton>
          <Link to="/signin">Get Started</Link>
        </HomeButton>
      </ImageContent>
      <FrontpageText>Get The Best Recommendation</FrontpageText>
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

      <FooterBackground>
        <FooterLogo src={logo} alt="footer-logo" />
        <FooterCopyright>
          <p> © Copyright 2019, ONE2EAT.CO</p>
        </FooterCopyright>
      </FooterBackground>
    </Container>
  );
};
