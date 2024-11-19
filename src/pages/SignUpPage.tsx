import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Syringe, Mail, Lock, User, Building2 } from 'lucide-react';

type UserType = 'injector' | 'employer';

export function SignUpPage() {
  const [userType, setUserType] = useState<UserType>('injector');

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <Syringe className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join the leading aesthetic nursing community</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              userType === 'injector'
                ? 'bg-rose-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setUserType('injector')}
          >
            <User className="w-5 h-5" />
            I'm an Injector
          </button>
          <button
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              userType === 'employer'
                ? 'bg-rose-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setUserType('employer')}
          >
            <Building2 className="w-5 h-5" />
            I'm an Employer
          </button>
        </div>

        <form className="space-y-6 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="name"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                id="email"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                id="password"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Create a password"
              />
            </div>
          </div>

          {userType === 'employer' && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full btn btn-primary py-3"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-rose-500 hover:text-rose-600 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}