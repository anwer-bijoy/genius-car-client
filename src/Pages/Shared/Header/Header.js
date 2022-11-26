import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { users, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/orders">Orders</Link>
        </li>

        <li>
            {
                users ?
                    <>
                        <button onClick={handleLogOut}>Sign Out</button>
                        <p>{users?.email}</p>
                    </>
                    :
                    <Link to="/login">Login</Link>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 items-center pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img className='max-h-[86px]' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button href="/" className="py-3 px-[28px] text-[#FF3811] border border-[#FF3811] font-bold rounded-md duration-500 hover:bg-[#FF3811] hover:text-white">Get started</button>
            </div>
        </div>
    );
};

export default Header;