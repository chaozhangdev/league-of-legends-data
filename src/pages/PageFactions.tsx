import React, { useEffect } from "react";
import WebNav from "../components/WebNav";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function PageFactions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const factions = useSelector((state: any) => state.global.factions);
  console.log(factions);

  return (
    <>
      <WebNav />
      <Wrapper>
        {factions.map((el: any) => (
          <FactionCard key={el.name}>
            <p>{el.name}</p>
            <img src={el.image.uri} alt="faction img" />
          </FactionCard>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: black;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const FactionCard = styled.div`
  padding: 40px;
  margin: 40px;
  background-color: #131313;
  text-align: center;
  p {
    font-size: 20px;
    margin-bottom: 40px;
    color: #fff;
  }
  img {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    p {
      margin: 10px;
    }
  }
`;
