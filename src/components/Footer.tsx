import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-shrink-0 w-full md:w-36 lg:w-48 flex justify-center md:justify-start">
            <div className="w-24 h-24 bg-muted/20 rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Logo</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
                <address className="not-italic">
                  15257 Display Ct.<br />
                  Rockville, MD  20850<br />
                  United States
                </address>
                <address className="not-italic">
                  6330 Trotter Rd..<br />
                  Clarksville, MD 21029<br />
                  United States
                </address>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>Phone: 301-251-2958</p>
                <p>Email: info@shaolintemplekungfu.org</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Non-Profit Organization</h3>
                <p>All donations are tax deductible</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shaolin Temple Traditional Kung Fu. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
