import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-3 text-white App-header">
            <Link to="/" className="nav-link px-2 no-underline">
                Home
            </Link>
            <Link to="/signin" className="nav-link px-2 no-underline">
                Sign In
            </Link>
        </header>
    );
};

export default Header;