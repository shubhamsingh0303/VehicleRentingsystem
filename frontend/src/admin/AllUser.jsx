import React, { Fragment, useState, useEffect } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./AllUser.css"
import Button from 'react-bootstrap/esm/Button';

const AllUser = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    // Get ALl User
    const getUser = () => {
        axios.get("http://localhost:3000/admin/users")
            .then(function (res) {
                console.log(res.data.users);
                setData(res.data.users)
            })
            .catch(function (error) { console.log(error) })
    }
    // Change User Role
    const changeUserRole = async (e) => {
        try {
            const confirmData = window.confirm("Are you sure you want to change the user role?");
            if (confirmData) {
                const config = { headers: { "Content-Type": "application/json" } };
                const response = await axios.put(`http://localhost:3000/admin/user/${e.target.id}`, {}, config);
                const users = response.data.users;
                setData(users);
                navigate("/allUsers");
                getUser();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Delete User
    const deleteUser = async (e) => {
        try {
            const confirmData = window.confirm("Are you sure you want to delete user ?");
            if (confirmData) {
                const response = await axios.delete(`http://localhost:3000/admin/user/${e.target.id}`, {});
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
                            <th className='text-capitalize text-center'>User</th>
                            <th className='text-capitalize text-center'>name</th>
                            <th className='text-capitalize text-center'>email</th>
                            <th className='text-capitalize text-center'>role</th>
                            <th className='text-capitalize text-center'>join date</th>
                            <th className='text-capitalize text-center'>chang user role</th>
                            <th className='text-capitalize text-center'>delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr>
                                    <td className='text-center'>{getNextNumber()}</td>
                                    <td className='text-center'><img src={item.photo.secure_url} alt="userPic" /></td>
                                    <td className='text-center'>{item.name}</td>
                                    <td className='text-center'>{item.email}</td>
                                    <td className='text-center'>{item.role}</td>
                                    <td className='text-center'>{new Date(item.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                                    <td className='text-center'><Link to={`/user/${item._id}`}><Button variant="outline-success" id={item._id} onClick={changeUserRole}>Change Role</Button></Link></td>
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

export default AllUser
