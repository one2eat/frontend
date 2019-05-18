import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import FriedRiceRecipe from "../../assets/images/recipes/fried-rice-recipe.jpg";
import TimeLogo from "../../assets/images/recipes/time-logo.png";
import FriedRice from "../../assets/images/recipes/fried-rice.jpg";
import UsernamePicure from "../../assets/images/recipes/username-picture.png";
import LoveLogo from "../../assets/images/recipes/love-logo.png";
import axios from "axios";

const TitleStyle = styled.h1`
  font-weight: bold;
  margin-top: 30px;
  margin-left: 50px;
  border-bottom: 5px solid #ca2d3e;
`;

const RecipesImage = styled.img`
  margin: 50px;
  width: 1240px;
  height: 500px;
  object-fit: cover;
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
  margin-left: 50px;
  margin-right: 500px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const AccountPhoto = styled.img`
  margin-right: 20px;
  border-radius: 50%;
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

class RecipesContent extends React.Component {
  state = {
    reviews: []
  };
  componentDidMount() {
    console.log(this.props.recipe);
    axios
      .get(`https://api.one2eat.co/recipes/${this.props.recipe.data.id}/review`)
      .then(response => {
        console.log(response);
        this.setState({
          reviews: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  render() {
    return (
      <div>
        <TitleImageStyling>
          <TitleStyle>{this.props.recipe.data.name.toUpperCase()}</TitleStyle>
          <RecipesImage
            src={this.props.recipe.data.imageUrl}
            alt="recipe menu"
          />
          <Row>
            <Col>
              <ContentTitleStyle>Ingredients</ContentTitleStyle>
              {this.props.recipe.data.RecipeIngredients.map((data, index) => {
                return (
                  <RecipesIngredientsStyle key={index}>
                    <RecipesIngredientsTextStyle>
                      {data.content}
                    </RecipesIngredientsTextStyle>
                  </RecipesIngredientsStyle>
                );
              })}
            </Col>
            {/* <Col>
              <ContentTitleStyle>Available at</ContentTitleStyle>
              <MenuContext>
                <MenuImage src={FriedRice} alt="nasi-goreng" />
                <div>
                  <p>Nasi Goreng</p>
                  <MenuDescription>Nasi Goreng Mafia</MenuDescription>
                </div>
              </MenuContext>
            </Col> */}
            <Col>
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
                    <RecipesInstructionsTime>
                      {this.getRandomInt(5, 30)} mins
                    </RecipesInstructionsTime>
                  </Col>
                </OverrideColInstructions>
                <OverrideColInstructions>
                  <Col>
                    <RecipesInstructionsTimeText>
                      Cooking
                    </RecipesInstructionsTimeText>
                    <RecipesInstructionsTime>
                      {this.getRandomInt(0, 5, 1, 5)} hour
                    </RecipesInstructionsTime>
                  </Col>
                </OverrideColInstructions>
              </Row>
              {this.props.recipe.data.RecipeSteps.map((data, index) => {
                return (
                  <InstructionText key={index}>
                    {data.step + 1}. {data.content}
                  </InstructionText>
                );
              })}
            </Col>
          </Row>
          <ReviewTextStyling>
            <ReviewText>Review</ReviewText>
          </ReviewTextStyling>
          <ReviewButton>Write Review</ReviewButton>
          <AccountReviewStyle>
            <AccountPhoto
              src={"http://lorempixel.com/128/128/people/"}
              alt="account"
            />
            <div>
              <ReviewUsername>Gibran</ReviewUsername>
              <ReviewLikes>
                <ReviewLikesLogo src={LoveLogo} alt="like" />
                <p>219</p>
              </ReviewLikes>
              <p>Resep makanan ini sangat enak sekali</p>
            </div>
          </AccountReviewStyle>
        </TitleImageStyling>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe.recipe.data
  };
};

export default connect(mapStateToProps)(RecipesContent);
