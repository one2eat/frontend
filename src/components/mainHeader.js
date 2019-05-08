import React from "react";
import styled from "@emotion/styled";

const TopHeader = styled.div`
  background: linear-gradient(256.23deg, #cb2d3e 22.63%, #ef473a 68.74%);
`;

export default function MainHeader(props) {
  return <TopHeader> {props.children}</TopHeader>;
}
