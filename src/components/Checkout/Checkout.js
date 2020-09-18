import React, { useContext } from 'react';
import { UserContext } from '../Home/Home';

const fakeHotel = [
    {
        name:'Light bright airy stylish apt & safe peaceful stay',
        image:'https://iili.io/2oq714.png'
    },
    {
        name:'Apartment in Lost Panorama',
        image:'https://iili.io/2zw6XV.png'
    },
    {
        name:'AR Lounge & Pool (r&r + b&b)',
        image:'https://iili.io/2ouevj.png'
    }
]

const Checkout = () => {
    const [places, handleSelectPlace, detail, user, setUser] = useContext(UserContext);
    return (
        <div className='px-5'>
            <h3 className='ml-3 mb-4'>Stay in {detail.name}</h3>
            {
                fakeHotel.map(hotel => 
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="col-md-5">
                            <img className='w-100' src={hotel.image} alt=""/>
                        </div>
                        <div className="col-md-7">
                            <h5>{hotel.name}</h5>
                            <p className='mb-0'>4 guest 2bedrooms 2beds 2baths <br/> Wif Air conditiong Kitchen <br/> Cancellation fexibility availiable</p>
                            <img style={{width:'20px'}} src='https://iili.io/2oqMhu.png' alt=""/>
                            <span className='font-weight-bold ml-1'>4.8(10)</span>
                            <span><span className='font-weight-bold ml-5'>$52/</span>night</span>
                        </div>
                    </div>
                </div>
            )}  
        </div>
    );
};

export default Checkout