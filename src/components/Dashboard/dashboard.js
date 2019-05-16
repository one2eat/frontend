import React, { Component } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "reactstrap";

import { Footer } from "../Footer";
import HeaderNav from "./headerNav";
import MainHeader from "../mainHeader";
import RestaurantRecommendationCard from "../RestaurantRecommendationCard";

import SearchLogo from "../../assets/images/search.png";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch } from "../Redux/actions/getMenuToSearch";

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
`;

const Spacer = styled.div`
  margin: 2rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

class Dashboard extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState(
      { searchText: e.target.value },
      this.props.getMenuToSearch(this.state.searchText)
    );
  };

  render() {
    const { suggestions } = this.props;
    return (
      <div>
        <ToastContainer />
        <MainHeader>
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
                {suggestions.length > 0 && (
                  <ul>
                    {suggestions.map((suggest, index) => (
                      <li key="index">{suggest.name}</li>
                    ))}
                  </ul>
                )}
              </SuggestWrapper>
            </SearchBarWrapper>
          </SearchBar>
        </MainHeader>

        <Container>
          <Spacer />
          <Title>
            Popular Restaurant around <b>Kemang</b>
          </Title>
          <Spacer />

          <Row>
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
          </Row>
        </Container>
        <Spacer />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.dashboard.suggestions.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search, getMenuToSearch }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
