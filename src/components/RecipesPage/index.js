import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "@emotion/styled";
import { RecipesContent } from "./recipes";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch } from "../Redux/actions/getMenuToSearch";
import HeaderNav from "../headerNav";

const HeaderNavBackground = styled.div`
  background-image: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
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
    width: 415px;
    position: absolute;
    left: 17px;
    opacity: 0.28;
  }

  position: absolute;
  border-radius: 0 0 28px 28px;
  background-color: #fff;
  width: 450px;
  height: auto;
  top: 40px;
  left: 236px;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  ul {
    padding: 20px;
    list-style: none;
    li {
      text-align: left;
    }
  }
`;

const FooterSearchWrapper = styled.div`
  position: relative;
`;

class RecipesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchText: ""
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleChange = event => {
    this.setState(
      { searchText: event.target.value },
      this.props.getMenuToSearch(this.state.searchText)
    );
  };

  render() {
    const { suggestions, profile } = this.props;
    return (
      <div>
        {profile.isAuthenticated ? (
          <div>
            <HeaderNavBackground>
              <HeaderNav>
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
              </HeaderNav>
            </HeaderNavBackground>
            <RecipesContent />
          </div>
        ) : (
          <div>Please, login first</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.dashboard.suggestions.data,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search, getMenuToSearch }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesHeader);
