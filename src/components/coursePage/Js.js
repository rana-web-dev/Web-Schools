import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Js = () => {
    const data = useLoaderData();
    const js = data[2].javaScript;
    console.log(data)
    
       

    return (
        <div className='d-flex mt-3'>
            <div className='aside border-end px-3' style={{height: 1000}}>
                {
                    js.map(js => 
                    <li className='list-unstyled py-1'>
                        <Link className='text-decoration-none' key={js.id} to={`${js.id}`}>{js.name}</Link>
                    </li>)
                }
            </div>
            <div className='content px-3'>
                <p>Content</p>
            </div>
        </div>
    );
};

export default Js;