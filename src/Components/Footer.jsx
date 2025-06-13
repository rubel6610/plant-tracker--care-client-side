import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2"> <FaLeaf/> PlantCare</h3>
          <p className="text-sm">
            Helping you grow healthy, happy plants with tips, tools, and community support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/add-plant" className="hover:underline">Add Plant</Link></li>
            <li><Link to="/all-plants" className="hover:underline">All Plants</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">Email: support@plantcare.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} PlantCare. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
