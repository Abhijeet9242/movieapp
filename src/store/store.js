import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice"

export const Store = configureStore({
    reducer:{
        movies : moviesReducer
    }
})