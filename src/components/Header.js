import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import user from "../images/user.png";
import alien2 from "../images/alien2.jpg";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../store/movies/moviesSlice';

const Header = () => {

  const dispatch = useDispatch()

  const[term,setTerm] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(term)
    if(term === "") return alert("Please Enter Search Term")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    // setTerm("")
  }

  return (
    <div className='header'>
      
        <div className='logo'><Link to="/">Movie App</Link></div>
      

        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}/>
            <button><i className='fa fa-search'></i></button>
          </form>
        </div>

        <div className='user-image'>
          <img src= {user} alt="user"/>
        </div>
     
        
    </div>
  )
}

export default Header