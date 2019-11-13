import React from 'react';
import { Link } from 'react-router-dom';

const InvalidUrl = () => (
    <div>
        <div>Url not found!</div>
        <Link to="/">Home</Link>
    </div>
)

export default InvalidUrl;
