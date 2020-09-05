import React,{useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Action} from '../../../ReduxStore/Action';
import './Trending.scss';
import {Link} from 'react-router-dom';

const Trending = (props) => {
 
    const[list,setlist]=useState([]);
    const[time,settime]=useState('week');


function day(){
   
    settime('day');
    setlist([]);
}

function week(){
   
    settime('week');
    setlist([]);
}
// direct data fetching of trending movies;

if(list.length === 0){

    (async function(){
   
        const key="437ff009500a18a6e04fbe55351aacbf";
         const trend_url=`https://api.themoviedb.org/3/trending/movie/${time}?api_key=${key}`;
            
         const res= await axios.get(trend_url);
         setlist([...res.data.results]);
         console.log(list);
        
    })();
}


    return (
      
        <div className="content">
   
            <ul className="content-heading">
            <li>What's Trending:</li>
            <li onClick={day}><span>Today</span></li>
            <li onClick={week}> <span>This Week</span></li>

          </ul>


      <div className="content-1"> {list.map(x=>{ 
          
          return <div key={x.id} className="content-2">

<Link to="/movies" onClick={(e)=>{props.Movie(x)}}>   
 
 <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
 alt={x.title} className="content-img" />
 
 </Link>
 
   <span>
 
       <mark>Title:{x.title}</mark><br />
    <b>Overview:</b>{x.overview}<br />
    <b>Popularity:</b>{x.popularity}<br />
    <b>Id:</b>{x.id}<br />
    <b>Release-Date:</b>{x.release_date}<br />
    <b>Vote:</b>{x.vote_average}<br />
    </span>
    
        </div>  
 
 })}
        
        </div><br />
    
    
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

        Searchdata:state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        Movie:(data) => { dispatch(Action(data)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trending);