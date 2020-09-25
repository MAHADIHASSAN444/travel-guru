import React,{useState} from 'react';
import allHotel from '../fakeData/allHotels';
import star_1_ from '../../Images/star_1_.png';




const Search = () => {
    const hotel = allHotel.slice(0, 3);
    const [hotels, setHotels] = useState(hotel);
    return (
        <div className="container d-flex ">
            <div className="m-5">

            <div className="text-white">
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h4>Stay in Cox’s Bazar</h4>
                    <h5>Total hotels: {hotels.length}</h5>
                </div>

          {

                hotels.map(hotel =>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={hotel.image} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{hotel.name}</h5>
                                        <p class="card-text">{hotel.details}</p>
                                        <p class="card-text">${hotel.price}/night</p>
                                        <p class="card-text">4.5<img src={star_1_} alt="Rating" width="20px" /> {hotel.review}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                 )
             }

            </div>

            
        </div>
    );
};

export default Search;