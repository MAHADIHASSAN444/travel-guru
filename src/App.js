import React, { createContext, useState } from 'react';
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

export const UserContext = createContext();

function App(props) {
      const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="background">
    
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
    </UserContext.Provider>
  );
}

export default App;
   
{/* <Header></Header>
<Home></Home>
<Travelplace></Travelplace>
<Booking></Booking>
<h1>its working</h1>
<h1> its working now ooooo also</h1> */}


