import React, { Component } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer } from "react-toastify";
import { Container, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

import { Footer } from "../Footer";
import HeaderNav from "../headerNav";
// import RestaurantRecommendationCard from "../RestaurantRecommendationCard";
import SearchLogo from "../../assets/images/search.png";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch, clearMenu } from "../Redux/actions/getMenuToSearch";
import { getRecipe } from "../Redux/actions/recipes";
import {getRestaurant} from '../Redux/actions/restaurant'
import RecommendationRestaurant from "./recommendationRestaurant";

const BackgroundHeaderDashboard = styled.div`
  background-image: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
`;

const SearchBar = styled.div`
  min-height: 100vh;
  height: 100%;
  line-height: 4;
  padding: 100px;
  text-align: center;
`;

const SearchBarTitle = styled.div`
  font-size: 2.5rem;
  color: #fff;
  font-weight: bold;
  position: relative;
`;

const SearchBarInput = styled.input`
  border: none;
  width: 100%;

  height: 80px;
  border-radius: 50px;
  padding-left: 40px;
  font-size: 20px;
  border-bottom-left-radius: ${props => (props.value.length > 0 ? 0 : "")};
  border-bottom-right-radius: ${props => (props.value.length > 0 ? 0 : "")};

  &:focus {
    outline: none;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
`;

const SearchBarWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: auto;

  img {
    position: absolute;
    right: 20px;
    top: 22px;
    opacity: 0.5;
    /* width: 20px; */
  }
`;

const SuggestWrapper = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 0 0 50px 50px;
  width: 100%;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  ul {
    list-style: none;
    li {
      text-align: left;
    }
  }
  z-index: 1;
`;

const SuggestContent = styled.div`
  span:first-of-type {
    display: block;
    height: 30px;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Spacer = styled.div`
  margin: 2rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const RecipeSpan = styled.span`
  background-image: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
  font-size: 12px;
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  margin-right: 10px;
  font-weight: bold;
`;

const RestaurantSpan = styled.span`
  background-image: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
  font-size: 12px;
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  margin-right: 10px;
  font-weight: bold;
`;

class Dashboard extends Component {
  state = {
    searchText: ""
  };

  handleChange = async e => {
    await this.setState({ searchText: e.target.value });

    if (this.state.searchText.length > 2) {
      await this.props.getMenuToSearch(this.state.searchText);
    } else {
      this.props.clearMenu();
    }
  };

  handleLink = async data => {
    if (data.type === "restaurant") {
      await this.props.getRestaurant(data.id);
    }

    if (data.type === "recipe") {
      await this.props.getRecipe(data.id);
    }
  };

  render() {
    const { suggestions, isSearching } = this.props;
    return (
      <div>
        <ToastContainer />
        <BackgroundHeaderDashboard>
          <HeaderNav />
          <SearchBar>
            <SearchBarTitle>
              Search thousands of recipes, restaurant by typing below
            </SearchBarTitle>
            <SearchBarWrapper>
              <SearchBarInput
                type="text"
                placeholder="Enter your ingredients, recipes, food name, or places"
                value={this.state.searchText}
                onFocus={() => {}}
                onBlur={() => {}}
                onChange={this.handleChange}
              />
              <img src={SearchLogo} alt="search" />
              <SuggestWrapper>
                {this.state.searchText.length > 2 && (
                  <ul>
                    {isSearching ? (
                      <div>
                        <Spinner type="grow" color="primary" />
                        <Spinner type="grow" color="success" />
                        <Spinner type="grow" color="danger" />
                      </div>
                    ) : (
                      suggestions.map((suggest, index) => (
                        <li
                          key={`menu-${index}`}
                          onClick={() => this.handleLink(suggest)}
                          style={{cursor: "pointer"}}
                        >
                          <SuggestContent>
                            <span>{suggest.name}</span>
                            {suggest.type === "recipe" ? (
                              <RecipeSpan>
                                {suggest.type.toUpperCase()}
                              </RecipeSpan>
                            ) : (
                              <RestaurantSpan>
                                {suggest.type.toUpperCase()}
                              </RestaurantSpan>
                            )}
                            {[...Array(parseInt(suggest.star)).keys()].map((_, index) => (
                              <FontAwesomeIcon
                                icon={faStar}
                                color="gold"
                                key={`star-gold-${index}`}
                              />
                            ))}
                            {[...Array(5 - suggest.star).keys()].map(
                              (_, index) => (
                                <FontAwesomeIcon
                                  icon={faStar}
                                  color="#ccc"
                                  key={`star-gray-${index}`}
                                />
                              )
                            )}
                          </SuggestContent>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </SuggestWrapper>
            </SearchBarWrapper>
          </SearchBar>
        </BackgroundHeaderDashboard>
        <Container>
          <Spacer />
          <Title>
            Popular Restaurant around <b>Kemang</b>
          </Title>
          <Spacer />

          {/* <Row>
            <Col>
              <RestaurantRecommendationCard
                image="https://anakjajan.files.wordpress.com/2018/06/cover3.jpg?w=672&h=372&crop=1"
                name="Lawless"
                star={4}
              />
            </Col>
            <Col>
              <RestaurantRecommendationCard
                image="https://anakjajan.files.wordpress.com/2018/06/cover3.jpg?w=672&h=372&crop=1"
                name="Lawless"
                star={3}
              />
            </Col>
            <Col>
              <RestaurantRecommendationCard
                image="https://anakjajan.files.wordpress.com/2018/06/cover3.jpg?w=672&h=372&crop=1"
                name="Lawless"
                star={5}
              />
            </Col>
          </Row> */}
        </Container>
        <Spacer />

        <RecommendationRestaurant />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    suggestions: state.searchMenu.suggestions.data,
    isSearching: state.searchMenu.isSearching
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { search, getMenuToSearch, clearMenu, getRecipe, getRestaurant },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
