import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import loginImage from '../image/LoginImage.avif';

function Register() {
    const [userData, setUserData] = useState({
        firstName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value.trim() });
    };

    const validateForm = () => {
        const { email, password } = userData;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        if (password.length < 6) {
            alert("Password should be at least 6 characters");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post("http://localhost:4000/user/signup", userData)
                .then(res => {
                    if (res.status === 201) {
                        alert("Registration successful!");
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert("An error occurred. Please try again.");
                });
        }
    };

    return (
        <>
            <section className="vh-75">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Register</h3>
                                    <div className="form-outline mb-4">
                                        <input 
                                            type="text" 
                                            id="registerName" 
                                            className="form-control form-control-lg" 
                                            name="firstName" 
                                            required 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-label" htmlFor="registerName">Full Name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input 
                                            type="email" 
                                            id="registerEmail" 
                                            className="form-control form-control-lg" 
                                            name="email" 
                                            required 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-label" htmlFor="registerEmail">Email address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input 
                                            type="password" 
                                            id="registerPassword" 
                                            className="form-control form-control-lg" 
                                            name="password" 
                                            required 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-label" htmlFor="registerPassword">Password</label>
                                    </div>
                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="submit">Register</button>
                                    </div>
                                    <p>Already have an account? <Link to='/login' className="link-info">Login here</Link></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src={loginImage} alt="Register" className="w-50 vh-50" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
