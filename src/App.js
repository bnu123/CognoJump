import HomePage from './components/Pages/HomePage.js';
import SpeedPage from './components/Pages/SpeedPage';
import React from 'react';
import { Route } from 'react-router-dom';

const App = ()=>{
    return(
        <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/speed-test" exact component={SpeedPage} />
        </div>
    );
}

export default App;