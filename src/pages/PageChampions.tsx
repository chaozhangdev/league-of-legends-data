import React, { useEffect } from "react";
import { useState } from "react";
import WebNav from "../components/WebNav";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrentChampion } from "../redux/globalSlice";
interface championDataProps {
  imgSrc: string;
  name: string;
  title: string;
  version: string;
  tags: Array<string>;
  info: {
    attack: string;
    defense: string;
    magic: string;
    difficulty: string;
  };
  stats: {
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    armor: number;
    armorperlevel: number;
    movespeed: number;
    spellblock: number;
    spellblockperlevel: number;
  };
}

export default function PageChampions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const currentChampion = useSelector(
    (state: any) => state.global.currentChampion
  );
  const allChampionsData = useSelector(
    (state: any) => state.global.allChampionsData
  );
  const allChampionsName = useSelector(
    (state: any) => state.global.allChampionsName
  );
  const [currentChampionData, setCurrentChampionData] =
    useState<championDataProps>();

  const handleSettingCurrentChampionData = () => {
    let data = allChampionsData[currentChampion];
    let dataPreSaved = {
      imgSrc:
        "http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" +
        data.image.full,
      name: data.name,
      title: data.title,
      version: data.version,
      tags: data.tags,
      info: {
        attack: data.info.attack,
        defense: data.info.defense,
        magic: data.info.magic,
        difficulty: data.info.difficulty,
      },
      stats: {
        hp: data.stats.hp,
        hpperlevel: data.stats.hpperlevel,
        hpregen: data.stats.hpregen,
        hpregenperlevel: data.stats.hpregenperlevel,
        mp: data.stats.mp,
        mpperlevel: data.stats.mpperlevel,
        mpregen: data.stats.mpregen,
        mpregenperlevel: data.stats.mpregenperlevel,
        attackdamage: data.stats.attackdamage,
        attackdamageperlevel: data.stats.attackdamageperlevel,
        attackrange: data.stats.attackrange,
        attackspeed: data.stats.attackspeed,
        attackspeedperlevel: data.stats.attackspeedperlevel,
        crit: data.stats.crit,
        critperlevel: data.stats.critperlevel,
        armor: data.stats.armor,
        armorperlevel: data.stats.armorperlevel,
        movespeed: data.stats.movespeed,
        spellblock: data.stats.spellblock,
        spellblockperlevel: data.stats.spellblockperlevel,
      },
    };
    setCurrentChampionData(dataPreSaved);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleSettingCurrentChampionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WebNav />
      {currentChampionData !== undefined && (
        <ChampionWrapper>
          <ChampionIntro>
            <div>
              <Text style={{ fontSize: "24px", fontWeight: 700 }}>
                {currentChampionData.name}
              </Text>
              <Text> {currentChampionData.title}</Text>
              <Avatar src={currentChampionData.imgSrc} alt="champion avatar" />
              <TagsWrapper>
                {currentChampionData.tags.map((el: string) => (
                  <Tags key={el}>{el}</Tags>
                ))}
              </TagsWrapper>
            </div>
            <ChampionInfo>
              <Text>Attack: {currentChampionData.info.attack}</Text>
              <Text>Defense: {currentChampionData.info.defense}</Text>
              <Text>Difficulty: {currentChampionData.info.difficulty}</Text>
              <Text>Magic: {currentChampionData.info.magic}</Text>
            </ChampionInfo>
          </ChampionIntro>
          <ChampionData>
            <Text>HP: {currentChampionData.stats.hp}</Text>
            <Text>HP per Level: {currentChampionData.stats.hpperlevel}</Text>
            <Text>HP Region: {currentChampionData.stats.hpregen}</Text>
            <Text>
              HP Region per Level: {currentChampionData.stats.hpregenperlevel}
            </Text>
            <Text>Mana: {currentChampionData.stats.mp}</Text>
            <Text>Mana per Level: {currentChampionData.stats.mpperlevel}</Text>
            <Text>Mana Region: {currentChampionData.stats.mpregen}</Text>
            <Text>
              Mana Region Per Level: {currentChampionData.stats.mpregenperlevel}
            </Text>
            <Text>Attack: {currentChampionData.stats.attackdamage}</Text>
            <Text>
              Attack per Level: {currentChampionData.stats.attackdamageperlevel}
            </Text>
            <Text>Attack Range: {currentChampionData.stats.attackrange}</Text>
            <Text>Attack Speed: {currentChampionData.stats.attackspeed}</Text>
            <Text>
              Attack Speed per Level:
              {currentChampionData.stats.attackspeedperlevel}
            </Text>
            <Text>Critical: {currentChampionData.stats.crit}</Text>
            <Text>
              Critical per Level: {currentChampionData.stats.critperlevel}
            </Text>
            <Text>Armor: {currentChampionData.stats.armor}</Text>
            <Text>
              Armor per Level: {currentChampionData.stats.armorperlevel}
            </Text>
            <Text>Move Speed: {currentChampionData.stats.movespeed}</Text>
            <Text>Spell Block: {currentChampionData.stats.spellblock}</Text>
            <Text>
              Spell Block per Level:{" "}
              {currentChampionData.stats.spellblockperlevel}
            </Text>
            <Text>Version: {currentChampionData.version}</Text>
          </ChampionData>
        </ChampionWrapper>
      )}
      <ChampionPool>
        {allChampionsName.map((el: string) => (
          <ChampionBar
            key={el}
            onClick={() => {
              dispatch(setCurrentChampion(el));
              handleSettingCurrentChampionData();
              window.location.reload();
              window.scrollTo(0, 0);
            }}
          >
            <img
              width={30}
              height={30}
              src={
                "http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" +
                allChampionsData[el].image.full
              }
              alt="champion icon"
            />
            <p>{el}</p>
          </ChampionBar>
        ))}
      </ChampionPool>
    </>
  );
}

const ChampionPool = styled.div`
  background-color: #181818;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ChampionBar = styled.div`
  padding: 5px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #121212;
  p {
    color: #fff;
    margin: 5px;
  }
  :hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: #fff;
    p {
      color: #000;
    }
  }
`;

const Text = styled.p`
  color: #fff;
  margin: 10px;
`;

const ChampionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid black;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChampionIntro = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #d18484;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Avatar = styled.img`
  margin: 10px;
  width: 100px;
  height: 100px;
`;

const ChampionInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TagsWrapper = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Tags = styled.p`
  color: #fff;
  display: inline-block;
  border: 1px dashed #fff;
  margin-right: 10px;
  font-size: 12px;
  padding: 5px;
`;

const ChampionData = styled.div`
  width: 70%;
  background-color: #007175;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
