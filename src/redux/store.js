import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import { userSlice } from "./userSlice";

const StoreRedux = configureStore({
    reducer: {
        userData: userSlice.reducer,
        theme: themeSlice.reducer
    }
});

export default StoreRedux;