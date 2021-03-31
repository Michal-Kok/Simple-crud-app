import React, { useState } from 'react';
import '../assets/style/DetailsWindow.scss';
import useForm from '../helpers/useForm';

const DetailsWindow = ({ details, closeWindow }) => {

    const { cmp_name, bid_amount, cmp_fund, keywords, radius, status, town, key } = details;
    const [isEditing, setIsEditing] = useState(false);
    const [values, handleInputChange, handleSubmit, errors] = useForm(setIsEditing, details);

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
                                    id="cmp_name"
                                    name="cmp_name"
                                    type="text"
                                    placeholder="Campaign name..."
                                    onChange={handleInputChange}
                                    value={values.cmp_name} />
                                <input
                                    id="keywords"
                                    name="keywords"
                                    type="text"
                                    placeholder="Keywords..."
                                    onChange={handleInputChange}
                                    value={values.keywords} />
                                <input
                                    id="bid_amount"
                                    name="bid_amount"
                                    type="number"
                                    placeholder="Bid amount..."
                                    onChange={handleInputChange}
                                    value={values.bid_amount} />
                                <input
                                    id="cmp_fund"
                                    name="cmp_fund"
                                    type="text"
                                    placeholder="Campaign fund..."
                                    onChange={handleInputChange}
                                    value={values.cmp_fund} />
                                <label className="detailsWindow__form__statusLabel" htmlFor="status">
                                    Choose status:
                                <input
                                        id="status"
                                        name="status"
                                        type="checkbox"
                                        onChange={handleInputChange}
                                        checked={values.status} />
                                </label>
                                <label htmlFor="town">
                                    <select
                                        className="detailsWindow__form__select"
                                        name="town" id="town"
                                        onChange={handleInputChange}
                                        value={values.town} >
                                        <option value="town">Select town</option>
                                        <option value="Cracow">Cracow</option>
                                        <option value="Warsaw">Warsaw</option>
                                        <option value="Gdansk">Gdansk</option>
                                        <option value="Wroclaw">Wroclaw</option>
                                    </select>
                                </label>
                                <input
                                    id="radius"
                                    name="radius"
                                    type="number"
                                    placeholder="Radius (KM)..."
                                    onChange={handleInputChange}
                                    value={values.radius} />
                                <button className="detailsWindow__button">
                                    Save
                            </button>
                                {errors
                                    ? <p className="detailsWindow__form__error">{errors}</p>
                                    : null}
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
                            Bid amount: <span>{bid_amount}</span>.
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