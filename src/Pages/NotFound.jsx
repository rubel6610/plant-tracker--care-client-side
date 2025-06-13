import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
