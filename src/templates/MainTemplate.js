import React from 'react';
import Navigation from '../components/Navigation';
import '../assets/style/MainTemplate.scss';

const MainTemplate = ({ children }) => {
    return (
        <div className="mainTemplate">
            < Navigation />
            { children}
        </div>
    );
}

export default MainTemplate;