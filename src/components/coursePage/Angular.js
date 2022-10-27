import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Angular = () => {
    const data = useLoaderData();
    const angular = data[4].angular;
    console.log(data[4].angular)


    return (
        <div className='d-flex mt-3'>
            <div className='aside border-end px-3' style={{ height: 1000 }}>
                {
                    angular.map(angular =>
                        <li className='list-unstyled py-1'>
                            <Link className='text-decoration-none' key={angular.id} to={`${angular.id}`}>{angular.name}</Link>
                        </li>)
                }
            </div>
            <div className='content px-3'>
                
            </div>
        </div>
    );
};

export default Angular;