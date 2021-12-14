import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Champion from "./Champion";
import LoadingGif from "./LoadingGif";

export default function Champions() {
  localStorage.setItem("isLoading", "no");

  const [championData, setChampionData] = useState<any>({});
  const [championArr, setChampionArr] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://perodriguezl-league-of-legends-v1.p.rapidapi.com/lol/champions",
      params: { lang: "en_US" },
      headers: {
        "x-rapidapi-host": "perodriguezl-league-of-legends-v1.p.rapidapi.com",
        "x-rapidapi-key": "c7af6985d0msh9be02af5fe1bfd7p161ed9jsn75f694394e37",
      },
    })
      .then((res: any) => {
        setChampionData(res.data.data);
        setChampionArr(Object.keys(res.data.data));
        setIsLoading(false);
        console.log(res.data.data);
      })
      .catch((err: any) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return isLoading ? (
    <LoadingGif />
  ) : (
    <ChampionWrapper>
      {championArr.map((el: string) => (
        <div key={el}>
          <Champion name={el} data={championData[el]} />
        </div>
      ))}
    </ChampionWrapper>
  );
}

const ChampionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
