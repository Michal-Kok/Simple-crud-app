import React from 'react';
import '../assets/style/NavList.scss';

const NavList = () => {
    return (
        <ul className="list">
            <li className="list__item">Dashboard</li>
            <li className="list__item">Products</li>
            <li className="list__item">Campaigns</li>
        </ul>
    );
}

export default NavList;