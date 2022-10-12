import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
const Home = () => {
  return (
    <dir className='contenedor'>
        <div id='Navbar2'>
            <h3>Popular Titles</h3>
        </div>
    <div id='containerHome'>
        <Link to='/series'>
    <div className='img'>
        <img src='https://res.cloudinary.com/deqbqghhq/image/upload/v1665607188/series_rvy9s8.jpg'alt='series'></img>
    <p>Popular Series</p>
    </div>
    </Link>
    <Link to='/movies'>
    <div className='img'>
        <img src="https://res.cloudinary.com/deqbqghhq/image/upload/v1665607195/movies_jawcv0.jpg" alt="movies" />
        <p>Popular Movies</p>
    </div>
    </Link>
    </div>
    </dir>
  )
}

export default Home
