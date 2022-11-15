import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const responseJson = await response.json();
    return responseJson;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      console.log(action.payload);
      return [...state];
    },
  },
});

export default rocketsSlice.reducer;
