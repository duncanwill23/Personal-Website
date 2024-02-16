// import TopFile from './topFile';
import './App.css';
import React from 'react';
import AboutMe from './aboutMe';
import photo from './self.png';
import './topFile.css'
import Home from './home';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <div className="topFile">
      <div className="main">
            <div className="topNav">
                <a className="home" href="#home">Home</a>
                <a className="about" href="#aboutMe">About Me</a>
                <a className="contact" href="#contact">Contact Me</a>
                <img
                    className="logo"
                    src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/b9kf1wyxxjaco8yycul7"
                    alt="Indiana logo"
                    height="50"
                />
            </div>
            
            <div id="home">
                <Home/>
            </div>

            <div id="aboutMe">
              <div className="body">
                <div className="aboutMe">
                  <AboutMe/>
                </div>
              <img className="aboutMeImage" src={photo} alt="Me"/>
              </div>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
      </div>
      <body>
      
      </body>
    </div>
  );
}

export default App;
