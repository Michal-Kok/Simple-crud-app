import React, { useState } from 'react';
import '../assets/style/ProductsItem.scss';
import db from '../firebase';
import DetailsWindow from './DetailsWindow';

const ProductItem = ({ name, product: details }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleDeleteProduct = () => {
        db.collection("products").doc(details.id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    const showDetailsWindow = () => { console.log('zyje'); setIsVisible(true); }

    return (
        <>
            <div className="productItem">
                <p className="productItem__name" >
                    {name}
                </p>
                <div className="productItem__buttonContainer">
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