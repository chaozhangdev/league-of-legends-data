import React from "react";
import styled from "styled-components";

interface ChampionProps {
  name: string;
  data: any;
}

const getTheChampionImgUrl = (imgName: string) => {
  const baseImageUrl =
    "http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/";
  return baseImageUrl + imgName;
};

export default function Champion(props: ChampionProps) {
  return (
    <ChampionWrapper>
      <ChampionName>{props.name}</ChampionName>
      <ChampionImage
        src={getTheChampionImgUrl(props.data.image.full)}
        alt="img"
      />
      <ChampionTagsWrapper>
        {props.data.tags.map((el: string) => (
          <ChampionTag key={el}>{el}</ChampionTag>
        ))}
      </ChampionTagsWrapper>
    </ChampionWrapper>
  );
}

const ChampionWrapper = styled.div`
  padding: 10px;
  border: 1px solid #3f3e3ecf;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: white;
    p {
      color: black;
    }
  }
`;

const ChampionName = styled.p`
  font-size: 14px;
  color: white;
`;

const ChampionImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px 0px;
`;

const ChampionTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChampionTag = styled.p`
  font-size: 10px;
  background-color: grey;
  color: white;
  margin: 0px 5px;
  padding: 2px;
`;
