import React from "react";
import styled from "styled-components";

export default function LoadingGif() {
  return (
    <Wrapper>
      <img
        src="https://media2.giphy.com/media/uHKpmhC7ADBA1EFSl6/giphy.gif?cid=ecf05e474prbnyslx855q61glt20acv9qbek4tslwzlkv0m6&rid=giphy.gif&ct=ts"
        alt="loading gif"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
