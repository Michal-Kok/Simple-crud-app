import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/NavList.scss';

const NavList = () => {
    return (
        <ul className="list">
            <li className="list__item">
                <Link to="/">Dashboard</Link>
            </li>
            <li className="list__item">
                <Link to="/products">Products</Link>
            </li>
        </ul>
    );
}

export default NavList;