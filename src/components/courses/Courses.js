import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './courses.css';

const Courses = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <div className='my-5'>
                <h2 className='text-center'>All Courses Here</h2>
            </div>
            <div className='grid'>
            {
                data.map(course => <Course key={course.id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <div className='border p-5'>
            <img src={course.images} alt={course.name} />
            <h3 className='my-4'>{course.name}</h3>
            <p>{course.description}</p>
            <button className='btn btn-primary'>Course Details</button>
        </div>
    )
}

export default Courses;