import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./yourDetailsSlice";

export const store = configureStore({
    reducer
});