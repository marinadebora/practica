import data from '../data/sample.json'

export function getCharacter(){
return  function(dispatch){
try {
    let character= data.entries
    return dispatch({
        type:'GET_CHARACTER',
        payload:character
    })
} catch (error) {
    document.write(`<p>Ooops something went wrong</p>`)

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
    return {
        type:'GET_MOVIES',
        payload
    }
}