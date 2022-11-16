import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const GET_MISSIONS = 'GET_MISSIONS';

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const result = await response.json();
    return result;
  },
);

const MissionsSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    Missionstatus(state, action) {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    },
    LeaveMission(state, action) {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => action.payload.map((element) => (
      {
        id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
      }
    )),
  },
});

export const { Missionstatus, LeaveMission } = MissionsSlice.actions;
export default MissionsSlice.reducer;
