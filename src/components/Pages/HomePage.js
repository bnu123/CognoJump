import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/HomePage.css'
import Navbar from '../Navbar';
import HomeText from '../HomeText';

export default function HomePage() {
    return (
    <div className="Home">
        <Navbar />
        <HomeText /> 
    </div>
    );
}
