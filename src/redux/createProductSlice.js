import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
    name: 'createProduct',
    initialState: false,
    reducers : {
        openModal: (state, action) => {
            return true;
        },
        closeModal: (state, action) => {
            return false;
        }
    }
});

export const {openModal, closeModal} = createProductSlice.actions;