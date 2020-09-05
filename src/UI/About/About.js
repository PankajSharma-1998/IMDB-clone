import React from 'react';
import img from './screenimg.jpg';
import './About.scss';
const About = (props) => {
    return (
        <div className="about-section">
            <span className="img">
            <img src={img} alt="my-pic" />
            </span>

            <section className="about-content">

            <span className="heading">About</span>

            <p>Hi there! my name is Pankaj Sharma,<br />
    I'm a full stack developer/MERN developer from Mathura, India</p>

         <main className="main">
          
             <p>I love designing and developing websites and webapps for clients all over the globe.</p>
          
             <p>My key strengths are JavaScript/OOjs, Reactjs, Nodejs,<br />
            React-Redux,React-Hooks,HTML5,CSS3,SCSS</p>
          
            <p>I have been designing and developing websites 
                and webapps for a quite while.
            </p><br />

          <div>
          
              <span>You may also find me in...</span><br /><br />
           
<main>
    

<a href="https://www.linkedin.com/in/pankaj-sharma-947b5bba" target="_" className="a-2" >
    <i className="fa fa-linkedin"></i>Pankaj Sharma</a>

<a href="https://github.com/" target="_" className="a-3" >
    <i className="fa fa-github"></i>PankajSharma-1998</a>

    <a href="https://www.google.com/gmail/" target="_" className="a-1" >
    <i className="fa fa-google"></i>pankaj00.ps79@gmail.com</a>
    
</main>   
        
        </div>  
        
         </main>

            
            </section>
            
        </div>
    );
};

export default About;