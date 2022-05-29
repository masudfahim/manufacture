import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, description, rating } = review




    return (
        <div class="card w-96 bg-base-100 shadow-xl">

            <div class="card-body">
                <h2 class="card-title">Name:{name}</h2>
                <p>Description:{description}</p>
                <p>Rating:{rating}</p>

            </div>
        </div>
    );
};

export default ReviewCard;