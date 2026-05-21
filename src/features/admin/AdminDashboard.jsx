import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '../../components/layout/AdminSidebar';
import AdminTopbar from '../../components/layout/AdminTopbar';
import DashboardMain from './components/DashboardMain';
import TrackingView from './components/TrackingView';
import InventoryView from './components/InventoryView';
import FleetDriverView from './components/FleetDriverView';
import AnalyticsView from './components/AnalyticsView';
import OrderDetailsView from './components/OrderDetailsView';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-[#F3F4F6]">
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F3F4F6] p-8">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardMain />} />
            <Route path="tracking" element={<TrackingView />} />
            <Route path="inventory" element={<InventoryView />} />
            <Route path="fleet" element={<FleetDriverView />} />
            <Route path="analytics" element={<AnalyticsView />} />
            <Route path="order" element={<OrderDetailsView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
