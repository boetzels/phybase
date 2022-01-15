import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeSession } from '../../utils/session.utils';


const Header = () => {
    const navigate = useNavigate();
    const handleSignOut = (e) => {
        e.preventDefault();
        removeSession();
        navigate("/signin");
    };

    return (
        <header className="p-3 text-white App-header">
            <Link to="/" className="nav-link px-2 no-underline">
                Home
            </Link>
            <Link to="/signin" className="nav-link px-2 no-underline">
                Sign In
            </Link>
            <Link to="/dash" className="nav-link px-2 no-underline">
                Dashboard
            </Link>
            <Link to="/signout" className="nav-link float-end px-2 no-underline" onClick={ handleSignOut }>
                SignOut
            </Link>
        </header>
    );
};

export default Header;