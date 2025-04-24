
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background text-foreground border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center z-10">
            <img
              src="/LOGO.png"
              alt="Shaolin Temple Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-grow space-x-4">
            <Link
              to="/wisdom"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/wisdom" ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              Wisdom
            </Link>
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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-background z-50 border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/wisdom"
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/wisdom" ? "bg-accent" : "hover:bg-accent"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Wisdom
              </Link>
              <Link
                to="/lineage"
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/lineage" ? "bg-accent" : "hover:bg-accent"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Legacy
              </Link>
              <Link
                to="/videos"
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/videos" ? "bg-accent" : "hover:bg-accent"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
              <Link
                to="/schedule"
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/schedule" ? "bg-accent" : "hover:bg-accent"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to="/values"
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/values" ? "bg-accent" : "hover:bg-accent"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Values
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
