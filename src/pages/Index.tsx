
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, FileText, AlertCircle, Clock, Users, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-safewatch-900 to-safewatch-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Report Crimes Safely and Securely
                </h1>
                <p className="text-lg md:text-xl text-safewatch-100">
                  Help build safer communities by reporting incidents through India's premier crime reporting platform.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-safewatch-900 hover:bg-safewatch-100"
                  >
                    <Link to="/report">Report a Crime</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link to="/emergency">Emergency Resources</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-safewatch-400 to-safewatch-600 opacity-30 blur"></div>
                  <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-safewatch-700 text-white py-3 px-4 font-medium">
                      Report Summary
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Koramangala, Bengaluru</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Date & Time</p>
                        <p className="font-medium">April 2, 2025 - 14:30</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Status</p>
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                          <p className="font-medium text-green-700">Report Received</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between text-safewatch-700 hover:text-safewatch-800 hover:bg-safewatch-50"
                        >
                          View Details
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-safewatch-900">How SafeWatch Works</h2>
              <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                Our platform makes crime reporting simple, secure, and effective for communities across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-safewatch-100 text-safewatch-700 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-safewatch-900 mb-2">File a Report</h3>
                <p className="text-gray-600">
                  Fill out our comprehensive yet simple reporting form with incident details, location, and optional evidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-safewatch-100 text-safewatch-700 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-safewatch-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">
                  Reports are quickly routed to the appropriate authorities and you'll receive a case reference number.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-safewatch-100 text-safewatch-700 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-safewatch-900 mb-2">Track Progress</h3>
                <p className="text-gray-600">
                  Monitor the status of your report and receive updates as the situation is addressed by authorities.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-safewatch-700 hover:bg-safewatch-800">
                <Link to="/report">Report an Incident Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-safewatch-900">Making Communities Safer Together</h2>
                <p className="text-gray-600">
                  Since our inception, SafeWatch has helped thousands of citizens report crimes and worked with local authorities to resolve issues quickly and efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-safewatch-100 text-safewatch-700 flex items-center justify-center mr-3 flex-shrink-0">
                      <Users className="h-3 w-3" />
                    </div>
                    <p className="text-gray-700">Connecting citizens directly with law enforcement agencies</p>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-safewatch-100 text-safewatch-700 flex items-center justify-center mr-3 flex-shrink-0">
                      <Users className="h-3 w-3" />
                    </div>
                    <p className="text-gray-700">Providing anonymous reporting options for sensitive situations</p>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-safewatch-100 text-safewatch-700 flex items-center justify-center mr-3 flex-shrink-0">
                      <Users className="h-3 w-3" />
                    </div>
                    <p className="text-gray-700">Creating a data-driven approach to community safety</p>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-safewatch-700 mb-1">10,000+</div>
                  <p className="text-gray-600">Reports Filed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-safewatch-700 mb-1">85%</div>
                  <p className="text-gray-600">Resolution Rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-safewatch-700 mb-1">200+</div>
                  <p className="text-gray-600">Communities</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-safewatch-700 mb-1">30+</div>
                  <p className="text-gray-600">Police Stations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-safewatch-800 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-safewatch-300" />
            <h2 className="text-3xl font-bold mb-4">Be Part of a Safer Community</h2>
            <p className="text-xl text-safewatch-100 max-w-2xl mx-auto mb-8">
              Every report contributes to making our neighborhoods safer for everyone. Your vigilance matters.
            </p>
            <Button asChild size="lg" className="bg-white text-safewatch-900 hover:bg-safewatch-100">
              <Link to="/report">Report a Crime Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
