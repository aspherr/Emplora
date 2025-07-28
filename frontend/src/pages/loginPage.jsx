import React from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/navbar'

const LoginPage = () => {
  return (
    <div data-theme="light" className=''>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">LOGIN</h2>

            <form className="space-y-5">

              <div>
                <label>
                  <span>Email</span>
                </label>
                <input 
                type="email" 
                placeholder='jane.doe@example.com'
                className='input input-bordered w-full'
                />
              </div>

              <div>
                <label>
                  <span>Password</span>
                </label>
                
                <input 
                type="password" 
                placeholder='*************'
                className='input input-bordered w-full'
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm">Remember Me</span>
                </label>

                <button className="btn btn-link text-sm px-0">
                  Forgot Password?
                </button>
              </div>


              <div className=''>
                <button type="submit" className="btn btn-accent w-full">
                  Login
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button className="btn btn-link text-sm px-0">
                  Don't have an account? Register here
                </button>
              </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
