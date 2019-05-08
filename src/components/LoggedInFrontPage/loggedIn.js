import React, { Component } from "react";
import styled from "@emotion/styled";
import HeaderNav from "./headerNav";
import Logo from "../../assets/images/one2eat-logo.png";

const MyAccount = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  background: linear-gradient(240.15deg, #cb2d3e 22.63%, #ef473a 68.74%);
  height: 615px;
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
`;

export default class LoggedInFrontPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderNav>
          <img src={Logo} alt="logo one2eat" width="193" height="44" />
          <MyAccount>My Account</MyAccount>
        </HeaderNav>
        <SearchBar>
          <SearchBarTitle>
            Search thousands of recipes, restaurant by typing below
          </SearchBarTitle>
          <SearchBarInput
            type="text"
            placeholder="Enter your ingredients, recipes, food name, or places"
          />
        </SearchBar>
      </div>
    );
  }
}
