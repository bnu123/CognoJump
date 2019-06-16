import React from 'react'
import { Link } from 'react-router-dom';
import brand from '../css/brand.svg'

export default function Navbar() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-sm sticky-top ">
            <Link to="/"><img src={brand} alt="nothign"/></Link>
            <span className="navbar-text">Cogno Jump</span>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/speed-test" className="nav-link">Test Speed</Link>
                </li>
                <li className="nav-item">
                    <Link to="/game" className="nav-link">Game</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login/Register</Link>
                </li>
            </ul>
        </nav> 
        
        </div>

    )
}
