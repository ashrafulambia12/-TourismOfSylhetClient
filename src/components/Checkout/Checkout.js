import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Checkout = () => {
    const { _id } = useParams();

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-bastion-33934.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.find(pd => pd?._id === _id)
    // console.log(products)
    // console.log(user)



    return (
        <div className="container">
            <div>
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Service Id</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{product?.serviceName}</td>
                            <td>{product?.id}</td>
                            <td>${product?.price}</td>
                        </tr>
                    </tbody>

                </table>
                <div className="container d-flex justify-content-between">

                    <h3>Total</h3>
                    <h5>${product?.price}</h5>

                </div>
            </div>
            <div className="container text-end">
                <button className="btn btn-warning text-end"><Link className="link-item-style" to={`/orders`}>CheckOut</Link></button></div>
        </div>
    );
};

export default Checkout;