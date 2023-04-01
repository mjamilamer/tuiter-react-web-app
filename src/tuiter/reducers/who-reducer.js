import {createSlice} from "@reduxjs/toolkit";
import whoArray from '../data/who.json';

const whoSLice = createSlice({
    name: "who",
    initialState: whoArray,
});

export default whoSLice.reducer;