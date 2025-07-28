import React from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/navbar'

const RegisterPage = () => {
  return (
    <div data-theme="light" className=''>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">REGISTER</h2>

            <form className="space-y-5">
                
                <div className='space-y-1'>
                    <label>
                    <span>Name</span>
                    </label>
                    <input 
                    type="text" 
                    placeholder='Jane Doe'
                    className='input input-bordered w-full'
                    />
                </div>

                <div className='space-y-1'>
                    <label>
                    <span>Email</span>
                    </label>
                    <input 
                    type="email" 
                    placeholder='jane.doe@example.com'
                    className='input input-bordered w-full'
                    />
                </div>

              <div className='space-y-1'>
                <label>
                  <span>Password</span>
                </label>
                <input 
                type="password" 
                placeholder='*************'
                className='input input-bordered w-full'
                />
              </div>

              <div className='space-y-1'>
                <label>
                  <span>Confirm Password</span>
                </label>
                <input 
                type="password" 
                placeholder='*************'
                className='input input-bordered w-full'
                />
              </div>

              <div className=''>
                <button type="submit" className="btn btn-accent w-full">
                  Register
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button className="btn btn-link text-sm px-0">
                  Already have an account? Login here
                </button>
              </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage
