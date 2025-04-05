
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="text-center max-w-lg">
          <AlertTriangle className="h-16 w-16 text-safewatch-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-safewatch-900 mb-2">404</h1>
          <p className="text-xl text-gray-700 mb-6">Page not found</p>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-safewatch-700 hover:bg-safewatch-800">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
