import React, { Fragment, useState, useEffect } from 'react';
import "./BillingSection.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const BillingSection = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const getSingleCar = (id) => {
        axios.get(`http://localhost:3000/car/getSingleCar/${id}`)
            .then(function (res) {
                console.log(res.data.car);
                setData(res.data.car)
            })
            .catch(function (error) { console.log(error) })
    }
    useEffect(() => {
        getSingleCar(id);
    }, [id]);
    return (
        <Fragment>
            <div className="parent_Billing container d-flex justify-content-around align-items-center flex-column" style={{ backgroundColor: "rgb(229, 232, 235)" }}>
                <div className='parent rounded p-5 d-flex justify-content-around align-items-start flex-column'>
                    <img src={data.photo?.secure_url} className='w-100' />
                    <div className='my-4'>
                        <h1 className='h1-color'>{data.VehicleName}</h1>
                        <p>FuelType : {data.fuelType} &emsp; &emsp; KMPL : {data.KMPL} &emsp; &emsp; Units : {data.Units}</p>
                        <p>Transmission : {data.TransMatin}</p>
                        {/* <div>
                            <button style={{ width: "100%", marginLeft: "35%" }}>
                                Rs{data.PricePerHr}/hr
                            </button>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div className='my-4 d-flex justify-content-evenly  flex-row'>
                        <ul style={{ listStyle: "square" }}>
                            <li>PickupLocation </li>
                            <li>DropOffLocation</li>
                            <li>Totaltax</li>
                            <li>TotalCharge</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}>
                            <li>Location1</li>
                            <li>Location2</li>
                            <li>Rs 832</li>
                            <li>Rs 11232</li>
                        </ul>
                    </div>
                    <div>
                        <button style={{ width: "100%", marginLeft: "3%"}}>
                            <Link to={`/`} style={{textDecoration:"none" ,color:"white"}}>Confirm</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BillingSection
