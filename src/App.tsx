import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { JobPage } from './pages/JobPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { EmployersPage } from './pages/EmployersPage';
import { SignUpPage } from './pages/SignUpPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CommunityPage } from './pages/CommunityPage';
import { PostJobPage } from './pages/PostJobPage';
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="/jobs/:id/apply" element={<ApplicationPage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/employers/post-job" element={<PostJobPage />} />
        <Route path="/employers/success" element={<CheckoutSuccessPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </div>
  );
}