import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold uppercase">If you have an account </h3>
                        <h3 className="text-3xl font-bold uppercase text-center">please login</h3>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-rose-500">Login</button>
                                <div className='flex gap-3 mt-6 w-full'>
                                    <button className="btn bg-rose-500 w-1/2">sing in with google</button>
                                    <button className="btn bg-rose-500 w-1/2">sing in with github</button>
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