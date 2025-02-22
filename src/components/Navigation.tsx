
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
    <nav className="bg-background text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/LOGO.png"
              alt="Shaolin Temple Logo"
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex items-center justify-center flex-grow space-x-4">
            <Link
              to="/lineage"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/lineage" ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              Legacy
            </Link>
            <Link
              to="/videos"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/videos" ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              Media
            </Link>
            <Link
              to="/schedule"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/schedule" ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              Schedule
            </Link>
            <Link
              to="/values"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/values" ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              Values
            </Link>
          </div>
          <div>
            {!isAuthenticated ? (
              <Link
                to="/auth"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => supabase.auth.signOut()}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent"
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
