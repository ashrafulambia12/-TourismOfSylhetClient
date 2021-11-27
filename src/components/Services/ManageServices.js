import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-bastion-33934.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://thawing-bastion-33934.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deletet')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }
    return (
        <div>
            <h2> manage Products</h2>
            {
                products.map(product => <div key={products._id}>
                    <h3 key={product.id}> {product.serviceName}</h3>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>)
            }
        </div>
    )
};

export default ManageServices;