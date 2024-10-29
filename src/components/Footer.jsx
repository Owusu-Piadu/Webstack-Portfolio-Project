import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[15px] text-[#b3b3b4] py-8">
      <div className="container mx-auto flex justify-between flex-wrap">
        {/* Column 1 */}
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-bold text-lg mb-2 text-[#ffffff]">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">For the Records</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-bold text-lg mb-2 text-[#ffffff]">Communities</h3>
          <ul>
            <li><a href="#" className="hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Vendors</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-bold text-lg mb-2 text-[#ffffff]">Useful links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Free Mobile App</a></li>
          </ul>
        </div>

        {/* Column 5 - Social Media Icons */}
        <div className="w-full md:w-1/5 mb-6">
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Horizontal Line Bar */}
        <hr className="border-white-400 my-4 border-t-18"/>

        {/* Copyright Notice */}
        <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Owusu-Piadu@Alx. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
