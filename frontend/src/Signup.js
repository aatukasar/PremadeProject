import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import './style.css'

function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        MobileNumber: '',
        Age: '',
        CollegeName: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
    console.log("This is debug",event.target.value)
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let error= (Validation(values));
        console.log(error)
        if(error.name === "" && error.email === "" && error.password === "" && error.MobileNumber === "" && error.Age === "" && error.CollegeName === ""){
            console.log(values)
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 SignupPage'>
        <div className='bg-white p-3 rounder w-25'>
            <h2>Sign-Up</h2>
            <form action=""onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Name' name='name' 
                    onChange={handleInput} className='form-control rounder-0'/>
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email'
                    name='email' onChange={handleInput} className='form-control rounder-0'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password'
                    name='password' onChange={handleInput} className='form-control rounder-0'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Mobile Number"><strong>Mobile Number</strong></label>
                    <input type="integer" placeholder='Enter Mobile Number'
                    name='MobileNumber' onChange={handleInput} className='form-control rounder-0'/>
                    {errors.MobileNumber && <span className='text-danger'> {errors.MobileNumber}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="Age"><strong>Age</strong></label>
                    <input type="Integer" placeholder='Enter Age'
                    name='Age' onChange={handleInput} className='form-control rounder-0'/>
                    {errors.age && <span className='text-danger'> {errors.age}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="College Name"><strong>College</strong></label>
                    <input type="text" placeholder='Enter College Name'
                    name='CollegeName' onChange={handleInput} className='form-control rounder-0'/>
                    {errors.CollegeName && <span className='text-danger'> {errors.CollegeName}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounder-0'> Sign up </button>
                <p>You agree to our terms and conditions</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounder-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
)
}

export default Signup