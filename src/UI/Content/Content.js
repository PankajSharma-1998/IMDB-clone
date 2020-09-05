import React,{useState} from 'react';
import axios from 'axios';
import {  connect } from 'react-redux';
import {Action} from '../../ReduxStore/Action';
import './Content.scss';
import {Link} from 'react-router-dom';

const Content = (props) => {

    const[list1,setlist1]=useState([]);
    const[list2,setlist2]=useState([]);
    const[list3,setlist3]=useState([]);
    const[list4,setlist4]=useState([]);

    const[ptype,setptype]=useState('movie');
    const[ttype,setttype]=useState('movie');
    const[time,settime]=useState('day');
    const[page,setpage]=useState(1);



    if(list1.length === 0){

        (async function(){
            const key="437ff009500a18a6e04fbe55351aacbf";
            const top_url=`https://api.themoviedb.org/3/${ttype}/popular?api_key=${key}&language=en-US&page=${page}`;
            const trend_url=`https://api.themoviedb.org/3/trending/movie/${time}?api_key=${key}`;
            const popular_url=`https://api.themoviedb.org/3/${ptype}/popular?api_key=${key}&language=en-US&page=${page}`;
            const upcoming_url=`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`;
           
            
            const res4= await axios.get(upcoming_url);
            setlist4([...res4.data.results].slice(0,4));
            
            const res3= await axios.get(popular_url);
            setlist3([...res3.data.results].slice(0,4));
            
            const res2= await axios.get(trend_url);
            setlist2([...res2.data.results].slice(4,8));
                
             const res1= await axios.get(top_url);
             setlist1([...res1.data.results].slice(4,8));
           
      
        })();
    }


 
  
  

    function pmovie(){
        setptype('movie');
        setlist1([]);
    }
    
    function ptv(){
        setptype('tv');
        setlist1([]);
    }
    function tmovie(){
        setptype('movie');
        setlist1([]);
    }
    
    function ttv(){
        setttype('tv');
        setlist1([]);
    }

    function day(){
        settime('day');
        setlist1([]);
    }
    
    function week(){
        settime('week');
        setlist1([]);
    }


    return (
        
        <div className="trending">

    {list2.length !==0 ? (<React.Fragment>     
        <ul className="trending-heading">
        <li>What's Trending:</li>
        <li onClick={day}><span>Today</span></li>
      <li onClick={week}> <span>This Week</span></li>

      </ul>


  <div className="trends-1"> {list2.map(x=>{ 
      
      return <div key={x.id} className="trends-2">
 <Link to="/movies" onClick={(e)=>{props.Movie(x)}}>
<img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
alt={x.title} className="trending-img"  />
</Link>
    </div>  
    })}
    
    </div><br />
 </React.Fragment>): (<React.Fragment><div className="loader">Please Wait...</div></React.Fragment>)}



 {list1.length !==0 ? (<React.Fragment>  
    <ul className="trending-heading">
        <li>Top Rated:</li>
        <li onClick={tmovie}><span>Movie</span></li>
       <li onClick={ttv}> <span>Tv</span></li>

      </ul>
          <div className="trends-1"> {list1.map(x=>{ 
              
              return <div key={x.id} className="trends-2">
      <Link to="/movies" onClick={(e)=>{props.Movie(x)}}>   
     <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
     alt={x.title} className="trending-img"  />
       </Link> 
            </div>  
            })}
            
            </div><br />
            </React.Fragment>): (<React.Fragment><div className="loader">Please Wait...</div></React.Fragment>)}
   
 

            {list3.length !==0 ? (<React.Fragment> 
<ul className="trending-heading">
    <li>What's Popular:</li>
    <li onClick={pmovie}><span>Movie</span></li>
       <li onClick={ptv}> <span>Tv</span></li>

      </ul>
      
      <div className="trends-1"> {list3.map(x=>{ 
          
          return <div key={x.id} className="trends-2">
 <Link to="/movies" onClick={(e)=>{props.Movie(x)}}>      
 <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
 alt={x.title} className="trending-img" />
   </Link> 
        </div>  
        })}
        
        </div><br />
        </React.Fragment>): (<React.Fragment><div className="loader">Please Wait...</div></React.Fragment>)}

        {list4.length !==0 ? (<React.Fragment>   
  <ul className="trending-heading">
  <li>Upcoming Movies:</li>

      </ul>
      <div className="trends-1"> {list4.map(x=>{ 
          
          return <div key={x.id} className="trends-2">
  <Link to="/movies" onClick={(e)=>{props.Movie(x)}}>     
 <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} 
 alt={x.title} className="trending-img" />
   </Link> 
        </div>  
        })}
        
        </div><br />
      </React.Fragment>): (<React.Fragment>Loading...</React.Fragment>)}   
        
        </div>
);

};



const mapDispatchToProps=(dispatch)=>{
    return{
        Movie:(data)=>{dispatch(Action(data))}
    }
}


export default connect(null,mapDispatchToProps)(Content);