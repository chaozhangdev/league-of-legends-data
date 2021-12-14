import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageChampions from "./pages/PageChampions";
import PageItems from "./pages/PageItems";
import PageSummoners from "./pages/PageSummoners";
import PageFactions from "./pages/PageFactions";

function App() {
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

export default App;
