
import { Shield, Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-background text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">Crime Trackers</span>
            </div>
            <p className="text-sm text-center md:text-left text-gray-400 max-w-xs">
              India's premier crime reporting platform. Empowering communities with real-time incident tracking, advanced analytics, and collaborative safety solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <Twitter size={18} className="cursor-pointer hover:text-safewatch-300" />
              <Facebook size={18} className="cursor-pointer hover:text-safewatch-300" />
              <Instagram size={18} className="cursor-pointer hover:text-safewatch-300" />
              <Linkedin size={18} className="cursor-pointer hover:text-safewatch-300" />
              <Github size={18} className="cursor-pointer hover:text-safewatch-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-center md:text-left text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/topics" className="hover:text-white">Topics</Link></li>
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-center md:text-left text-gray-400">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/documentation" className="hover:text-white">Documentation</Link></li>
              <li><Link to="/tutorials" className="hover:text-white">Tutorials</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          {/* Our Team */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Our Team</h3>
            <ul className="space-y-2 text-sm text-center md:text-left text-gray-400">
              <li>Rushang - Lead Developer</li>
              <li>Sneha - Frontend Specialist</li>
              <li>Gaurav - Backend Engineer</li>
              <li>Param - Security Expert</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">info@crimetrackers.com</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 Crime Trackers. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
