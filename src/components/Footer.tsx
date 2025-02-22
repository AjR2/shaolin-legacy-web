
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-temple-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <address className="not-italic">
              123 Martial Arts Way<br />
              Rockville, MD 20850<br />
              United States
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Phone: (301) 555-0123</p>
            <p>Email: info@shaolinrockville.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-temple-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shaolin Temple Rockville. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
