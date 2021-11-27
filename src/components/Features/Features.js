import React, { useEffect, useState } from 'react';
import Feature from './Feature';


const Features = () => {
    const [features, setFeatures] = useState([]);


    useEffect(() => {
        fetch('https://thawing-bastion-33934.herokuapp.com/features')
            .then(res => res.json())
            .then(data => setFeatures(data));

    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Best Feature</h2>
            <div className="service-container">
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;