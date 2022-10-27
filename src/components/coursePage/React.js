import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Reacts = () => {
    const data = useLoaderData();
    const react = data[3].React;
    
    
       

    return (
        <div className='d-flex mt-3'>
            <div className='aside border-end px-3' style={{height: 1000}}>
                {
                    react.map(react => 
                    <li className='list-unstyled py-1'>
                        <Link className='text-decoration-none' key={react.id} to={`${react.id}`}>{react.name}</Link>
                    </li>)
                }
            </div>
            <div className='content px-3'>
                <p>Content</p>
            </div>
        </div>
    );
};

export default Reacts;