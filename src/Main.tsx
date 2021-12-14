import React from "react";
import styled from "styled-components";
import WebNav from "./components/WebNav";
import Champions from "./components/Champions";

export default function Main() {
  return (
    <Wrapper>
      <WebNav />
      <Champions />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`;
