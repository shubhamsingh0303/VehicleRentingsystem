import React, { Fragment } from 'react';
import "./Home.css";
import Form from './Form';
import Ratting from './Ratting';

const Home = ({selectedLocation}) => {

    

    return (
        <Fragment>
            {/* Hero Section Start */}
            <div className='hero_section'>
                <p className='home_text_1'>VEHICLE SEARCH <br /> BOOK AND <br /> RIDE.</p>
                <p className='home_text_2'>Whether it's a family trip, business purpose,<br />or an adventurous getaway, we have the <br />perfect vehicle for you.</p>
            </div>
            {/* Hero Section End */}
            <Form selectedLocation={selectedLocation} />
            <div className='Ratting_section container'>
                <Ratting />                 
            </div>
        </Fragment >
    )
}

export default Home
