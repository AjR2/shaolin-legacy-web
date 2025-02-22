
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const Navigation = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      setIsAuthenticated(event === 'SIGNED_IN');
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="bg-temple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              {/* Note: Add logo.png to public folder and update src */}
              <img
                src="/placeholder.svg"
                alt="Shaolin Temple Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold">少林寺</span>
            </Link>
            <Link
              to="/lineage"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/lineage" ? "bg-temple-700" : "hover:bg-temple-800"
              }`}
            >
              Lineage
            </Link>
            <Link
              to="/videos"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/videos" ? "bg-temple-700" : "hover:bg-temple-800"
              }`}
            >
              Videos
            </Link>
            <Link
              to="/schedule"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/schedule" ? "bg-temple-700" : "hover:bg-temple-800"
              }`}
            >
              Schedule
            </Link>
            <Link
              to="/values"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/values" ? "bg-temple-700" : "hover:bg-temple-800"
              }`}
            >
              Values
            </Link>
          </div>
          <div>
            {!isAuthenticated ? (
              <Link
                to="/auth"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-temple-800"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => supabase.auth.signOut()}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-temple-800"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
