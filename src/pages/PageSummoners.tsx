import React, { useEffect } from "react";
import WebNav from "../components/WebNav";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function PageSummoners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const summoners = useSelector((state: any) => state.global.summoners);
  const summonersAllKeys = Object.keys(summoners);

  // console.log(summoners);

  return (
    <>
      <WebNav />
      <Wrapper>
        {summonersAllKeys.map((el: string) => (
          <SummonerCard key={el}>
            <p>{summoners[el].id.split("Summoner")[1]}</p>
            <p>Cooldown: {summoners[el].cooldown[0]}</p>
            <p>Description: {summoners[el].description}</p>
          </SummonerCard>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SummonerCard = styled.div`
  border: 1px solid grey;
  width: 300px;
  padding: 20px;
  margin: 10px;
  p {
    color: #fff;
    margin: 10px;
  }
`;
