import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const handleSignOut = (e) => {
        e.preventDefault();
        props.history.push('/signin');
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