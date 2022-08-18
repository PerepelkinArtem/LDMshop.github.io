import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeItem: 0
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveItem(state, action) {
      console.log('action setActiveItem', action)
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = filterSlice.actions;

export default filterSlice.reducer;