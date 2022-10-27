import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Css = () => {
    const data = useLoaderData();
    const css = data[1].css;
    console.log(data[1].css)
       

    return (
        <div className='d-flex mt-3'>
            <div className='aside border-end px-3' style={{height: 1000}}>
                {
                    css.map(css => 
                    <li className='list-unstyled py-1'>
                        <Link className='text-decoration-none' key={css.id} to={`${css.id}`}>{css.name}</Link>
                    </li>)
                }
            </div>
            <div className='content px-3'>
                <p>Content</p>
            </div>
        </div>
    );
};

export default Css;