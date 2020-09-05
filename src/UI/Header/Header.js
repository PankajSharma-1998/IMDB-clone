import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Action} from '../../ReduxStore/Action';
import './Header.scss';
import {Link} from 'react-router-dom';


const Header = (props) => {

const[movie,setmovie]=useState();



    return (
        
        <div className="header">

<h1>Welcome.<br />
Millions of movies and TV shows to Explore.</h1>

<div className="input-search">

<input type="text" onChange={(e)=>{setmovie(e.target.value)}}  
placeholder="Search For Movies and Tv Shows" /> <br />

<Link to="/search">
<i className="fa fa-search" onClick={()=>props.Movie(movie)}></i>
</Link>    

</div>

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


export default connect(mapStateToProps,mapDispatchToProps)(Header);