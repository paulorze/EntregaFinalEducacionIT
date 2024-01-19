import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import { userSlice } from "./userSlice";
import { createProductSlice } from "./createProductSlice";
import { adminSlice } from "./adminSlice";

const StoreRedux = configureStore({
    reducer: {
        userData: userSlice.reducer,
        theme: themeSlice.reducer,
        createProduct: createProductSlice.reducer,
        admin: adminSlice.reducer
    }
});

export default StoreRedux;