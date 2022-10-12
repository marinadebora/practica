import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCharacter, getMovies } from '../action/action'
import '../styles/Movies.css'
const Movies = () => {
  const allMovies=useSelector(state=>state.movies)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCharacter())
dispatch(getMovies())
  },[dispatch])
  return (
    <div className='containerMovie'>
      {
        allMovies?.map(e=>(
          <div className='movie'>
            <div className='containimg'>
            <p>{e.title}</p>
            <img className='imgMovie' id={e.title} src={e.images.Poster_Art.url} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Movies
