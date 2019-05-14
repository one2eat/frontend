import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
import { RestaurantsContent } from "./restaurants";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch } from "../Redux/actions/getMenuToSearch";

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
  padding: 0 20px;
  border-bottom-left-radius: ${props => (props.value.length > 0 ? 0 : "")};
  border-bottom-right-radius: ${props => (props.value.length > 0 ? 0 : "")};
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
`;

const SuggestWrapper = styled.div`
  &:before {
    content: "";
    display: block;
    border-top: 1px solid #757575;
    width: 410px;
    position: absolute;
    left: 17px;
    top: 1px;
    opacity: 0.5;
}
  }
  position: absolute;
  border-radius: 0 0 28px 28px;
  background-color: #fff;
  width: 450px;
  height: auto;
  top: 40px;
  margin-left: 98px;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  z-index: 1;
  ul {
    padding: 20px;
    list-style: none;
    li {
      text-align: left;
    }
  }

  @media (max-width: 1440px) {
    left: 138px;
  }
`;

const FooterSearchWrapper = styled.div`
  position: relative;
`;

class RestaurantsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchText: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = event => {
    this.setState(
      { searchText: event.target.value },
      this.props.getMenuToSearch(this.state.searchText)
    );
  };

  render() {
    const { suggestions } = this.props;
    return (
      <div>
        <Navbar expand="md" style={FooterBackground}>
          <FooterLogo src={logo} alt="logo" />
          <FooterSearchWrapper>
            <FooterSearch
              type="search"
              placeholder="Search recipes, ingredients, places..."
              value={this.state.searchText}
              onFocus={() => {}}
              onBlur={() => {}}
              onChange={this.handleChange}
            />
          </FooterSearchWrapper>
          <SuggestWrapper>
            {suggestions.map((suggest, index) => (
              <ul key={index}>
                <li>{suggest.name}</li>
              </ul>
            ))}
          </SuggestWrapper>
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
        <RestaurantsContent />
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
)(RestaurantsHeader);
