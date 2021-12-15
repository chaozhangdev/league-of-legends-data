import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageChampions from "./pages/PageChampions";
import PageItems from "./pages/PageItems";
import PageSummoners from "./pages/PageSummoners";
import PageFactions from "./pages/PageFactions";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setLoadingStatus,
  setAllChampionsName,
  setAllChampionsData,
} from "./redux/globalSlice";

export default function App() {
  const dispatch = useDispatch();

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
      dispatch(setLoadingStatus(false));
      console.log(res);
      dispatch(setAllChampionsData(res.data.data));
      dispatch(setAllChampionsName(Object.keys(res.data.data)));
    })
    .catch((err: any) => {
      console.log(err);
    });

  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/champions" element={<PageChampions />} />
      <Route path="/items" element={<PageItems />} />
      <Route path="/summoners" element={<PageSummoners />} />
      <Route path="/factions" element={<PageFactions />} />
    </Routes>
  );
}
