import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://thawing-bastion-33934.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://thawing-bastion-33934.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deletet')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    services.map(service => <div key={services._id}>
        <h3>{service.firstName}</h3>
        <button onClick={() => handleDelete(service._id)}>Delete</button>
    </div>);


    return (
        <div>

        </div>
    );
};

export default ManageServices;