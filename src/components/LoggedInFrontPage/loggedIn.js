import React, { Component } from "react";
import styled from "@emotion/styled";
import HeaderNav from "./headerNav";
import MainHeader from "../mainHeader";

const SearchBar = styled.div`
  height: 615px;
  line-height: 4;
  padding: 100px;
  text-align: center;
`

const SearchBarTitle = styled.div`
  font-size: 48px;
  color: #fff;
  font-weight: bold;
`

const SearchBarInput = styled.input`
  border: none;
  width: 950px;
  height: 80px;
  border-radius: 50px;
  padding-left: 24px;
  font-size: 20px;

  &:focus{
    outline: none;
  }
`

export default class LoggedInFrontPage extends Component {
  render() {
    return (
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
    );
  }
}
