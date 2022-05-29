import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {


    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();

        const booking = {

            email: user.email,
            name: user.displayName,
            phone: event.target.phone.value,
            education: event.target.education.value,
            location: event.target.location.value,
            linkdin: event.target.linkdin.value,

        }
        console.log(booking)
        fetch('http://localhost:5000/profile', {
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
                    <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="linkdin" placeholder="Linkdin Link" className="input input-bordered w-full max-w-xs" />

                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>


        </div>
    );
};

export default MyProfile;