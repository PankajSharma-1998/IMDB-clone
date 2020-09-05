import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import {connect} from 'react-redux';
import {Action} from '../../ReduxStore/Action';

const Home = (props) => {

  
    return (
        <div className="home">  
      <Header />
      <Content />
        </div>
    );
};

const mapStateToProps=(state)=>{
  return {
      Searchdata:state.data
  }
}
export default connect(mapStateToProps,null)(Home);