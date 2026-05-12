import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/login";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import SignupPage from "../pages/auth/Signup";
import CheckerDashboard from "../pages/dashboard/checker/CheckerDashboard";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="signup" element={<SignupPage/>}/>
                <Route path="checker-dashboard" element ={<CheckerDashboard/>}/>

            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;