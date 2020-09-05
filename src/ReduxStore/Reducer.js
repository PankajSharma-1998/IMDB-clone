
const initialState={
    searchdata:'no movies'
}

const Reducer = (state=initialState,action)=>{
console.log(action);
switch(action.type){
    case 'movie':
    
           return{ data:action.payload}
       
        break;

        default: return state
}

}



export default Reducer;
