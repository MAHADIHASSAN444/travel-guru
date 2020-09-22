import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Travelplace from './Components/Home/travelplace/Travelplace';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';


function App() {
  return (
    <Router>
          <Header/>
            <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/travelplace">
            <Travelplace/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
   
{/* <Header></Header>
<Home></Home>
<Travelplace></Travelplace>
<Booking></Booking>
<h1>its working</h1>
<h1> its working now ooooo also</h1> */}


