import React from 'react';

const ProductItem = ({ productName }) => {

    // console.log(productName);

    return (
        <div className="productItem">
            <p className="productItem__name" >
                {productName}
            </p>
            <button
                className="productItem__button" >
                Delete
           </button>
            <button
                className="productItem__button" >
                Details
           </button>
        </div>
    )
}

export default ProductItem;