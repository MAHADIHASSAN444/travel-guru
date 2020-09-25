import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import './Home.css';



const {id, name, details, image} = fakeData;

const Home = (props) => {
    const [location, setLocation] = useState([]);

    const handleLocation = (event) => {
        setLocation(event);
    }

    return (
        <div  class="container">
          <div class="locationInfo row">

              <div className="col-md-5 row">
              <h1> {location.name}</h1>
              <p>{location.details}</p>
              
                    <Link to={"/booking/" + location.id}>
                        <button className="btn btn-warning">Booking</button>
                    </Link>
                    
              </div>
              <div className="col-md-7  locationImg d-flex">
                   {
                        fakeData.map(info =>
                            <img className=" locationImgName" onLoad={() => handleLocation(info)} onClick={() => handleLocation(info)} src={info.image} key={info.id} alt="" />)
                    }
              </div>
          </div>
            
        </div>
    );
};

export default Home;