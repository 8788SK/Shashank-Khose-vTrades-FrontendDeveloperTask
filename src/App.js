import { Routes, Route } from 'react-router-dom'; // No Router here
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import OtpVerification from './components/OtpVerification';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<OtpVerification />} />
    </Routes>
  );
}

export default App;
