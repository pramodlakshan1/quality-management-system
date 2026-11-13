import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/login";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import SignupPage from "../pages/auth/Signup";
import CheckerDashboard from "../pages/dashboard/checker/CheckerDashboard";
import CheckerDashboardLayout from "../layouts/checker/CheckerDashboardLayout";
import MiddlLayerDashBoard from "../pages/dashboard/middleLayer/MiddleLayedDashboard";
import MiddleLayerLayout from "../layouts/middleLayer/MiddleLayerLayout";
import ManagerDashboardLayout from "../layouts/toplayer/ManagerDashBoardLayout";
import SuperDashboardLayout from "../layouts/supperLayout/SupperDashboardLayout";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
                <Route path="signup" element={<SignupPage/>}/>
                <Route path="checker-dashboard" element ={<CheckerDashboardLayout/>}/>
                <Route path="dashboard-midle-layer" element={<MiddleLayerLayout/>}/>
                <Route path="dashboard-manager" element={<ManagerDashboardLayout/>}/>
                <Route path="supper-admin-dashboard" element={<SuperDashboardLayout/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;