import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
    const { _id, serviceName, price, description, img } = feature;
    console.log(feature)
    return (
        <div>
            <img src={img} alt="" />
            <h3>{serviceName}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {serviceName.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Feature;