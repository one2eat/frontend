import React from "react";
import styled from "@emotion/styled";
import { Formik, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";

import validate from "./validate-yup/validateYup";
import getValidationSchema from "./validate-yup/getValidationSchema";
import { openLogin } from "../Redux/actions/sign";
import { signupUser } from "../Redux/actions/signup";

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
`;

class SignUpForm extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <InsideRightContent>
        <WidthForm>
          <FormTitle>SIGN UP</FormTitle>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validate(getValidationSchema)}
            onSubmit={async (values, { setSubmitting }) => {
              await this.props.signupUser({
                name: values.name,
                email: values.email,
                password: values.password
              });
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form>
                <FormInput
                  type="name"
                  autoComplete="current-name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                />
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

                <FormButton
                  type="submit"
                  disabled={values.password.length > 0 ? false : true}
                >
                  Register
                </FormButton>
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
          <NoAccountLink onClick={this.props.openLogin}>
            Already have an account <b>SIGN IN Here!</b>
          </NoAccountLink>
        </WidthForm>
      </InsideRightContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.login.isLoading
  };
};

export default connect(
  mapStateToProps,
  { openLogin, signupUser }
)(SignUpForm);
