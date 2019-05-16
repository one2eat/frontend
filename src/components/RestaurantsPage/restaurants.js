import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "reactstrap";

import LawlessRestaurants from "../../assets/images/restaurants/lawless.jpg";
import PhoneLogo from "../../assets/images/restaurants/phone-logo.svg";
import Burger from "../../assets/images/restaurants/lawless-burger.jpg";
import UsernamePicure from "../../assets/images/recipes/username-picture.png";
import LoveLogo from "../../assets/images/recipes/love-logo.png";

const Container = styled.div`
  position: relative;
`;

const TitleText = styled.h1`
  position: absolute;
  font-weight: bold;
  color: white;
  top: 30px;
  margin-top: 550px;
  margin-left: 50px;
`;

const LawlessPicture = styled.img`
  border-bottom: 10px solid #ca2d3e;
`;

const Address = styled.div`
  color: white;
  padding: 20px;
  width: 700px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(76, 154, 175, 0.25);
  border-radius: 10px;
  background: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
`;

const PhoneNumberText = styled.div`
  display: flex;
`;

const PhoneImage = styled.img`
  height: 25px;
  width: 25px;
`;

const PhoneNumber = styled.p`
  margin-left: 8px;
`;

const AddressTextTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const AddressText = styled.p`
  font-size: 20px;
`;

const MenuTitle = styled.h3`
  text-decoration: underline;
  text-decoration-color: #ca2d3e;
  margin: 50px;
`;

const BurgerMenu = styled.img`
  margin-left: 50px;
  margin-bottom: 50px;
  height: 150px;
  width: 200px;
  border-radius: 10px;
`;

const ReviewText = styled.h3`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
  text-decoration: underline;
  text-decoration-color: #ca2d3e;
  font-weight: bold;
`;

const ReviewTextStyling = styled.div`
  border-top: 3px solid #ca2d3e;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
`;

const ReviewButton = styled.button`
  font-size: 25px;
  color: white;
  box-shadow: 0px 10px 10px rgba(239, 71, 58, 0.5);
  border-radius: 50px;
  border-color: red;
  margin-top: 20px;
  width: 225px;
  height: 50px;
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

const AccountReviewStyle = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 500px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #6f6f6f;
`;

const AccountPhoto = styled.img`
  height: 75px;
  width: 100px;
  margin-right: 20px;
`;

const ReviewLikes = styled.div`
  display: flex;
`;

const ReviewLikesLogo = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  margin-top: 4px;
`;

const ReviewUsername = styled.h6`
  font-weight: bold;
`;

export const RestaurantsContent = () => {
  return (
    <Container>
      <LawlessPicture src={LawlessRestaurants} alt="lawless" />
      <TitleText>Lawless Burger</TitleText>
      <Address>
        <div>
          <AddressTextTitle>Address</AddressTextTitle>
        </div>
        <div>
          <AddressText>
            Jl. Kemang Selatan VIII No.67K, RT.7/RW.2, Bangka, Mampang Prpt.,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
          </AddressText>
        </div>
        <div>
          <Row>
            <Col>
              <PhoneNumberText>
                <PhoneImage src={PhoneLogo} alt="phone-logo" />
                <PhoneNumber>021 1234 123</PhoneNumber>
              </PhoneNumberText>
            </Col>
            <Col>
              <p>Hours : 11.00 AM - 10.00 PM</p>
            </Col>
          </Row>
        </div>
      </Address>
      <MenuTitle>Menu</MenuTitle>
      <div>
        <BurgerMenu src={Burger} alt="lawless-burger" />
      </div>
      <ReviewTextStyling>
        <ReviewText>Review</ReviewText>
      </ReviewTextStyling>
      <ReviewButton>Write Review</ReviewButton>
      <AccountReviewStyle>
        <AccountPhoto src={UsernamePicure} alt="account" />
        <div>
          <ReviewUsername>Username</ReviewUsername>
          <ReviewLikes>
            <ReviewLikesLogo src={LoveLogo} alt="like" />
            <p>219</p>
          </ReviewLikes>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </AccountReviewStyle>
    </Container>
  );
};
