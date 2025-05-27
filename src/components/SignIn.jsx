import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import heroImage from './Hero.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './Firebase';

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (error) {
      console.error("Google Sign-In error:", error.code, error.message);
    }
  };

  // Prevent page reload on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: add email/password login logic if needed
    console.log("Email/password login not implemented.");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 flex-grow-1 ml-5">
        {/* Left Section (Image) */}
        <div className="col-lg-6 col-md-6 d-none d-md-flex text-light flex-column justify-content-center p-5" style={{ height: '100%' }}>
          <img 
            src={heroImage} 
            alt="image not found" 
            className="img-fluid w-100 h-100 object-fit-contain" 
            style={{ maxHeight: '95vh', objectFit: 'contain' }} 
          />
        </div>

        {/* Right Section (Form) */}
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center min-vh-100 text-white py-5">
          <div style={{ maxWidth: '550px', width: '100%' }} className="p-4 mx-auto">
            <h2 className="mt-2 text-start">Sign In</h2>
            <p className="mb-4 text-start">Manage your workspace seamlessly. Sign in to continue.</p>

            <form className="text-start" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-white custom-input"
                  id="email"
                  placeholder="navinash@workhive.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label text-white">Password</label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-white custom-input"
                  id="password"
                  placeholder="***************"
                  required
                />
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-2">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="form-text" style={{ color: "#8854C0", textDecoration: 'none' }}>
                  Forgot Password?
                </Link>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Sign In
                </button>
              </div>
            </form>

            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 border-white" />
              <span className="mx-2 text-white">or</span>
              <hr className="flex-grow-1 border-white" />
            </div>

            {/* Google Sign In */}
            <button
              className="btn btn-outline-secondary mb-3 w-100 d-flex align-items-center justify-content-center gap-2 text-white"
              onClick={handleGoogleSignIn}
            >
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
              Sign In with Google
            </button>

            {/* Microsoft Sign In (placeholder) */}
            <button
              className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 text-white"
            >
              <img src="https://img.icons8.com/color/16/000000/microsoft.png" alt="Microsoft" />
              Sign In with Microsoft
            </button>

            <p className="text-center mt-4">
              Don’t have an account?{' '}
              <Link to="/signup" style={{ color: "#8854C0", textDecoration: "none" }}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
