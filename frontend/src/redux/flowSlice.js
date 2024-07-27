import { createSlice } from "@reduxjs/toolkit";

export const flowSlice = createSlice({
  name: "flow",
  initialState: {
    data: [],
  },
  reducers: {
    setFlow: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFlow } = flowSlice.actions;
export default flowSlice.reducer;
