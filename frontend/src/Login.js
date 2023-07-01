import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'
import './style.css'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log(res.data)
                if(res.data === "Success") {
                    navigate(`/Home/${values.email[0]}`);
                } else {
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }

    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='bg-white p-3 rounder w-25'>
            <h2>Sign-In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name ='email'
                    onChange={handleInput} className='form-control rounder-0'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounder-0'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounder-0'><strong>Log in</strong></button>
                <p>You agree to our terms and conditions</p>
                <div onClick={()=>{window.location='/signup'}} className='btn btn-default border w-100 bg-light rounder-0 text-decoration-none'>Create Account</div>
            </form>
        </div>
    </div>
  )
}

export default Login