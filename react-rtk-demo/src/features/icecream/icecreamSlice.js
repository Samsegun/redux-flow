import { createSlice } from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--;
        });
    },
});

export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;