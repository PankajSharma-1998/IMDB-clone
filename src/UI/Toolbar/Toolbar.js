import React from 'react';
import {Link} from 'react-router-dom';
import './Toolbar.scss';
import { connect } from 'react-redux';


const Toolbar = (props) => {

   
    return (
        <div className="toolbar">
         
         <strong>IMDB</strong>
        
         <span className="home"><Link to="/" className="links">Home</Link></span> 
        
         <span className="tv-movie">
            Movies
        
        <ul>
    <li><Link to="/popular" className="links-1">Popular</Link></li>
    <li><Link to ="/trending" className="links-1">Trending</Link></li>
    <li><Link to="/toprated" className="links-1">Top Rated</Link></li> 
       </ul>    

             </span>
        
         <span className="tv-movie">
             Tv Show
        
         <ul>
         <li><Link to="/topratedtv" className="links-1">Top Rated</Link></li>
    <li><Link to="airing" className="links-1">Air Today</Link></li>
<li><Link to="/populartv" className="links-1">Popular</Link></li>

         </ul>
         </span>

         <span className="about">
        
        <Link to="/about" className="links">     
             About us
             </Link>
        
             </span>
              
        </div>
            
    );
};

const mapDispatchToProps=(dispatch)=>{
    return{
        routingState:(data)=>{dispatch({type:'switch',payload:data})}
    }
}




export default connect(null,mapDispatchToProps)(Toolbar);