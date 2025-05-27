import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './Hero.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 flex-grow-1 ml-5">
        {/* Left Side - Image */}
        <div className="col-lg-6 col-md-6 d-none d-md-flex text-light flex-column justify-content-center p-5" style={{ height: '100%' }}>
          <img
            src={heroImage}
            alt="Visual"
            className="img-fluid w-100 h-100 object-fit-contain"
            style={{ maxHeight: '95vh', objectFit: 'contain' }}
          />
        </div>

        {/* Right Side - SignUp Form */}
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center min-vh-100 text-white py-5">
          <div style={{ maxWidth: '550px', width: '100%' }} className="p-4 mx-auto">
            <h2 className="mt-2 text-start">Sign Up</h2>
            <p className="mb-4 text-start">Manage your workspace seamlessly. Sign in to continue.</p>

            <form className="text-start">
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-white custom-input"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-white custom-input"
                  id="password"
                  placeholder="***************"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-white custom-input"
                  id="confirmPassword"
                  placeholder="***************"
                  required
                />
              </div>

              {/* Sign Up Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 border-white" />
              <span className="mx-2 text-white">or</span>
              <hr className="flex-grow-1 border-white" />
            </div>

            {/* Google Sign Up */}
            <button className="btn btn-outline-secondary mb-3 w-100 d-flex align-items-center justify-content-center gap-2 text-white">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google"
              />
              Sign Up with Google
            </button>

            {/* Microsoft Sign Up */}
            <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 text-white">
              <img
                src="https://img.icons8.com/color/16/000000/microsoft.png"
                alt="Microsoft"
              />
              Sign Up with Microsoft
            </button>

            {/* Sign In Link */}
            <p className="text-center mt-4">
              Already have an account? <Link to="/" style={{ color: "#8854C0" }}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
