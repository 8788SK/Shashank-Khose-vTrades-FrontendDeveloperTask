import { Routes, Route } from 'react-router-dom'; 
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import OtpVerification from './components/OtpVerification';
import Dashboard from './components/Dashboard';
import NewPassword from './components/NewPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<OtpVerification />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-password" element={<NewPassword />} />
    </Routes>
  );
}

export default App;
