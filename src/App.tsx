
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import Schedule from "@/pages/Schedule";
import Auth from "@/pages/Auth";
import AdminAttendance from "@/pages/AdminAttendance";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
