

import React,{useState} from 'react';
import { connect } from 'react-redux';
import {Action} from '../../../ReduxStore/Action';
import axios from 'axios';
import '../Trending/Trending.scss';
import {Link} from 'react-router-dom';

 const AirToday = (props) => {

     const[list,setlist]=useState([]);
     const[type,settype]=useState('tv');
 
 
 
 if(list.length === 0){
 
     (async function(){
         
        const key="437ff009500a18a6e04fbe55351aacbf";
          const top_url=`https://api.themoviedb.org/3/${type}/airing_today?api_key=${key}&language=en-US&page=1`;
             
          const res= await axios.get(top_url);
          setlist([...res.data.results]);
          
     
        })();
 }
 
 


    return (

<div className="content">

        <ul className="content-heading">
        <li><h2>On Air Tv Shows:</h2></li>
      </ul>


  <div className="content-1"> {list.map(x=>{ 
      
      return <div key={x.id} className="content-2">

  <Link to="/movies" onClick={(e)=>{props.Movie(x)}}>    

<img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
alt={x.title} className="content-img" />

</Link>

<span>

   <mark>Title:{x.title}{x.original_name}</mark><br />
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

 export default connect(mapStateToProps,mapDispatchToProps)(AirToday);