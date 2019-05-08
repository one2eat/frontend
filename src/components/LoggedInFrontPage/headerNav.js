import React from "react";
import styled from "@emotion/styled";

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 100px;
  background: linear-gradient(240.15deg, #cb2d3e 22.63%, #ef473a 68.74%);
  align-items: center;
`;

export default function HeaderNav(props) {
  return <NavHeader>{props.children}</NavHeader>;
}
