import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialProps {
  isLoading: boolean;
  currentChampion: string;
  currentChampionDetails: Object;
  allChampionsName: Array<string>;
  allChampionsData: Object;
  items: Object;
  factions: Array<Object>;
  summoners: Object;
}

const initialState: initialProps = {
  isLoading: true,
  currentChampion: "Akali",
  currentChampionDetails: {},
  allChampionsName: [],
  allChampionsData: {},
  items: {},
  factions: [],
  summoners: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllChampionsName: (state, action: PayloadAction<Array<string>>) => {
      state.allChampionsName = action.payload;
    },
    setAllChampionsData: (state, action: PayloadAction<Object>) => {
      state.allChampionsData = action.payload;
    },
    setCurrentChampion: (state, action: PayloadAction<string>) => {
      state.currentChampion = action.payload;
    },
    setCurrentChampionDetails: (state, action: PayloadAction<Object>) => {
      state.currentChampionDetails = action.payload;
    },
    setItems: (state, action: PayloadAction<Object>) => {
      state.items = action.payload;
    },
    setFactions: (state, action: PayloadAction<Array<Object>>) => {
      state.factions = action.payload;
    },
    setSummoners: (state, action: PayloadAction<Object>) => {
      state.summoners = action.payload;
    },
  },
});

export const {
  setLoadingStatus,
  setAllChampionsName,
  setAllChampionsData,
  setCurrentChampion,
  setCurrentChampionDetails,
  setItems,
  setFactions,
  setSummoners,
} = globalSlice.actions;

export default globalSlice.reducer;
