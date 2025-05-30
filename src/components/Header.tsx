
import { Shield, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-safewatch-900 text-white shadow-md">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">Crime Trackers</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-safewatch-200 transition-colors">
              Home
            </Link>
            <Link to="/report" className="text-white hover:text-safewatch-200 transition-colors">
              Report Crime
            </Link>
            <Link to="/crime-map" className="text-white hover:text-safewatch-200 transition-colors flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Crime Map
            </Link>
            <Link to="/about" className="text-white hover:text-safewatch-200 transition-colors">
              About Us
            </Link>
            <Link to="/emergency-contacts" className="text-white hover:text-safewatch-200 transition-colors">
              Emergency Contacts
            </Link>
            <Link to="/login" className="flex items-center gap-1 bg-white text-safewatch-900 hover:bg-safewatch-200 transition-colors px-3 py-1 rounded-md">
              <User className="h-4 w-4" />
              Login / Sign Up
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-white hover:text-safewatch-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
