import { createSlice } from "@reduxjs/toolkit";

const setInitialState = JSON.parse(localStorage.getItem('themeMode')) || false;

export const themeSlice = createSlice({
    name: 'theme',
    initialState: setInitialState,
    reducers : {
        toggleTheme: (state, action) => {
            localStorage.setItem('themeMode',JSON.stringify(!state));
            return !state;
        }
    }
});

export const {toggleTheme} = themeSlice.actions;