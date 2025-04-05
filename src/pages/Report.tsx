
import CrimeReportForm from "@/components/CrimeReportForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Info, AlertTriangle } from "lucide-react";

const Report = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <Shield className="h-12 w-12 mx-auto text-safewatch-700 mb-2" />
              <h1 className="text-3xl font-bold text-safewatch-900">Report a Crime</h1>
              <p className="text-gray-600 mt-2">
                Your information helps us create safer communities. All reports are confidential.
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="bg-safewatch-700 px-6 py-4 flex items-center">
                <Info className="h-5 w-5 text-white mr-2" />
                <p className="text-white text-sm">
                  For emergencies requiring immediate assistance, please call <strong>100</strong> or your local emergency number.
                </p>
              </div>
              
              <div className="p-6">
                <CrimeReportForm />
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800">Filing a False Report is a Crime</h3>
                  <p className="text-sm text-amber-700">
                    Knowingly providing false information in this report may result in legal penalties. Please ensure all information you provide is accurate to the best of your knowledge.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>Need help? Contact our support team at <a href="mailto:support@safewatch.com" className="text-safewatch-600 hover:underline">support@safewatch.com</a></p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Report;
