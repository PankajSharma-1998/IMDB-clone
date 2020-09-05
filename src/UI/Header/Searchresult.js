import React,{useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Action} from '../../ReduxStore/Action';
import '../Content/Trending/Trending.scss';
import {Link} from 'react-router-dom';
import {render} from 'react-dom';

const Search = (props) => {
 
    const[list,setlist]=useState([]);
    const[type,settype]=useState(props.Searchdata);


if(list.length === 0 && props.Searchdata){

    (async function(){
    
        var key="437ff009500a18a6e04fbe55351aacbf";

        var url=`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${type}`;//for tmdb  it will give search result

         const res = await axios.get(url);
 
         setlist([...res.data.results]); 
 
        })();
}


//this is used to redirect to home page on refresh;

if( !props.Searchdata ){
 
    (function(){
 
        window.location.href=window.location.origin;
 
    })()
}


    return (
        
        <div className="content">
        
        <ul className="content-heading">
        
        <li><h2>Total Results:{list.length}</h2></li>

      </ul>


  <div className="content-1"> {list.map(x=>{ 
      
      return  x.poster_path ?
      
      <div key={x.id} className="content-2">

         
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

    </div>: null
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
        Movie:(data) => { dispatch(Action(data)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);