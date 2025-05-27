import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Dashboard.css';
import heroImage from './Hero.png';

const Dashboard = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <div className="row w-100">
        {/* Left Side - Hero Image */}
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="img-fluid object-fit-contain" 
            style={{ maxHeight: '95vh', objectFit: 'contain' }} 
          />
        </div>

        {/* Right Side - Message */}
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h2 className="mb-4">Welcome to Your Dashboard</h2>
          <p>
            You have successfully signed in. From here, you can access all the essential features
            of your workspace. Manage your projects, track your progress, and collaborate seamlessly
            with your team. We're glad to have you on board. Let's make something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;