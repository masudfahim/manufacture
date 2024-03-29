import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();

        const booking = {

            name: event.target.name.value,
            description: event.target.description.value,
            rating: event.target.rating.value,

        }
        console.log(booking)
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <h2>Add Your Review</h2>
            <div>


                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                    <input type="text" name="name" placeholder=' Name' className="input input-bordered w-full max-w-xs" />

                    <input type="text" name="description" placeholder="Description" className="input input-bordered w-full max-w-xs" />

                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>


        </div>
    );
};

export default AddReview;