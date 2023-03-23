import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import {APIKEY} from "../../common/api/MovieApiKey"

//we are writing ascynchronous action creator

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async()=>{

    const movieText = "Harry"

    const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
    .catch((error)=>{
      console.log("err",error)
    })
    // console.log("response",response.data)
    return response.data
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async()=>{

    const seriesText = "Friends"

    const response = await movieApi.get(`?apikey=${APIKEY}&s=${seriesText}&type=series`)
    .catch((error)=>{
      console.log("err",error)
    })
    // console.log("response",response.data)
    return response.data
})

//fetch single item by imdbID

export const fetchAsyncMovieorShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieorShowDetail",
     async(id)=>{
    const response = await movieApi.get(
        `?apikey=${APIKEY}&i=${id}&Plot=full`
        );;
    return response.data
})


const initialState = {
    moviesdata:{},
    showsdata:{},
    selectedMovieorShow:{}
}

export const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload}) =>{
            state.moviesdata = payload
        },
        removeSelectedMovieorShow : (state) =>{
            state.selectedMovieorShow = {}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending] : ()=>{
            console.log("pending")
        },

        [fetchAsyncMovies.fulfilled] : (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state, moviesdata: payload}
        },

        [fetchAsyncMovies.rejected] : ()=>{
            console.log("rejected")
        },

        //shows
        [fetchAsyncShows.pending] : ()=>{
            console.log("pending")
        },

        [fetchAsyncShows.fulfilled] : (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state, showsdata: payload}
        },

        [fetchAsyncShows.rejected] : ()=>{
            console.log("rejected")
        },

        //selected movie
        [fetchAsyncMovieorShowDetail.fulfilled] : (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state, selectedMovieorShow: payload}
        },
    },
})

export const {addMovies,removeSelectedMovieorShow} = movieSlice.actions
//creating a function to get state value from store=> state.slicename.statepropery
export const getAllMovies = (state) => state.movies.moviesdata
export const getAllShows = (state) => state.movies.showsdata
export const getSelectedMovieorShow = (state) => state.movies.selectedMovieorShow
export default movieSlice.reducer