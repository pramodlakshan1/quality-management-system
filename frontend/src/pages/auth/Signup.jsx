import React, { useState } from "react";
import { UserPlus } from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-10">
      
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
            <UserPlus className="text-blue-600" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Create User Account
          </h1>

          <p className="text-slate-500 mt-2">
            Add a new employee to the system
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Role
            </label>

            <select className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500">
              <option>Select Role</option>
              <option>FACTORY_ADMIN</option>
              <option>QA_MANAGER</option>
              <option>CHECKER</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-200 transition-all"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;