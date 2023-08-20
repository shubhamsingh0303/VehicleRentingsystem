import React, { Fragment, useState, useEffect } from 'react';
import "./MyCars.css";
import Button from 'react-bootstrap/esm/Button';
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MyCars = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    // Get ALL car
    const getUser = () => {
        axios.get("http://localhost:3000/car/allCar")
            .then(function (res) {
                console.log(res.data.car);
                setData(res.data.car)
            })
            .catch(function (error) { console.log(error) })
    }

    // Delete car
    const deleteUser = async (e) => {
        try {
            const confirmData = window.confirm("Are you sure you want to delete car ?");
            if (confirmData) {
                const response = await axios.delete(`http://localhost:3000/car/deleteCar/${e.target.id}`, {});
                const users = response.data.users;
                setData(users);
                navigate("/allUsers");
                getUser();
            }
        } catch (error) {
            console.log(error);
        }
    }
    let counter = 1;
    const getNextNumber = () => {
        const nextNumber = counter;
        counter++;
        return nextNumber;
    }
    useEffect(() => {
        getUser();
    }, []);
    return (
        <Fragment>
            <div className="container-fluid table_Section">
                <table>
                    <thead>
                        <tr>
                            <th className='text-capitalize text-center'>no.</th>
                            <th className='text-capitalize text-center'>Vehicle</th>
                            <th className='text-capitalize text-center'>Vehicle name</th>
                            <th className='text-capitalize text-center'>fuelType</th>
                            <th className='text-capitalize text-center'>category</th>
                            <th className='text-capitalize text-center'>location</th>
                            {/* <th className='text-capitalize text-center'>Car Reviews</th> */}
                            <th className='text-capitalize text-center'>Add Date</th>
                            <th className='text-capitalize text-center'>Remove Vehicle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr>
                                    <td className='text-center'>{getNextNumber()}</td>
                                    <td className='text-center'><img src={item.photo.secure_url} alt="userPic" /></td>
                                    <td className='text-center'>{item.VehicleName}</td>
                                    <td className='text-center'>{item.fuelType}</td>
                                    <td className='text-center'>{item.category}</td>
                                    <td className='text-center'>{item.location}</td>
                                    {/* <td className='text-center'>{item.numofReviews}</td> */}
                                    <td className='text-center'>{new Date(item.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                                    <td className='text-center'><Link to={`/user/${item._id}`}></Link><Button variant="outline-danger" id={item._id} onClick={deleteUser}><AiFillDelete /></Button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default MyCars
