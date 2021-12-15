import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  setItems,
  setFactions,
  setSummoners,
} from "./redux/globalSlice";

export default function App() {
  const dispatch = useDispatch();

  // lol champions
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
      dispatch(setAllChampionsData(res.data.data));
      dispatch(setAllChampionsName(Object.keys(res.data.data)));
    })
    .catch((err: any) => {
      console.log(err);
    });

  // lol items
  axios({
    method: "GET",
    url: "https://perodriguezl-league-of-legends-v1.p.rapidapi.com/lol/items",
    params: { lang: "en_US" },
    headers: {
      "x-rapidapi-host": "perodriguezl-league-of-legends-v1.p.rapidapi.com",
      "x-rapidapi-key": "c7af6985d0msh9be02af5fe1bfd7p161ed9jsn75f694394e37",
    },
  })
    .then((res: any) => {
      dispatch(setItems(res.data.data));
    })
    .catch((err: any) => {
      console.log(err);
    });

  // lol factions
  axios({
    method: "GET",
    url: "https://perodriguezl-league-of-legends-v1.p.rapidapi.com/lol/factions",
    headers: {
      "x-rapidapi-host": "perodriguezl-league-of-legends-v1.p.rapidapi.com",
      "x-rapidapi-key": "c7af6985d0msh9be02af5fe1bfd7p161ed9jsn75f694394e37",
    },
  })
    .then((res: any) => {
      dispatch(setFactions(res.data.factions));
    })
    .catch((err: any) => {
      console.log(err);
    });

  // lol summoners
  axios({
    method: "GET",
    url: "https://perodriguezl-league-of-legends-v1.p.rapidapi.com/lol/summoners",
    params: { lang: "en_US" },
    headers: {
      "x-rapidapi-host": "perodriguezl-league-of-legends-v1.p.rapidapi.com",
      "x-rapidapi-key": "c7af6985d0msh9be02af5fe1bfd7p161ed9jsn75f694394e37",
    },
  })
    .then((res: any) => {
      dispatch(setSummoners(res.data.data));
    })
    .catch((err: any) => {
      console.log(err);
    });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/champions" element={<PageChampions />} />
          <Route path="/items" element={<PageItems />} />
          <Route path="/summoners" element={<PageSummoners />} />
          <Route path="/factions" element={<PageFactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
