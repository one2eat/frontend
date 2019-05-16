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
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./Redux/actions/logout";

import logo from "../assets/images/one2eat-logo.png";

const HeaderLogo = styled.img`
  height: 100%;
  width: 120px;
`;

const MyAccountText = {
  color: "#fff",
  fontWeight: "bold"
};

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          {profile.isAuthenticated && (
            <Link to="/dashboard">
              <HeaderLogo src={logo} alt="logo" />
            </Link>
          )}
          {this.props.children}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={MyAccountText}>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="/recipes">
                    Recipes
                  </DropdownItem>
                  <DropdownItem tag="a" href="/restaurants">
                    Restaurants
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.logout}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(HeaderNav);
