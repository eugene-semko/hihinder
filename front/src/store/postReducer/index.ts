import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
  currentPost: number;
};
const initialState: initialStateType = {
  currentPost: 0,
};
export const postReducer = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});
