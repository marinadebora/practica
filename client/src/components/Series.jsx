import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacter, getSeries } from '../action/action'
import '../styles/Movies.css'

const Series = () =>
{
  const allSeries = useSelector(state => state.series)
  const dispatch = useDispatch()
  useEffect(() =>
  {
    dispatch(getCharacter())
    dispatch(getSeries())
  }, [dispatch])
  return (
    <div className='containerMovie'>
      {
        !allSeries? <div id='Loading' > <p id='LoadingP'>Loading...</p></div>:
        allSeries?.map((e, i) => (
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

export default Series
