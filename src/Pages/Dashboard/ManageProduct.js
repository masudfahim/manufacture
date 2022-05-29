import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageProduct = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();

        const booking = {

            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            availableQuantity: event.target.availableQuantity.value,
            minimumQuantity: event.target.minimumQuantity.value,
            price: event.target.price.value,

        }
        console.log(booking)
        const url = `http://localhost:5000/service`;
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
            <div>


                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                    <input type="text" name="name" placeholder='Product Name' className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="img" placeholder='Image' className="input input-bordered w-full max-w-xs" />

                    <input type="text" name="description" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="availableQuantity" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="minimumQuantity" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />

                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>


        </div>
    );
};

export default ManageProduct;