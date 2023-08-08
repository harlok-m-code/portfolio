import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Main() {
  return (
    <div>
    <Navbar/>
         <div className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Mairbek</em></strong><br/>
                a Fron end  developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </div>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, ReactJS, Redux, HTML5, CSS3, NPM, Yarn, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, Express</p>
                    </li>
                </ul>

        </div>
    </main>
    <Footer/>
    </div>
  )
}

export default Main