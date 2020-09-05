
const initialState={
    searchdata:'no movies'
}

const Reducer = (state=initialState,action)=>{

switch(action.type){
    case 'movie':
    return{ data:action.payload}
        break;

        default: return state
}

}



export default Reducer;
