import React from "react";
import styled from "styled-components";
import Champion from "./Champion";
import LoadingGif from "./LoadingGif";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentChampion,
  setCurrentChampionDetails,
} from "../redux/globalSlice";
import { useNavigate } from "react-router-dom";

export default function Champions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.global.isLoading);
  const allChampionsData = useSelector(
    (state: any) => state.global.allChampionsData
  );
  const allChampionsName = useSelector(
    (state: any) => state.global.allChampionsName
  );

  return isLoading ? (
    <LoadingGif />
  ) : (
    <ChampionWrapper>
      {allChampionsName.map((el: string) => (
        <div
          key={el}
          onClick={() => {
            dispatch(setCurrentChampion(el));
            dispatch(setCurrentChampionDetails(allChampionsData[el]));
            navigate("/champions");
          }}
        >
          <Champion name={el} data={allChampionsData[el]} />
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
