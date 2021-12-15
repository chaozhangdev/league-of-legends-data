import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialProps {
  isLoading: boolean;
  currentChampion: string;
  allChampionsName: Array<string>;
  allChampionsData: Object;
}

const initialState: initialProps = {
  isLoading: true,
  currentChampion: "",
  allChampionsName: [],
  allChampionsData: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllChampionsName: (state, action: PayloadAction<Array<string>>) => {
      state.allChampionsName = action.payload;
    },
    setAllChampionsData: (state, action: PayloadAction<Object>) => {
      state.allChampionsData = action.payload;
    },
  },
});

export const { setLoadingStatus, setAllChampionsName, setAllChampionsData } =
  globalSlice.actions;

export default globalSlice.reducer;
