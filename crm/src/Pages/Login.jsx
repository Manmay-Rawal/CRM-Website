import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import loginImage from '../image/LoginImage.avif';
import { useAuth } from '../Pages/auth/AuthContext';

function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { login } = useAuth(); // Use the login function from context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.email && userData.password) {
            axios.post("http://localhost:4000/user/login", userData)
                .then(res => {
                    if (res.status === 200) {
                        const userData = res.data; // Assuming your API returns user data
                        login(userData); // Set user data in context
                        navigate('/');
                    }
                })
                .catch(error => console.log(error));
        } else {
            alert("Provide all fields");
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
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                                    <div className="form-outline mb-4">
                                        <input 
                                            type="email" 
                                            id="form2Example18" 
                                            className="form-control form-control-lg" 
                                            name="email" 
                                            required 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-label" htmlFor="form2Example18">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input 
                                            type="password" 
                                            id="form2Example28" 
                                            className="form-control form-control-lg" 
                                            name="password" 
                                            required 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-label" htmlFor="form2Example28">Password</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                                    </div>

                                    <p className="small mb-5 pb-lg-2">
                                        <a className="text-muted" href="#!">Forgot password?</a>
                                    </p>
                                    <p>
                                        Don't have an account? <Link to="/register" className="link-info">Register here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src={loginImage} alt="Login" className="w-50 vh-50" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
