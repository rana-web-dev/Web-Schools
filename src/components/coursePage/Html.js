import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Html = () => {

    const data = useLoaderData();
    const html = data[0].html;
       

    return (
        <div className='d-flex mt-3'>
            <div className='aside border-end px-3' style={{height: 1000}}>
                {
                    html.map(html => 
                    <li className='list-unstyled py-1'>
                        <Link className='text-decoration-none' key={html.id} to={`${html.id}`}>{html.name}</Link>
                    </li>)
                }
            </div>
            <div className='content px-3'>
                <p>Content</p>
            </div>
        </div>
    );
};

export default Html;