import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);

    const handleLogOut = () => {
        logOut().then()
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='bg-rose-500'>
            <div className="navbar md:px-10 px-5 ">
                <div className="navbar-start">
                    <Link className="font-bold text-xl uppercase text-white" to='/'>Slice of Spice</Link>


                </div>


                <div className='navbar-end'>

                    <div className="me-0 hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/'>Home</ActiveLink>
                            </li>

                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/blog'>Blog</ActiveLink>
                            </li>

                            {user?.email ? (
                                <li><button
                                    onClick={handleLogOut}
                                    className='text-white text-lg font-semibold'>Logout</button></li>
                            ) : (
                                <div className='lg:flex'>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/login'>Login</ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/register'>Register</ActiveLink>
                                    </li>
                                </div>
                            )}
                            <li ></li>
                            <div className='bg-white p-1 rounded-full w-14 h-14'>
                                <img className='rounded-full' src={user?.photoURL} alt="" />
                            </div>


                        </ul>
                    </div>

                    <div className="dropdown dropdown-bottom dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost me-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-500 rounded-box w-52">
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/'>Home</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/blog'>Blog</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/login'>Login</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/register'>Register</ActiveLink>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;