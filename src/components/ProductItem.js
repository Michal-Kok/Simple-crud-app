import React, { useState } from 'react';
import '../assets/style/ProductsItem.scss';
import DetailsWindow from './DetailsWindow';

const ProductItem = ({ name, product: details }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleDeleteProduct = () => {
        console.log('usuwamy');
    }

    const showDetailsWindow = () => { console.log('zyje'); setIsVisible(true); }

    return (
        <>
            <div className="productItem">
                <p className="productItem__name" >
                    {name}
                </p>
                <button
                    className="productItem__button"
                    onClick={handleDeleteProduct} >
                    Delete
                </button>
                <button
                    className="productItem__button"
                    onClick={showDetailsWindow} >
                    Details
                </button>
            </div>
            { isVisible
                ? (< DetailsWindow
                    details={details}
                    closeWindow={() => setIsVisible(false)} />)
                : null}
        </>
    )
}

export default ProductItem;