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
        !allMovies? <div id='Loading' > <p id='LoadingP'>Loading...</p></div>:
        allMovies.map((e, i) => (
          <div className='movie'>
            <div className='containimg'>
              <a class="button" href={`#popup${i}`}>{e.title}</a>
              <img className='imgMovie' id={e.title} src={e.images.Poster_Art.url} alt="" />
            </div>
            <div id={`popup${i}`} class="overlay">
              <div class="popup">
                <h2>{e.title}</h2>
                 <a class="close" href="#">&times;</a>
                <div class="content">
                  <p>{e.description}</p>
                  <p>{e.releaseYear}</p>
                  <img className='imgMovie2' id={e.title} src={e.images.Poster_Art.url} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Movies
