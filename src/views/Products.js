import React, { useEffect, useState } from 'react';
import db from '../firebase';
import ProductItem from '../components/ProductItem';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("products").onSnapshot((snapshot) => {
            const productsArray = [];
            snapshot.forEach(doc => {
                productsArray.push({ ...doc.data(), id: doc.id });
            })
            setProducts(productsArray);
        });

        return unsubscribe
    }, []);

    return (
        <div className="productsContainer">
            <div className="productsContainer__list">
                {products.map(product => {
                    console.log(products)
                    return (<ProductItem
                        key={product.cmp_name}
                        productName={product.cmp_name} />)
                })}
            </div>
        </div>
    )
}

export default Products;