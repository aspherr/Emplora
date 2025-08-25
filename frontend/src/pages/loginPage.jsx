import React from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router'

const LoginPage = () => {

  const navigate = useNavigate();
  const handleRegRoute = () => {
    navigate('/register');
  } 
  
  return (
    <div data-theme="light">
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-base-200">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">LOGIN</h2>
            
            <form className="space-y-5">
              
              <div>
                <label className="input validator w-full">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
              </div>

              <div>
                <label class="input validator w-full">
                  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  
                  <input
                  type="password"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>

                <p class="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
              </div>
            

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm">Remember Me</span>
                </label>

                <button className="btn btn-link text-sm px-0" type='button'>
                  Forgot Password?
                </button>
              </div>

              <div className=''>
                <button type="submit" className="btn btn-accent w-full">
                  Login
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button onClick={handleRegRoute} className="btn btn-link text-sm px-0" type="button">
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
