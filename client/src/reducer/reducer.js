const initialState = {
  character: [],
  series:[],
  movies:[]
}
function rootReducer(state = initialState, action)
{
  switch (action.type) {
    case 'GET_CHARACTER':
      return {
        ...state,
        character: action.payload
      }
      case 'GET_SERIES':
        const allSeries=state.character?.filter(e=>e.programType==='series'&& e.releaseYear>= 2010)
        allSeries.sort((a,b)=>{
          if (a.title > b.title) {
            return 1
        }
        if (b.title > a.title) {
            return -1
        }
        return 0
        })
        return {
          ...state,
          series: allSeries
        }
        case 'GET_MOVIES':
          const allMovies=state.character?.filter(e=>e.programType==='movie'&& e.releaseYear>= 2010)
          allMovies.sort((a,b)=>{
            if (a.title > b.title) {
              return 1
          }
          if (b.title > a.title) {
              return -1
          }
          return 0
          })

          
          return {
            ...state,
            movies:allMovies
          }
    default:
      return {
        state
      }
  }
}



export default rootReducer