import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Form.css";
import { DatePicker } from 'antd';
// import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

const Form = ({ selectedLocation }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Redirect to the next page with the selected option appended to the URL
        navigate(`/carSelection/${encodeURIComponent(selectedOption)}`);
      };
    
      const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      };

    
   
    return (
        <Fragment>
            {/* Form Start */}
            <div className="max-width form_home container d-flex justify-content-between align-items-center m-5">
                <div className="home_text2">
                    find your <br />
                    <span className="home_text3">VEHICLE</span>
                </div>
                <form autoComplete='off' method='post' onSubmit={handleFormSubmit}>
                    <div className="container1">
                        <div className="inputs my-1">
                            <div style={{ marginLeft: "50px" }}>
                                <div>VEHICLE</div>
                                <select placeholder='Select your vehicle type' value={selectedOption} onChange={handleSelectChange} className='my-2 w-75 p-2'>
                                    <option value="">Select your vehicle type</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Scooty">Scooty</option>
                                </select>

                                <div>FROM</div>
                                <select placeholder='Select pickup location' className='my-2 w-75 p-2'>
                                    <option value="">Select pickup location</option>
                                    {/* <option value="location1" >location1</option>
                                    <option value="location2">location2</option>
                                    <option value="location3">location3</option> */}
                                    {selectedLocation === "Mumbai" && (
                                        <>
                                            <option value="location1">Mumbai Pickup Location 1</option>
                                            <option value="location2">Mumbai Pickup Location 2</option>
                                            <option value="location3">Mumbai Pickup Location 3</option>
                                        </>
                                    )}
                                    {selectedLocation === "Delhi" && (
                                        <>
                                            <option value="location4">Delhi Pickup Location 1</option>
                                            <option value="location5">Delhi Pickup Location 2</option>
                                            <option value="location6">Delhi Pickup Location 3</option>
                                        </>
                                    )}
                                </select>

                                <div>TO</div>
                                <select placeholder='Select drop location' className='my-2 w-75 p-2'>
                                    <option value="">Select drop location</option>
                                    <option value="location1" >location1</option>
                                    <option value="location2">location2</option>
                                    <option value="location3">location3</option>
                                </select>

                                <div>DATE</div>
                                <div className='w-75'>
                                    <RangePicker />
                                </div>
                            </div>
                            {/* <button type="submit" style={{ width: "100%" }}> <Link to={`/carSelection`} className='text-decoration-none text-white p-5'>CONTINUE RESERVATION</Link></button> */}
                            <button type="submit" style={{ width: "100%" }}>CONTINUE RESERVATION</button>
                        </div>
                    </div>
                </form>
            </div>


            {/* Form End */}
        </Fragment>
    )
}

export default Form
