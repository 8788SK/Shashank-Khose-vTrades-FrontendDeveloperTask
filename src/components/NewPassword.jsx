import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import heroImage from './Hero.png';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMismatch, setIsMismatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setIsMismatch(true);
      return;
    }

    setIsMismatch(false);

    
    console.log("Password successfully reset:", newPassword);

    
    setShowModal(true);
  };

  const handleOkay = () => {
    setShowModal(false);
    navigate('/'); 
  };

  return (
    <>
      {/* Main UI */}
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

          {/* Password Reset Form */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center min-vh-100 text-white py-5">
            <div className="p-4 mx-auto" style={{ maxWidth: '550px', width: '100%' }}>
              <h2 className="text-start">Set New Password</h2>
              <p className="mb-4 text-start">
                Create a strong password to keep your account safe.<br />
                Make sure it's easy for you to remember, but hard for others to guess.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white border-white custom-input"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Re-enter your new Password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white custom-input"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (isMismatch) setIsMismatch(false);
                    }}
                    required
                    style={{
                      border: isMismatch ? '2px solid red' : '1px solid white',
                      transition: 'border 0.3s ease-in-out'
                    }}
                  />
                  {isMismatch && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.9rem' }}>
                      Passwords do not match.
                    </div>
                  )}
                </div>

                <button type="submit" className="btn w-100" style={{ backgroundColor: '#8854C0', color: 'white' }}>
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 9999 }}
        >
          <div
            className="bg-dark text-white p-4 rounded-4 shadow-lg d-flex flex-column justify-content-between"
            style={{ width: '90%', maxWidth: '400px', minHeight: '250px', position: 'relative' }}
          >
            <div>
              <h3 className="mb-3 text-white text-center">Password Created!</h3>
              <p className="mb-2 text-center">Your password has been successfully created. You can now use it to log in.</p>
            </div>
            <div className="text-end">
              <button
                className="btn"
                style={{ backgroundColor: '#8854C0', color: 'white' }}
                onClick={handleOkay}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPassword;
