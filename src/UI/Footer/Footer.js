import React from 'react';
import './Footer.scss';


const Footer = (props) => {

    return (

<div className="footer">

        <section className="about">

            <h2>About</h2>

          <p>Name:<br />Pankaj Sharma &#9794;<br /><br />

         Profession:<br /> Full Stack Developer/MERN Stack<br /><br />

         Fall In Love <span className="emoji">&#128151;</span> With<br />
         JavaScript and Reactjs

         </p>
</section>

<section className="contact">

<h2>Contact</h2>

<main>

<a href="https://www.google.com/gmail/" target="_" className="a-1" >
    <i className="fa fa-google"></i></a>pankaj00.ps79@gmail.com<br />

<a href="https://www.linkedin.com/in/pankaj-sharma-947b5bba" target="_" className="a-2" >
    <i className="fa fa-linkedin"></i></a>Pankaj Sharma<br />

<a href="https://github.com/" target="_" className="a-3" >
    <i className="fa fa-github"></i></a>PankajSharma-1998
    
</main>

</section>

<section className="copyright">

&#169;<br />Pankaj Sharma<br />
Project Made with love and passion.

</section>

        </div>
    );
};

export default Footer;