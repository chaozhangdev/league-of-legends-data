import React, { useEffect } from "react";
import styled from "styled-components";
import WebNav from "../components/WebNav";
import Champions from "../components/Champions";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
