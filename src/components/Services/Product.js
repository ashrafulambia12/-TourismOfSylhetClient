import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, serviceName, srt, price, img } = product;
    return (
        <div className='col-md-4'>
            <img width='250px' height='200px' src={img} alt="" />
            <h3>{serviceName}</h3>
            <h5>Discription: {srt}</h5>
            <h5>Price: {price}</h5>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning my-5">Book {serviceName.toLowerCase()}</button>
            </Link>
        </div>


    );
};

export default Product;