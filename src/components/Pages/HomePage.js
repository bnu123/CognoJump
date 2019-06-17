import React from 'react'

import HomeText from './PageElements/HomeText';
import Navbar from './PageElements/Navbar';
import '../../css/HomePage.css'

export default function HomePage() {
    return (
    <div className="Home">
        <Navbar />
        <HomeText />
    </div>
    );
}
