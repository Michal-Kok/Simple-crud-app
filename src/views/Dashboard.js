import React from 'react';
import '../assets/style/Dashboard.scss';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <h1 className="dashboard__header__title">
                    Show your products.
                </h1>
                <p className="dashboard__header__text">Better.</p>
                <p className="dashboard__header__text">Faster.</p>
                <p className="dashboard__header__text">Clearer.</p>
            </header>
        </div>
    )
}

export default Dashboard;