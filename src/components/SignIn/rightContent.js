import React from "react";
import styled from "@emotion/styled";
import { Formik, Form, ErrorMessage } from "formik";
import { Row, Col } from "reactstrap";

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
`;

const FormButton = styled.button`
  width: 349px;
  height: 53px;
  background: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
  box-shadow: 0px 4px 10px rgba(76, 161, 175, 0.5);
  border-radius: 10px;
  color: #fff;
  border: none;
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

const OrSignInWith = styled.div`
  color: #fff;
  text-align: center;
  margin: 24px 0;
  font-size: 20px;
  font-weight: bold;
`;

const SignWith = styled.div`
  height: 50px;
  background: #fff;
  border-radius: 10px;
  padding: 10px 15px;

  span {
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
  }
`;

const SignInForm = () => (
  <InsideRightContent>
    <WidthForm>
      <FormTitle>SIGN IN</FormTitle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <FormInput
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
            />
            <ErrorMessage name="email" component="div" />

            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <ErrorMessage name="password" component="div" />

            <FormButton type="submit" disabled={isSubmitting}>
              Sign In
            </FormButton>
          </Form>
        )}
      </Formik>
      <OrSignInWith>Or sign in with</OrSignInWith>
      <Row>
        <Col>
          <SignWith>
            <img
              src={require("../../assets/images/signIn/google.png")}
              alt="google"
              width="35px"
            />
            <span> Google</span>
          </SignWith>
        </Col>
        <Col>
          <SignWith>
            <img
              src={require("../../assets/images/signIn/facebook.png")}
              alt="facebook"
              width="35px"
            />
            <span>Facebook</span>
          </SignWith>
        </Col>
      </Row>
    </WidthForm>
  </InsideRightContent>
);

export default SignInForm;
