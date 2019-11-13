import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <Link to='/'>
        <img src={logo} className="App-logo" alt="logo" width="65px" height="65px" />
    </Link>
)

export default Header;