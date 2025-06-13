import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
            <FaLeaf className="text-green-400" /> PlantTrackr
          </h2>
          <p className="mt-2 text-sm">
            Helping you nurture your plants with love and knowledge.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: support@greencare.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-green-300">
            <a href="https://facebook.com" target="_blank" >
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" >
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} PlantTrackr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
