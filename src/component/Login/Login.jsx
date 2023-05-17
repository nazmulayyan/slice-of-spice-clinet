import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginUser, handleGoogleSignIn, handleGithubSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setError('Please enter both email and password.');
        } else {
            setError('');
            loginUser(email, password)
                .then(result => {
                    const from = location.state?.from || '/';
                    console.log(result.user);
                    navigate(from); // Redirect to chefDetails page
                })
                .catch((error) => {
                    console.log(error.message);
                    setError('Login failed. Please check your credentials.');
                });
        }
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-20">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold uppercase">If you have an account </h3>
                        <h3 className="text-3xl font-bold uppercase text-center">please login</h3>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {error && <p className="text-red-500">{error}</p>}

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>

                            <div className="form-control mt-6">

                                <button onClick={handleLogin} className="btn bg-rose-500">Login</button>

                                <div className='flex gap-3 mt-6 w-full'>

                                    <button onClick={handleGoogleSignIn} className="btn bg-rose-500 w-1/2">sing in with <FcGoogle className='ms-1 bg-white rounded-lg text-lg' /></button>

                                    <button onClick={handleGithubSingIn} className="btn bg-rose-500 w-1/2">sing in with <FaGithub className='bg-gray-500 ms-1 rounded-lg text-lg' /></button>

                                </div>
                            </div>

                            <Link className='text-rose-500 uppercase font-semibold mt-3' to='/register'>don't have an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;