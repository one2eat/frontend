import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "reactstrap";

import { RestaurantsContent } from "./restaurants";
import { search } from "../Redux/actions/searchAction";
import { getMenuToSearch, clearMenu } from "../Redux/actions/getMenuToSearch";
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
  z-index: 1;
`;

const FooterSearchWrapper = styled.div`
  position: relative;
`;

const SuggestContent = styled.div`
  span:first-of-type {
    display: block;
    height: 20px;
    font-weight: bold;
    font-size: 14px;
  }
`;

const RecipeSpan = styled.span`
  background-image: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
  font-size: 10px;
  color: #fff;
  padding: 1px 15px;
  border-radius: 20px;
  margin-right: 10px;
  font-weight: bold;
`;

const RestaurantSpan = styled.span`
  background-image: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
  font-size: 10px;
  color: #fff;
  padding: 1px 15px;
  border-radius: 20px;
  margin-right: 10px;
  font-weight: bold;
`;

class RestaurantsHeader extends React.Component {
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

  handleChange = async e => {
    await this.setState({ searchText: e.target.value });

    if (this.state.searchText.length > 2) {
      await this.props.getMenuToSearch(this.state.searchText);
    } else {
      this.props.clearMenu();
    }
  };

  render() {
    const { suggestions, profile, isSearching } = this.props;
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
                  {this.state.searchText.length > 2 && (
                    <ul>
                      {isSearching ? (
                        <div>
                          <Spinner type="grow" color="primary" />
                          <Spinner type="grow" color="success" />
                          <Spinner type="grow" color="danger" />
                        </div>
                      ) : (
                        suggestions.map((suggest, index) => (
                          <li key={`menu-${index}`}>
                            <SuggestContent>
                              <span>{suggest.name}</span>
                              {suggest.type === "recipe" ? (
                                <RecipeSpan>
                                  {suggest.type.toUpperCase()}
                                </RecipeSpan>
                              ) : (
                                <RestaurantSpan>
                                  {suggest.type.toUpperCase()}
                                </RestaurantSpan>
                              )}
                              {[...Array(suggest.star).keys()].map(
                                (_, index) => (
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    color="gold"
                                    key={`star-gold-${index}`}
                                  />
                                )
                              )}
                              {[...Array(4 - suggest.star).keys()].map(
                                (_, index) => (
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    color="#ccc"
                                    key={`star-gray-${index}`}
                                  />
                                )
                              )}
                            </SuggestContent>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </SuggestWrapper>
              </HeaderNav>
            </HeaderNavBackground>
            <RestaurantsContent />
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
    suggestions: state.searchMenu.suggestions.data,
    profile: state.profile,
    isSearching: state.searchMenu.isSearching
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search, getMenuToSearch, clearMenu }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsHeader);
