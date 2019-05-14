import React, { Component } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderNav from "./headerNav";
import MainHeader from "../mainHeader";
import FriedRice from "../../assets/images/recipes/fried-rice.jpg";
import SearchLogo from "../../assets/images/search.png";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch } from "../Redux/actions/getMenuToSearch";

const SearchBar = styled.div`
  height: 615px;
  line-height: 4;
  padding: 100px;
  text-align: center;
`;

const SearchBarTitle = styled.div`
  font-size: 48px;
  color: #fff;
  font-weight: bold;
`;

const SearchBarInput = styled.input`
  border: none;
  width: 950px;
  height: 80px;
  border-radius: 50px;
  padding-left: 40px;
  font-size: 20px;
  border-bottom-left-radius: ${props => (props.value.length > 0 ? 0 : "")};
  border-bottom-right-radius: ${props => (props.value.length ? 0 : "")};

  &:focus {
    outline: none;
  }
`;

const SearchResult = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 100px;
`;

const SearchTitle = styled.div`
  border-bottom: 5px solid #ca2d3e;
  margin-bottom: 50px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 200px;
    top: 22px;
    opacity: 0.5;
  }
  @media (max-width: 1440px) {
    right: 180px;
  }
`;

const SuggestWrapper = styled.div`
  &:before {
    content: "";
    display: block;
    border-top: 1px solid #757575;
    width: 870px;
    position: absolute;
    left: 38px;
  }
  position: absolute;
  border-radius: 0 0 50px 50px;
  background-color: #fff;
  width: 950px;
  left: 159px;
  ul {
    list-style: none;
    li {
      text-align: left;
    }
  }

  @media (max-width: 1440px) {
    left: 138px;
  }
`;

class LoggedInFrontPage extends Component {
  state = {
    searchText: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = async e => {
    this.setState({
      searchText: e.target.value
    });
    try {
      this.props.getMenuToSearch(this.state.searchText);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { suggestions } = this.props;
    return (
      <div>
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
                {suggestions.map((suggest, index) => (
                  <ul key={index}>
                    <li>{suggest.name}</li>
                  </ul>
                ))}
              </SuggestWrapper>
            </SearchBarWrapper>
          </SearchBar>
        </MainHeader>
        <div>
          <SearchResult>
            <SearchTitle>
              <h1>Popular Recipes</h1>
            </SearchTitle>
            <div>
              <img src={FriedRice} alt="the menu" />
            </div>
          </SearchResult>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    suggestions: state.loggedInReducer.suggestions.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search, getMenuToSearch }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInFrontPage);
