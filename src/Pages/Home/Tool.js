import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, description, availableQuantity, minimumQuantity, price } = tool
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/tool/${id}`);
    }




    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure className='px-10 pt-10'><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p> AvailableQuantity:{availableQuantity}</p>
                <p>minimumQuantity:{minimumQuantity}</p>
                <p>Price:{price}</p>
                <div class="card-actions justify-center">
                    <button onClick={() => navigateToServiceDetail(_id)} class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;