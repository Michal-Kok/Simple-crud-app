import React, { useState } from 'react';
import '../assets/style/DetailsWindow.scss';

const DetailsWindow = ({ details: { cmp_name, bid_amount, cmp_fund, keywords, radius, status, town } }) => {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className="popUpOverlay"></div>
            <div className="detailsWindow">
                {isEditing
                    ? (
                        <form action="submit" className="detailsWindow__form">
                            <label htmlFor="name">
                                <input id="name" name="name" type="text" />
                            </label>
                            <label htmlFor="keywords">
                                <input id="keywords" name="keywords" type="text" />
                            </label>
                            <label htmlFor="bid">
                                <input id="bid" name="bid" type="text" />
                            </label>
                            <label htmlFor="fund">
                                <input id="fund" name="fund" type="text" />
                            </label>
                            <label htmlFor="status">
                                <input id="status" name="status" type="checkbox" />
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
                            <label htmlFor="radius">
                                <input id="radius" name="radius" type="number" />
                            </label>
                        </form>
                    )
                    : (<>
                        <h1 className="detailsWindow__title">
                            {cmp_name}
                        </h1>
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
                    </>
                    )}
            </div>
        </>
    );
}

export default DetailsWindow;;