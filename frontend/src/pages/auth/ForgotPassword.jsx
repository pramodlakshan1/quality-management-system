import React, { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
            <Mail className="text-blue-600" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Forgot Password?
          </h1>

          <p className="text-slate-500 mt-2 leading-relaxed">
            Enter your email address and we’ll send you a password reset link.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-200 transition-all"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium" onClick={()=> navigate ("/")}>
            <ArrowLeft size={18} />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;