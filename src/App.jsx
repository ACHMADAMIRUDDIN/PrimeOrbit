import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing-page/LandingPage';
import ServicesPage from './features/services-page/ServicesPage';
import TrackingPage from './features/tracking-page/TrackingPage';
import GlobalNetworkPage from './features/global-network-page/GlobalNetworkPage';
import WhyChooseUsPage from './features/why-choose-us-page/WhyChooseUsPage';
import ContactUsPage from './features/contact-us-page/ContactUsPage';
import AdminDashboard from './features/admin/AdminDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/global-network" element={<GlobalNetworkPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
