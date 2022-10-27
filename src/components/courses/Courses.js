import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                data.map(course => <Course key={course.id} id={course.id} course={course}></Course>)
            }
            </div>
            <div className='text-center my-5'>
                    <Link className='text-decoration-none fs-5 bg-primary text-white rounded p-2' to='/premium'>Get Premium Access</Link>
            </div>
        </div>
    );
};

const Course = ({ course, id }) => {
    console.log(id)
    return (
        <div className='border p-5'>
            <img src={course.images} alt={course.name} />
            <h3 className='my-4'>{course.name}</h3>
            <p>{course.description}</p>
            <Link to={`/courseDetails/${id}`}>
                <button className='btn btn-primary'>Course Details</button>
            </Link>
        </div>
    )
}

export default Courses;