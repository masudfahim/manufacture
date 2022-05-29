import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Review</h3>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }



            </div>
        </div>
    );
};

export default Review;