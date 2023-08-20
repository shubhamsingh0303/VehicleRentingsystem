import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import "./CarSelection.css";
import { Link, useParams } from 'react-router-dom';



const CarSelection = () => {
    const [data, setData] = useState([]);

    const { categoryName } = useParams();

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    // Get ALl User
    const getAllCars = () => {
        axios.get(`http://localhost:3000/car/allCar?category=${categoryName}`)
            .then(function (res) {
                console.log(res.data.car);
                setData(res.data.car)
            })
            .catch(function (error) { console.log(error) })
    };

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    };

    useEffect(() => {
        getAllCars();
    }, []);
    return (
        <Fragment>
            {records.map((item) => {
                return ((
                    <div class="parent">
                        <div class="image-div">
                            <img src={item.photo.secure_url} alt="Img Description" style={{ borderRadius: "10px", height: "200px" }} />
                        </div>
                        <div class="content-div">
                            <h2>{item.VehicleName}</h2>
                            <div className='vehicle_Details'>
                                <ul>
                                    <li>Fuel Type : {item.fuelType} </li>
                                    <li>Transmission : {item.TransMatin}</li>
                                    <li>Category : {item.category}</li>
                                </ul>
                                <ul>
                                    <li>KMPL : {item.KMPL} </li>
                                    <li>Total Units : {item.Units}</li>
                                </ul>
                            </div>
                            <button className="loginButton" >
                                <Link to={`/BillingSection/${item._id}`} className='text-decoration-none text-white'> Rs {item.PricePerDay}/Day</Link>
                            </button>
                        </div>
                    </div>
                ))
            })}

            <nav style={{ marginLeft: "40%" }}>
                <ul className='pagination'>
                    <li className='page-item'>
                    {/* eslint-disable-next-line */}
                        <a href="#" className='page-link' onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <span className='page-link' style={{cursor:"default"}}> {n}</span>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                    {/* eslint-disable-next-line */}
                        <a href="#" className='page-link' onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default CarSelection
