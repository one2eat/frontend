import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "reactstrap";
import NasiGoreng from "../../assets/images/recipe-nasgor-image.jpg";
import TimeLogo from "../../assets/images/time-logo.png";
import NasGor from "../../assets/images/nasgor-image.jpg";

const TitleStyle = styled.h1`
  font-weight: bold;
  margin-left: 50px;
  border-bottom: 5px solid #ca2d3e;
`;

const RecipesImage = styled.img`
  margin: 50px;
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

const NasGorImage = styled.img`
  height: 110px;
  width: 175px;
  margin-right: 20px;
  border-radius: 5px;
`;

const NasGorContext = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #c4c4c4;
`;

const NasGorMafia = styled.p`
  color: white;
  padding-top: 30px;
`;

export const RecipesContent = () => {
  return (
    <div>
      <TitleStyle>Indonesian Fried Rice</TitleStyle>
      <RecipesImage src={NasiGoreng} alt="nasi-goreng-recipe" />
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
                <RecipesInstructionsTimeText>Prep</RecipesInstructionsTimeText>
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
              put a lid on the pan and cook for 20 minutes on the lowest heat on
              your smallest burner.
            </p>
          </InstructionText>
          <InstructionText>
            <p>
              2. After 20 minutes, take the lid off and spread out the rice onto
              a tray. Leave to cool, uncovered for 20-30 minutes (until room
              temperature), then cover with clingfilm/plastic wrap and place in
              the fridge until you're ready to use (make sure you use the rice
              within 24 hours).
            </p>
          </InstructionText>
        </Col>
        <Col>
          <ContentTitleStyle>Available at</ContentTitleStyle>
          <NasGorContext>
            <NasGorImage src={NasGor} alt="nasi-goreng" />
            <div>
              <p>Nasi Goreng</p>
              <NasGorMafia>Nasi Goreng Mafia</NasGorMafia>
            </div>
          </NasGorContext>
        </Col>
      </Row>
    </div>
  );
};
