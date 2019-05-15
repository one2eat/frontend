import React, { Component } from "react";
import styled from "@emotion/styled";
import { Col } from "reactstrap";

import LogInForm from "./logInForm";
import logo from "../../assets/images/one2eat-logo.png";

const SignInBackgroundPage = styled.div`
  background: linear-gradient(270deg, #cb2d3e 30.9%, #ef473a 77.03%);
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeLogo = styled.img`
  width: 188px;
  height: 40px;
  color: white;
  margin-bottom: 30px;
`;

const LeftContent = styled.p`
  width: 330px;
  height: 130px;
  font-size: 22px;
  line-height: 30px;
  text-align: justify;
  margin: 0;
  color: #fff;
`;

const InsideLeftContent = styled.div`
  height: 450px;
  border-right: 2px solid #fff;
  margin-top: 135px;
  padding-left: 50px;
`;

const VerticalCenter = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Footer = styled.div`
  margin-left: 50px;
  color: #fff;
  font-size: 16px;
  height: 50px;
`;

const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  min-height: calc(720px - 50px);
`;

export default class SignIn extends Component {
  render() {
    return (
      <SignInBackgroundPage>
        <RowFlex>
          <Col>
            <InsideLeftContent>
              <VerticalCenter>
                <HomeLogo src={logo} alt="logo" />
                <LeftContent>
                  Get Started with ONE2EAT to find inspiration, restaurant and
                  many more by just signin up.
                </LeftContent>
              </VerticalCenter>
            </InsideLeftContent>
          </Col>
          <Col>
            <LogInForm />
          </Col>
        </RowFlex>
        <Footer>© Copyright 2019, ONE2EAT.CO</Footer>
      </SignInBackgroundPage>
    );
  }
}
