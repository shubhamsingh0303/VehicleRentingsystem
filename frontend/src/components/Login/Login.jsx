import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login, clearErrors } from '../../redux/actions/userAction';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            // Navigate to the desired route after successful login
            navigate('/account');
        }
    }, [dispatch, error, isAuthenticated, navigate])

    return (
        <Fragment>
            <div className='m-5'>
                <div className="login">
                    <form className="loginForm" autoComplete='off' method='post' onSubmit={submitHandler}>
                        <label>Email</label>
                        <input placeholder="Enter your E-mail..." className="loginInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input placeholder="Enter your password..." className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="loginButton" type="submit" >
                            Login
                        </button>

                        <button className="loginButton">
                            <Link className="registerLink" to="/register">
                                Create Account
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;
