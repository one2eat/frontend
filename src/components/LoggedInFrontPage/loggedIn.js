import React, { Component } from "react";
import styled from "@emotion/styled";
import HeaderNav from "./headerNav";
import MainHeader from "../mainHeader";
import FriedRice from "../../assets/images/fried-rice.jpg";

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
  padding-left: 24px;
  font-size: 20px;

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
export default class LoggedInFrontPage extends Component {
  render() {
    return (
      <div>
        <MainHeader>
          <HeaderNav />
          <SearchBar>
            <SearchBarTitle>
              Search thousands of recipes, restaurant by typing below
            </SearchBarTitle>
            <SearchBarInput
              type="text"
              placeholder="Enter your ingredients, recipes, food name, or places"
            />
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
