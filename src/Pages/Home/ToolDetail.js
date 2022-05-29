import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ToolDetail = ({ tool }) => {



    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();

        const booking = {

            email: user.email,
            name: user.displayName,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value
        }
        console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    return (
        <div>
            <div>


                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>


        </div>
    );
};

export default ToolDetail;