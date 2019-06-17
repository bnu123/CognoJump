import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './components/Pages/HomePage.js';
import SpeedPage from './components/Pages/SpeedPage';
import LoginPage from './components/Pages/LoginPage';
import Navbar from './components/Pages/PageElements/Navbar';


const App = ()=>{
    return(
        <div >
            <Route path="/" exact component={HomePage} />
            <Route path="/speed-test" exact component={SpeedPage} />
            <Route path="/login" exact component={LoginPage} />
        </div>
    );
}

export default App;