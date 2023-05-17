import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    const handleToggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <div className='bg-rose-500'>
            <div className='navbar md:px-10 px-5'>
                <div className='navbar-start'>
                    <Link className='font-bold text-xl uppercase text-white' to='/'>
                        Slice of Spice
                    </Link>
                </div>

                <div className='navbar-end'>
                    <div className='me-0 hidden lg:flex'>
                        <ul className='menu menu-horizontal px-1'>
                            <li>
                                <ActiveLink className='' to='/'>
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='text-white text-lg font-semibold' to='/blog'>
                                    Blog
                                </ActiveLink>
                            </li>
                            {(user?.email || user?.providerData) && (
                                <li>
                                    <button onClick={handleLogOut} className='text-white text-lg font-semibold'>
                                        Logout
                                    </button>
                                </li>
                            )}
                            {!user?.email && !user?.providerData && (
                                <div className='lg:flex'>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/login'>
                                            Login
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/register'>
                                            Register
                                        </ActiveLink>
                                    </li>
                                </div>
                            )}
                            {user?.photoURL && (
                                <div
                                    className='relative bg-white p-1 rounded-full w-14 h-14'
                                    onMouseEnter={handleToggleTooltip}
                                    onMouseLeave={handleToggleTooltip}
                                >
                                    {showTooltip && (
                                        <span className='absolute -bottom-14 -left-4 bg-gray-800 text-white px-2 py-1 rounded shadow'>
                                            {user.displayName}
                                        </span>
                                    )}
                                    <img className='rounded-full ' src={user.photoURL} alt='User Photo' />
                                </div>
                            )}
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
                            {(user?.email || user?.providerData) && (
                                <li>
                                    <button onClick={handleLogOut} className='text-white text-lg font-semibold'>
                                        Logout
                                    </button>
                                </li>
                            )}
                            {!user?.email && !user?.providerData && (
                                <div className='lg:flex'>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/login'>
                                            Login
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink className='text-white text-lg font-semibold' to='/register'>
                                            Register
                                        </ActiveLink>
                                    </li>
                                </div>
                            )}
                            {user?.photoURL && (
                                <div
                                    className='relative bg-white p-1 rounded-full w-14 h-14'
                                    onMouseEnter={handleToggleTooltip}
                                    onMouseLeave={handleToggleTooltip}
                                >
                                    {showTooltip && (
                                        <span className='absolute top-0 left-full bg-gray-800 text-white px-2 py-1 rounded shadow'>
                                            {user.displayName}
                                        </span>
                                    )}
                                    <img className='rounded-full ' src={user.photoURL} alt='User Photo' />
                                </div>
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
