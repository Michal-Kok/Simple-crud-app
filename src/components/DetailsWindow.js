import React, { useState } from 'react';
import '../assets/style/DetailsWindow.scss';

const DetailsWindow = ({ details: { cmp_name, bid_amount, cmp_fund, keywords, radius, status, town }, closeWindow }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <>
            <div onClick={closeWindow} className="popUpOverlay"></div>
            <div className="detailsWindow">
                {isEditing
                    ? (
                        <>
                            <h2 className="detailsWindow__title">
                                Change campaign details.
                            </h2>
                            <form onSubmit={handleSubmit} className="detailsWindow__form">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Campaign name..." />
                                <input
                                    id="keywords"
                                    name="keywords"
                                    type="text"
                                    placeholder="Keywords..." />
                                <input
                                    id="bid"
                                    name="bid"
                                    type="text"
                                    placeholder="Bid amount..." />
                                <input
                                    id="fund"
                                    name="fund"
                                    type="text"
                                    placeholder="Campaign fund..." />
                                <label className="detailsWindow__form__statusLabel" htmlFor="status">
                                    Choose status:
                                <input
                                        id="status"
                                        name="status"
                                        type="checkbox" />
                                </label>
                                <label htmlFor="town">
                                    <select name="town" id="town">
                                        <option value="town">Select town</option>
                                        <option value="cracow">Crocow</option>
                                        <option value="warsaw">Warsaw</option>
                                        <option value="gdansk">Gdansk</option>
                                        <option value="wroclaw">Wroclaw</option>
                                    </select>
                                </label>
                                <input
                                    id="radius"
                                    name="radius"
                                    type="number"
                                    placeholder="Radius (KM)..." />
                                <button className="detailsWindow__button">
                                    Save
                            </button>
                            </form>
                        </>
                    )
                    : (<>
                        <h2 className="detailsWindow__title">
                            {cmp_name}
                        </h2>
                        <p className="detailsWindow__keywords">
                            Important keywords: <span>{keywords}</span>.
                        </p>
                        <p className="detailsWindow__bidAmount">
                            Minimal bid amount: <span>{bid_amount}</span>.
                        </p>
                        <p className="detailsWindow__fund">
                            Campaign fund: <span>{cmp_fund}</span>.
                        </p>
                        <p className="detailsWindow__status">
                            Actual status: <span>{status ? 'ON' : 'OFF'}</span>.
                        </p>
                        <p className="detailsWindow__town">
                            Town of Campaign: <span>{town}</span>.
                        </p>
                        <p className="detailsWindow__radius">
                            Radius: <span>{radius}</span> km.
                        </p>
                        <button
                            className="detailsWindow__button"
                            onClick={() => setIsEditing(true)} >
                            Edit
                        </button>
                    </>
                    )}
            </div>
        </>
    );
}

export default DetailsWindow;;