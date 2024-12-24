import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-2">
          {/* Brand Information */}
          <div className="text-center md:text-left mb-2 md:mb-0">
            <h1 className="text-lg font-bold text-white">G_T</h1>
            <p className="text-sm">Software Version: 1.0.0</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} G_T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
