import { Route, Routes } from "react-router-dom";
import ConformPassword from "./components/auth/ConformPassword";
import EmailVerification from "./components/auth/EmailVerification";
import ForgotPassword from "./components/auth/ForgotPassword";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Navbar from "./components/user/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="/auth/sign-in" element={<Signin />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/confirm-password" element={<ConformPassword />} />
      </Routes>
    </>
  );
}
