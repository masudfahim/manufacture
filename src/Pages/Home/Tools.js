import React, { useEffect, useState } from 'react';
import Tool from './Tool';


const Tools = () => {

    const [tools, setTool] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }



            </div>
        </div>
    );
};



export default Tools;

