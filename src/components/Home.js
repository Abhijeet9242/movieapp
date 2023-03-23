import React from 'react'
import MyCarousel from './MyCarousel';
import "./Home.css";
import MyCarousel2 from './MyCarousel2';
import MovieListing from "./MovieListing"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows } from '../store/movies/moviesSlice';


const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  },[])

  return (
    <>
      <MyCarousel/>
     

      <MyCarousel2 dir={"ltr"}/>

      <div className='offerimgdiv'>
      <div className='offerimg'>
        <img src="https://moviekoop.com/Images/Cover_Photos/bookmyshow-vouchers-sale-banner.jpg" alt="offer"/>
      </div>
      </div>

      <MyCarousel2 dir={"rtl"}/>

      <div className='banner-img'></div>
      <div>
      <MovieListing/>
      </div>
    </>
  )
}

export default Home