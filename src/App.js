import React, { Component } from 'react';
import Toolbar from './UI/Toolbar/Toolbar';
import Trending from './UI/Content/Trending/Trending';
import Popular from './UI/Content/Popular/Popular';
import Toprated from './UI/Content/Toprated/Toprated';
import Topratedtv from './UI/Content/Tv/Topratedtv';
import PopularTv from './UI/Content/Tv/PopularTv';
import AirToday from './UI/Content/Tv/AirToday';
import Search from './UI/Header/Searchresult';
import Home from './UI/Home/Home';
import ContentMovies from './UI/Content/ContentMovies';
import {Route,Switch} from 'react-router-dom';
import Footer from './UI/Footer/Footer';
import About from './UI/About/About';



class App extends Component {

  render() {

    return (
      <div> 
   
   <Toolbar />
 
    <Switch>  
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={ContentMovies} />
      <Route path="/trending" exact component={Trending} />
      <Route path="/popular" exact component={Popular} />
      <Route path="/toprated" exact component={Toprated} />
      <Route path="/topratedtv" exact component={Topratedtv} />
      <Route path="/airing" exact component={AirToday} />
      <Route path="/populartv" exact component={PopularTv} />
      <Route path="/search" exact component={Search} />
      <Route path="/about" exact component={About} />
      </Switch>
     <Footer />

      </div>
    
    );
  
  }

}



export default App;
