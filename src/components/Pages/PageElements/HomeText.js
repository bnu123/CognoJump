import React from 'react'
import typing from '../../../css/typing.jpeg';
import progress from '../../../css/progress.png';
import '../../../css/hometext.css';




const HomeText = ()=>{
    return (
    
        <div>
        <div className="container" >
            <div className="row">
                <div className="col-md-12">

                <h1 className="text-bold" style={{marginTop : "1em"}}>
                    Welcome
                </h1>

                <p className="text" >
                    This site aims to improve your typing speed by a carefully designed typing calculator and ofcourse nothing is complete without a little fun, so we have for you a game, a challenge. Have fun typing            
                </p>
                </div>
            </div>
            <div className="container" style={{marginTop : "4em"}}>
            <div className="row my-row" >
                <div className="col col-md-6">
                    <h1 className="text-bold">
                        Check Your Speed
                    </h1>
                    <p className="text">
                        This system is designed with flexibility in mind <br />
                        With a highly optimised algo to help you define the speed you type with, seeing where you stand has never been so much fun before. <br />
                        Equipped with quite a large number of features, you can change almost every configuration of the system where you type as per your comfort and surely your SPIRIT! 
                    </p>
                </div>

                <div className="col col-md-6 img">
                    <img src={typing} alt="nothing"></img>
                </div>

            </div>

            <div className="row my-row" >
                <div className="col col-md-6 img">
                   <img src={progress}></img> 
                </div>

                <div className="col col-md-6">
                    <h1 className="text-bold">
                        See Your Progress
                    </h1>
                    <p className="text">
                        Checking your progress over a course of duration, has been made hasslefree. <br />
                        See our suggestions based on the computation we do on your typing speed. <br />
                        Visually see the heat maps and much more exiting stats about your performance.
                    </p>
                </div>
            </div>

            <div className="row my-row" >

                <div className="col col-md-6">
                    <h1 className="text-bold">
                        Challenge People
                    </h1>
                    <p className="text">
                        Challenge people and compete with them.
                        Participate in typing tournaments and win coins and people's hear.
                    </p>
                </div>

                <div className="col col-md-6">
                    {/* <!-- Image to be inserted --> */}
                </div>
            </div>

            <hr className="hr" />

            <div className="img-container">
            
            </div>
            <div className="row justify-content-center">
                <h2 className="text-bold">
                    Take it a step ahead
                </h2>
                <p className="text">
                    Want to have fun and get a challenge that will test your hand-eye coordination ?
                    See our Cogno Game made with efforts to give an astounding challenge and have people mull over it
                </p>
            </div>
            </div>
        </div>
    <div>
    <footer className="page-footer font-large indigo footer">

    <div className="container text-center text-md-left">

    <div className="row">

        <div className="col-md-3 mr-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Developer</h5>

        <ul className="list-unstyled">
            <li>
            <a href="#!">Github</a>
            </li>
            <li>
            <a href="#!">Instagram</a>
            </li>
            <li>
            <a href="#!">Twitter</a>
            </li>
        </ul>

        </div>
    

    </div>

    </div>

    <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="#"> Sthiray.inc</a>
    </div>

    </footer>
    </div>
    </div>
    );
}
export default HomeText;