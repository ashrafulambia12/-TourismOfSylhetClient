import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://thawing-bastion-33934.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div id="services">
            <h1 className="text-primary my-5">Our Services</h1>
            <div className="service-container row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;