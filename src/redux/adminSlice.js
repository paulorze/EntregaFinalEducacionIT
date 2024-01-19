import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState: false,
    reducers : {
        setAdmin: (state, action) => {
            return true;
        },
        resetAdmin: (state, action) => {
            return false;
        }
    }
});

export const {setAdmin, resetAdmin} = adminSlice.actions;