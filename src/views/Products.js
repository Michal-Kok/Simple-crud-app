import React, { useEffect, useState } from 'react';
import db from '../firebase';
import ProductItem from '../components/ProductItem';
import '../assets/style/Products.scss';

const defaultCampaignData = {
    bid_amount: 50,
    cmp_fund: 0,
    cmp_name: "still to set",
    keywords: "",
    radius: 505,
    status: true,
    town: ""
}

const Products = () => {

    const [products, setProducts] = useState([]);
    const [inputVisibility, setInputVisibility] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let isExist = false;

        products.forEach(product => {
            if (product.id === inputValue) {
                setError("it's already exist!");
                isExist = !isExist;
            }
        })
        if (inputValue === '') {
            setError("Oh no. You can't sell nothing!");
            return;
        }
        !isExist && db.collection("products").doc(inputValue).set(defaultCampaignData)
            .then(() => {
                console.log("Document successfully written!");
                setError('');
                setInputValue('');
            })
            .catch((error) => {
                setError(error);
            });

    }

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
                {products.map(product => (<ProductItem
                    key={product.id}
                    name={product.id}
                    product={product} />)
                )}
            </div>
            {inputVisibility
                ? (<form
                    onSubmit={handleSubmit}
                    className="productsContainer__form">
                    <input type="text"
                        className="productsContainer__form__input"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="Type name..." />
                    <button className="productsContainer__form__button">
                        Add
                    </button>
                </form>)
                : null}
            <button
                className="productsContainer__button"
                onClick={() => { setInputVisibility(!inputVisibility); setError("") }} >
                {inputVisibility ? "Cancel" : "Add product"}
            </button>
            {error ? (<p className="productsContainer__error">{error}</p>) : null}
        </div>
    )
}

export default Products;