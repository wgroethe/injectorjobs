import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Syringe, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Syringe className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">InjectorJobs</h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/community" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Injector Community
            </Link>
            <Link 
              to="/signup" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign Up
            </Link>
            <Link 
              to="/employers" 
              className="btn btn-primary"
            >
              For Employers
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/community" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Injector Community
              </Link>
              <Link 
                to="/signup" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link 
                to="/employers" 
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                For Employers
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}