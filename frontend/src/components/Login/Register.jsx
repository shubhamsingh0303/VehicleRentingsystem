import React, { Fragment, useEffect, useState } from 'react';
import "./Register.css";
import { clearErrors, register } from '../../redux/actions/userAction';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [imagepre, setImagepre] = useState('');

    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setImagepre(reader.result);
            setImage(file);
        };
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('name', name);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('file', image);

        dispatch(register(myForm))
    };

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
        navigate(isAuthenticated ? `/account` : ``);
    }, [dispatch, error, isAuthenticated,navigate]);
    return (
        <Fragment>
            <div className='m-5'>
                <div className="register">
                    <form className="registerForm" autoComplete="off" onSubmit={submitHandler}>

                        <label>Name</label>
                        <input type="text" className="registerInput" placeholder="Enter your name..." required name="name" value={name} onChange={e => setName(e.target.value)} />

                        <label>Email</label>
                        <input type="email" className="registerInput" placeholder="Enter your email..." required name="email" value={email} onChange={e => setEmail(e.target.value)} />

                        <label>Password</label>
                        <input type="password" className="registerInput" placeholder="Enter your password..." required name="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <label>SelectProfile</label>
                        <div id="registerImage">
                            <img src={imagepre} />
                            <input type="file" className="registerInput" placeholder="Enter your password..." required name="avatar" accept="image/*" onChange={changeFileHandler} />
                        </div>
                        <button className="loginButton" type="submit" >
                            Register
                        </button>
                        <button className="loginButton" type="submit" >
                            <Link className="registerLink" to="/login">
                                Login
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
