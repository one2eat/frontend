import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/images/one2eat-logo.png";

const FooterBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  min-width: 100vw;
  width: 100%;
  padding: 20px;
  background: linear-gradient(90deg, #2c3e50 29.37%, #4c9aaf 100%);
`;

const FooterCopyright = styled.div`
  color: #fff;
`;

const FooterLogo = styled.img`
  height: 25px;
`;

export const Footer = () => (
  <FooterBackground>
    <FooterLogo src={logo} alt="footer-logo" />
    <FooterCopyright>© Copyright 2019, ONE2EAT.CO</FooterCopyright>
  </FooterBackground>
);
