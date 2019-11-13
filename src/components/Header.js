import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <Link to='/'>
        <img src={logo} className="App-logo" alt="logo" />
    </Link>
)

export default Header;