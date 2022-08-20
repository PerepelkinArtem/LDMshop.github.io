import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: []
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items = action.payload;
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearItems(state, action) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearItems } = drawerSlice.actions;

export default drawerSlice.reducer;