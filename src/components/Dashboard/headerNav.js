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
import { logout } from "../Redux/actions/logout";

import logo from "../../assets/images/one2eat-logo.png";

const FooterLogo = styled.img`
  height: 100%;
  width: 120px;
`;

const MyAccountText = {
  color: "#fff",
  fontWeight: "bold"
};

class HeaderNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  componentDidMount(){
  console.log(this.props);
  
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <FooterLogo src={logo} alt="logo" />
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

export default connect(
  null,
  { logout }
)(HeaderNav);
