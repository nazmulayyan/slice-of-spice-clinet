import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-rose-500'>
            <div className="navbar md:px-10 px-5">
                <div className="navbar-start">
                    <Link className="font-bold text-xl uppercase text-white" to='/'>Slice of Spice</Link>
                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost me-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-500 rounded-box w-52">
                            <li><Link className='text-white text-lg font-semibold' to='/'>Home</Link></li>
                            <li><Link className='text-white text-lg font-semibold' to='/blog'>Blog</Link></li>
                            <li><Link className='text-white text-lg font-semibold' to='/login'>Login</Link></li>
                            <li><Link className='text-white text-lg font-semibold' to='/register'>Register</Link></li>
                        </ul>

                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='text-white text-lg font-semibold' to='/'>Home</Link></li>
                        <li><Link className='text-white text-lg font-semibold' to='/blog'>Blog</Link></li>
                        <li><Link className='text-white text-lg font-semibold' to='/login'>Login</Link></li>
                        <li><Link className='text-white text-lg font-semibold' to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;