import {createSlice} from '@reduxjs/toolkit';

export const DietSlice = createSlice({
  name: 'Diet',
  initialState: {
    diets: [],
  },
  reducers: {
    SET_DIETS: (state, action) => {
      state.diets = action.payload;
    },
    ADD_DIET: (state, action) => {
      state.diets = [...state.diets, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {SET_DIETS, ADD_DIET} = DietSlice.actions;

export default DietSlice.reducer;
