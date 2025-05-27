import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import heroImage from './Hero.png';
import { FaClock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || localStorage.getItem('recoveryEmail') || 'your email address';

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 flex-grow-1 ml-5">
        {/* Left Hero Image */}
        <div className="col-lg-6 col-md-6 d-none d-md-flex text-light flex-column justify-content-center p-5">
          <img
            src={heroImage}
            alt="Hero"
            className="img-fluid w-100 h-100 object-fit-contain"
            style={{ maxHeight: '95vh', objectFit: 'contain' }}
          />
        </div>

        {/* OTP Form Section */}
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center min-vh-100 text-white py-5">
          <div className="p-4 mx-auto" style={{ maxWidth: '550px', width: '100%' }}>
            <h2 className="text-start">Enter OTP</h2>
            <p className="mb-4 text-start">
              Enter the OTP that we have sent you on your email address <br />
              <span className="text-white">{email}</span>
            </p>

            {/* OTP Inputs */}
            <div className="d-flex justify-content-between mb-3">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="form-control text-center bg-dark text-white border-white mx-1"
                  style={{ width: '45px', height: '45px' }}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                />
              ))}
            </div>

            {/* Change Email */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <button
                className="btn btn-link p-0"
                style={{ color: '#8854C0', textDecoration: 'none' }}
                onClick={() => navigate('/forgot-password')}
              >
                Change Email Address
              </button>
            </div>

            {/* Continue Button */}
            <button
              className="btn w-100"
              style={{ backgroundColor: '#8854C0', color: 'white' }}
              onClick={() => navigate('/new-password')}
            >
              Continue
            </button>

            {/* Timer placed below the button */}
            <div className="d-flex justify-content-start align-items-center text-white mt-3">
              <FaClock className="me-2" />
              <span>{timer > 0 ? `${timer}s` : 'OTP expired'}</span>
            </div>

            <p className="text-center mt-4">
              Already have an account? <Link to="/" style={{ color: "#8854C0" }}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
