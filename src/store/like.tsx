import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    incrementLikes(state) {
      state.likes += 1;
    },
    decrementLikes(state) {
      state.likes -= 1;
    },
  },
});

export const { incrementLikes, decrementLikes } = likeSlice.actions;
export default likeSlice.reducer;
