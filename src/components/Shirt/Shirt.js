import React from 'react';
import { divide, multiply } from '../../utilities2/calculate2';



const Shirt = () => {
    const n1 = 20;
    const n2 = 5;
    const price = multiply(n1, n2);
    const shirt = divide(n1, n2)
    return (
        <div>
            <h2>This is my shirt</h2>
            <p>Price:{price} and Shirts: {shirt} ta </p>
        </div>
    );
};

export default Shirt;