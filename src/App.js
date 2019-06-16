import HomePage from './components/Pages/HomePage.js';
import SpeedPage from './components/Pages/SpeedPage';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
const App = ()=>{
    return(
        <div >
        <Navbar />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/speed-test" exact component={SpeedPage} />
        </Switch>
        </div>
    );
}

export default App;