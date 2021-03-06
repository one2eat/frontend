import React from "react";
import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";

import validate from "./validate-yup/validateYup";
import getValidationSchema from "./validate-yup/getValidationSchema";
import { loginUser } from "../Redux/actions/logIn";
import { openSignup } from "../Redux/actions/sign";

const FormTitle = styled.h1`
  color: #fff;
  margin-bottom: 24px;
`;

const FormInput = styled.input`
  width: 349px;
  height: 57px;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 28px;
  margin-bottom: 24px;

  ::placeholder {
    font-weight: bold;
    color: #ec453b;
  }

  &:focus {
    outline: none;
  }
`;

const FormButton = styled.button`
  width: 349px;
  height: 53px;
  background: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
  box-shadow: 0px 4px 10px rgba(76, 161, 175, 0.5);
  border-radius: 10px;
  color: #fff;
  border: none;

  &:focus {
    outline: none;
  }
`;

const InsideRightContent = styled.div`
  /* padding-left: 110px; */
  height: 450px;
  margin-top: 135px;
`;

const WidthForm = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const NoAccountLink = styled.div`
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin: 24px 0;
  // font-size: 20px;
  // font-weight: bold;
  &:hover b {
    color: #d5cdcd;
  }
`;

class LogInForm extends React.Component {
  render() {
    return (
      <InsideRightContent>
        <ToastContainer />
        <WidthForm>
          <FormTitle>SIGN IN</FormTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validate(getValidationSchema)}
            onSubmit={async (values, { setSubmitting }) => {
              await this.props.loginUser({
                email: values.email,
                password: values.password
              });
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form>
                <FormInput
                  type="email"
                  autoComplete="current-email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <ErrorMessage name="email" component="span" />

                <FormInput
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <ErrorMessage name="password" component="span" />

                <FormButton type="submit">Sign In</FormButton>
              </Form>
            )}
          </Formik>
          <div className="mb-4" />
          {/* <OrSignInWith>Or sign in with</OrSignInWith> */}
          {/* <Row>
            <Col>
              <SignWith>
                <img src={GoogleLogo} alt="google" width="35px" />
                <span> Google</span>
              </SignWith>
            </Col>
            <Col>
              <SignWith>
                <img src={FacebookLogo} alt="facebook" width="35px" />
                <span>Facebook</span>
              </SignWith>
            </Col>
          </Row> */}
          <NoAccountLink onClick={this.props.openSignup}>
            Don't have an account yet? <b>SIGN UP Here!</b>
          </NoAccountLink>
        </WidthForm>
      </InsideRightContent>
    );
  }
}

export default connect(
  null,
  { openSignup, loginUser }
)(LogInForm);
