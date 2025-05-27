import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css'; // Use same styling for consistency
import heroImage from './Hero.png';
import envp from './Envelope.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
      <div className="row w-100 flex-grow-1 ml-5">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 d-none d-md-flex text-light flex-column justify-content-center p-5" style={{ height: '100%' }}>
          <img
            src={heroImage}
            alt="image not found"
            className="img-fluid w-100 h-100 object-fit-contain"
            style={{ maxHeight: '95vh', objectFit: 'contain' }}
          />
        </div>

        {/* Forgot Password Form */}
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center min-vh-100 text-white py-5">
          <div style={{ maxWidth: '550px', width: '100%' }} className="p-4 mx-auto">
            <h2 className="mt-2 text-start">Forgot Your Password?</h2>
            <p className="mb-4 text-start">Don't worry! Enter your email address, and we’ll send you a link to reset it.</p>

            <form className="text-start" onSubmit={handleSubmit}>
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

              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Send Reset Link
                </button>
              </div>
            </form>
             <p className="text-center mt-4">
                Back to <Link to="/" style={{ color: "#8854C0" }}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Themed Popup */}
{showPopup && (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75">
    <div
      className="bg-dark text-white p-4 rounded shadow"
      style={{ maxWidth: '400px', width: '90%' }}
    >
      <div className="text-center">
        <div className="d-flex justify-content-center mb-3">
          <img
            src={envp}
            alt="Envelope"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain'
            }}
          />
        </div>
        <h5 className="mb-3" style={{ color: '#8854C0' }}>Link Sent Successfully!</h5>
        <p className="mb-4">Check your inbox! We’ve sent you an email with instructions to reset your password.</p>
      </div>
      <div className="text-end">
        {/* <button
          className="btn"
          style={{
            backgroundColor: '#8854C0',
            color: 'white',
            padding: '6px 18px',
            borderRadius: '5px',
          }}
          onClick={() => setShowPopup(false)}
        >
          Okay
        </button> */}
        <button
            className="btn"
            style={{
            backgroundColor: '#8854C0',
            color: 'white',
            borderRadius: '5px',
        }}
        onClick={() => navigate('/otp')}
        >
  Okay
</button>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ForgotPassword;

