import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "reactstrap";

import FriedRiceRecipe from "../../assets/images/recipes/fried-rice-recipe.jpg";
import TimeLogo from "../../assets/images/recipes/time-logo.png";
import FriedRice from "../../assets/images/recipes/fried-rice.jpg";
import UsernamePicure from "../../assets/images/recipes/username-picture.png";
import LoveLogo from "../../assets/images/recipes/love-logo.png";

const TitleStyle = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  margin-left: 50px;
  border-bottom: 5px solid #ca2d3e;
`;

const RecipesImage = styled.img`
  margin: 50px;
  width: 1325px;
`;

const ContentTitleStyle = styled.h3`
  margin-left: 50px;
  margin-bottom: 20px;
  text-decoration: underline;
  text-decoration-color: #ca2d3e;
  font-weight: bold;
`;

const RecipesIngredientsStyle = styled.div`
  display: flex;
  font-weight: bold;
  padding: 20px;
  width: 500px;
  margin-left: 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    #1fa2ff -44.87%,
    #12d8fa 45.96%,
    #a6ffcb 127.8%
  );
`;

const RecipesIngredientsTextStyle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: white;
`;

const RecipesInstructionsTimeText = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;

const RecipesInstructionsTime = styled.p`
  font-size: 12px;
`;

const OverrideColInstructions = styled.div`
  padding-right: 0;
`;

const InstructionsImage = styled.img`
  margin-left: 50px;
`;

const InstructionText = styled.p`
  display: flex;
  font-weight: bold;
  padding: 20px;
  width: 500px;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #c4c4c4;
`;

const MenuImage = styled.img`
  height: 110px;
  width: 175px;
  margin-right: 20px;
  border-radius: 5px;
`;

const MenuContext = styled.div`
  display: flex;
  flex-direction: row;
  width: 625px;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #c4c4c4;
`;

const MenuDescription = styled.p`
  color: white;
  padding-top: 30px;
`;

const TitleImageStyling = styled.div`
  margin-right: 50px;
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

export const RecipesContent = () => {
  return (
    <div>
      <TitleImageStyling>
        <TitleStyle>Indonesian Fried Rice</TitleStyle>
        <RecipesImage src={FriedRiceRecipe} alt="nasi-goreng-recipe" />
        <Row>
          <Col>
            <ContentTitleStyle>Ingredients</ContentTitleStyle>
            <RecipesIngredientsStyle>
              <RecipesIngredientsTextStyle>
                500 ml water
              </RecipesIngredientsTextStyle>
            </RecipesIngredientsStyle>
            <RecipesIngredientsStyle>
              <RecipesIngredientsTextStyle>
                300 g rice
              </RecipesIngredientsTextStyle>
            </RecipesIngredientsStyle>
            <ContentTitleStyle>Instructions</ContentTitleStyle>
            <Row>
              <OverrideColInstructions>
                <Col>
                  <InstructionsImage src={TimeLogo} alt="time-logo" />
                </Col>
              </OverrideColInstructions>
              <OverrideColInstructions>
                <Col style={{ borderRight: "2px solid #ca2d3e" }}>
                  <RecipesInstructionsTimeText>
                    Prep
                  </RecipesInstructionsTimeText>
                  <RecipesInstructionsTime>30 mins</RecipesInstructionsTime>
                </Col>
              </OverrideColInstructions>
              <OverrideColInstructions>
                <Col>
                  <RecipesInstructionsTimeText>
                    Cooking
                  </RecipesInstructionsTimeText>
                  <RecipesInstructionsTime>1 hour</RecipesInstructionsTime>
                </Col>
              </OverrideColInstructions>
            </Row>
            <InstructionText>
              <p>
                1. Bring the water to a boil and pour in the rice (no need to
                rinse). Give it a stir so that the rice is covered by the water,
                put a lid on the pan and cook for 20 minutes on the lowest heat
                on your smallest burner.
              </p>
            </InstructionText>
            <InstructionText>
              <p>
                2. After 20 minutes, take the lid off and spread out the rice
                onto a tray. Leave to cool, uncovered for 20-30 minutes (until
                room temperature), then cover with clingfilm/plastic wrap and
                place in the fridge until you're ready to use (make sure you use
                the rice within 24 hours).
              </p>
            </InstructionText>
          </Col>
          <Col>
            <ContentTitleStyle>Available at</ContentTitleStyle>
            <MenuContext>
              <MenuImage src={FriedRice} alt="nasi-goreng" />
              <div>
                <p>Nasi Goreng</p>
                <MenuDescription>Nasi Goreng Mafia</MenuDescription>
              </div>
            </MenuContext>
          </Col>
        </Row>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </AccountReviewStyle>
      </TitleImageStyling>
    </div>
  );
};
