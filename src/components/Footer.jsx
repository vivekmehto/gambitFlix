import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex space-x-6 mb-8 gap-3 justify-center">
          <FaFacebook className="text-2xl hover:text-white cursor-pointer transition" />
          <FaInstagram className="text-2xl hover:text-white cursor-pointer transition" />
          <FaTwitter className="text-2xl hover:text-white cursor-pointer transition" />
          <FaYoutube className="text-2xl hover:text-white cursor-pointer transition" />
        </div>

        <div className="flex gap-8 flex-wrap justify-center mb-8">
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Chess Programs</a>
        </div>
  
        <div className="text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-200 text-lg font-semibold mb-2">GambitFlix </p>
          <p className="text-gray-400 text-lg font-semibold mb-2 hover:text-white">Made by Vivek Mehto </p>
          <p>© {new Date().getFullYear()} GambitFlix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
