import axios from 'axios'
import data from '../data/sample.json'
console.log(data.entries)

export function getCharacter(){
return  function(dispatch){
try {
    let character= data.entries
    return dispatch({
        type:'GET_CHARACTER',
        payload:character
    })
} catch (error) {
    console.log(error)
}
}
}
export function getSeries(payload){
    return {
        type:'GET_SERIES',
        payload
    }
}
export function getMovies(payload){
    console.log(payload)
    return {
        type:'GET_MOVIES',
        payload
    }
}