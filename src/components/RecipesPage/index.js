import React from "react";
import styled from "@emotion/styled";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../../assets/images/one2eat-logo.png";
import { RecipesContent } from "./recipes";

const FooterBackground = {
  backgroundImage: "linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%)"
};

const MyAccountText = {
  color: "white"
};

const FooterLogo = styled.img`
  height: 100%;
  width: 120px;
`;

const FooterSearch = styled.input`
  width: 450px;
  border-radius: 20px;
  margin-left: 100px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

export default class RecipesHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" style={FooterBackground}>
          <FooterLogo src={logo} alt="logo" />
          <FooterSearch
            type="search"
            placeholder="Search recipes, ingredients, places..."
          />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={MyAccountText}>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Sign Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <RecipesContent />
      </div>
    );
  }
}
