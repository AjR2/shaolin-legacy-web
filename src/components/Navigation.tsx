
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const Navigation = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);

      if (session) {
        const { data: adminData } = await supabase
          .from('admin_users')
          .select('id')
          .eq('user_id', session.user.id)
          .single();
        
        setIsAdmin(!!adminData);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      setIsAuthenticated(event === 'SIGNED_IN');
      checkAuth();
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
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/" ? "bg-temple-700" : "hover:bg-temple-800"
              }`}
            >
              Home
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/schedule"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/schedule" ? "bg-temple-700" : "hover:bg-temple-800"
                  }`}
                >
                  Schedule
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin/attendance"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === "/admin/attendance" ? "bg-temple-700" : "hover:bg-temple-800"
                    }`}
                  >
                    Attendance Records
                  </Link>
                )}
              </>
            )}
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
