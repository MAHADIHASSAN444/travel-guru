import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Travelplace from './Components/Home/travelplace/Travelplace';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import fakeData from './Components/fakeData/fakeData';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
                  <Route path="/Login">
                    <Login/>
                    </Route>
                      <Route path="/booking/:id">
                      <Booking info={fakeData} />
                    </Route>
                   <PrivateRoute path="/search">
                 <Search/>
                </PrivateRoute>
               <Route exact path="/">
              <Home></Home>
            </Route>
           <Route path="*">
          <Travelplace></Travelplace>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
   


