import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/login";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import SignupPage from "../pages/auth/Signup";
import CheckerDashboard from "../pages/dashboard/checker/CheckerDashboard";
import CheckerDashboardLayout from "../layouts/checker/CheckerDashboardLayout";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="signup" element={<SignupPage/>}/>
                <Route path="checker-dashboard" element ={<CheckerDashboardLayout/>}/>

            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;