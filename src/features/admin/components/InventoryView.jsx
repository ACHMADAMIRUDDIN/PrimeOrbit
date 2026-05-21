import React from 'react';
import { Package, Truck, CheckCircle2, Filter, AlertCircle, BellRing } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const donutData = [
  { name: 'Completed', value: 88 },
  { name: 'Remaining', value: 12 },
];
const COLORS = ['#1E1B4B', '#E5E7EB'];

const InventoryView = () => {
  return (
    <div className="space-y-6">

      {/* 3 KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">Total Shipments</h3>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Package size={20} />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-2">1,256</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                12%
              </span>
              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">In Transit</h3>
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Truck size={20} />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-2">432</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center text-red-500 bg-red-50 px-2 py-0.5 rounded-full font-medium">
                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                5%
              </span>
              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">Delivered</h3>
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-2">763</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                8%
              </span>
              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Orders Management Table */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-secondary">Orders Management</h3>
            <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium">
              <Filter size={16} /> Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-100">
                  <th className="pb-4 font-semibold text-xs tracking-wider">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary mr-3" />
                    Order ID
                  </th>
                  <th className="pb-4 font-semibold text-xs tracking-wider">Customer</th>
                  <th className="pb-4 font-semibold text-xs tracking-wider">Destination</th>
                  <th className="pb-4 font-semibold text-xs tracking-wider">Shipment</th>
                  <th className="pb-4 font-semibold text-xs tracking-wider">Order Date</th>
                  <th className="pb-4 font-semibold text-xs tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  { id: 'SAC-1029', cust: 'Acme Corp', dest: 'New York,...', ship: 'Standard', date: 'July 15, 2025' },
                  { id: 'SAC-2342', cust: 'Beta Co.', dest: 'New York,...', ship: 'Express', date: 'June 2, 2025' },
                  { id: 'SAC-3957', cust: 'Gamma Ltd.', dest: 'New York,...', ship: 'Standard', date: 'May 20, 2025' },
                  { id: 'SAC-8532', cust: 'Delta LLC', dest: 'New York,...', ship: 'Express', date: 'Apr 7, 2025' },
                  { id: 'SAC-8533', cust: 'Delta LLC', dest: 'New York,...', ship: 'Express', date: 'Apr 7, 2025' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-4 font-medium text-secondary">
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary mr-3" />
                      {row.id}
                    </td>
                    <td className="py-4">{row.cust}</td>
                    <td className="py-4">{row.dest}</td>
                    <td className="py-4">{row.ship}</td>
                    <td className="py-4">{row.date}</td>
                    <td className="py-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">Delivered</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlight Logistics */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-secondary mb-2">Highlight Logistics</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-secondary">88%</span>
              <span className="text-gray-500 text-sm mb-1">Total Product Spending</span>
            </div>
            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={donutData} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Decorative inner rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-4 w-32 h-16 border-t-[12px] border-l-[12px] border-r-[12px] rounded-t-full border-[#4338CA] opacity-80 pointer-events-none"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-secondary font-bold">
                <div className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg">
                  <AlertCircle size={16} />
                </div>
                Geofencing Alert
              </div>
              <span className="text-gray-400 text-xs">13:48</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Eros sagittis duis massa amet mauris vel at aliquet. Venenatis pellentesque sit.
            </p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Management Cards */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-secondary">Orders Management</h3>
            <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium">
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary text-white p-2 rounded-lg">
                  <Package size={16} />
                </div>
                <h4 className="font-bold text-secondary">Main Distribution Center</h4>
              </div>
              <p className="font-semibold text-secondary mb-1">USB-C Charging Cable</p>
              <p className="text-gray-500 text-sm">Avg. daily demand: 18 units - Stock left: 14 units</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary text-white p-2 rounded-lg">
                  <AlertCircle size={16} />
                </div>
                <h4 className="font-bold text-secondary">Retail Storage</h4>
              </div>
              <p className="font-semibold text-secondary mb-1">Stock level approaching critical minimum.</p>
              <p className="text-gray-500 text-sm">Minimum level: 20 units - Available: 7 units</p>
            </div>
          </div>
        </div>

        {/* Inventory Notes */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-secondary">Inventory Notes & Signals</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-5 flex gap-4 items-start">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg shrink-0 mt-1">
                  <BellRing size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">{i === 1 ? 'Supply Chain' : 'Warehouse Efficiency'}</h4>
                  <p className="text-gray-500 text-sm">Inbound shipment accuracy increased by 14% this week after vendor schedule</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default InventoryView;
