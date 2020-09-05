import React,{useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Action} from '../../ReduxStore/Action';
import './Content.scss';

const ContentMovies = (props) => {
 
    const[x,setx]=useState(props.Searchdata);
    const[recomend,setrecomend]=useState([]);
    const[toggle,settoggle]=useState(true);

    if(toggle && props.Searchdata){
    (async function(){
        

        
    const id= x.id;
    const change_type = x.first_air_date;// to get specification for tvs 
    
    const key="437ff009500a18a6e04fbe55351aacbf";

    const url_movie='https://api.themoviedb.org/3/movie/'+
    id+'/recommendations?api_key='+key+'&language=en-US&page=1';//for movies
    
    const url_tv='https://api.themoviedb.org/3/tv/'+
    id+'/recommendations?api_key='+key+'&language=en-US&page=1';

    
   
    //condition to get tv and movies based on date attribute;
    if(!change_type){
    const recomends= await axios.get(url_movie);
    setrecomend([...recomends.data.results.slice(0,4)]);
    }else{
        const recomends= await axios.get(url_tv);
        setrecomend([...recomends.data.results.slice(0,4)]);
    }
    
   
    settoggle(false);
    
    window.scrollBy(0,-35000);// to scroll to top after clicking any movie;

    })();
    }

    function skip(data){
        settoggle(true);
        setx(data);
        window.scrollBy(0,-35000);
    }
  
//this is used to redirect to home page on refresh;
if(!props.Searchdata){
    (function(){
    
      window.location.href=window.location.origin;

    })()
}





    return (
      
        <div className="content-movie"> 

 {x  ? (
          
  <div key={x.id} className="content-movie-2" >
       
 <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
 alt={x.title} className="content-movie-img" />
   <span>
    <mark>{x.title}{x.original_name}({x.release_date}{x.first_air_date})</mark><br /><br />
    <b>Overview:</b><br />{x.overview}<br /><br />
    <b>Popularity:</b>{x.popularity}<br />
    <b>Movie-Id:</b>{x.id}<br />
    <b>Vote:</b>{x.vote_average}<br />
    </span>
      
        </div>):null}<br /><br />
    {recomend.length !==0  ?(
    <span className="recomend-heading">Recomendation:</span>): null}

    {props.Searchdata ? (<div className='content-recomend'>
        
        {recomend.map(y=>   {
 return (y.poster_path ?  (<img src={"https://image.tmdb.org/t/p/w500/"+y.poster_path} 
  alt={y.title} className="content-recomend-img"  onClick={()=>skip(y)}/>):null);
          
        })}
    </div>):null} 

        
        </div>

    );
};

const mapStateToProps=(state)=>{
    return {
        Searchdata:state.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Movie:(data)=>{dispatch(Action(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContentMovies);