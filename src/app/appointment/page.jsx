"use client"
import { useEffect, useState } from 'react';

export default function Appointment() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600">Service Appointments</h1>
            <p className="text-gray-600">
              View and manage upcoming motorcycle service appointments
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="overflow-x-auto bg-white">
            <table className="w-full">
              <thead className="bg-red-50">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-red-700">Customer</th>
                  <th className="py-4 px-6 text-left font-semibold text-red-700">Contact</th>
                  <th className="py-4 px-6 text-left font-semibold text-red-700">Service Type</th>
                  <th className="py-4 px-6 text-left font-semibold text-red-700">Details</th>
                  <th className="py-4 px-6 text-left font-semibold text-red-700">Appointment Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      No upcoming appointments found
                    </td>
                  </tr>
                ) : (
                  orders.map((order, index) => (
                    <tr 
                      key={order._id} 
                      className="border-t border-gray-200 hover:bg-red-50/50"
                    >
                      <td className="py-4 px-6 text-gray-800">
                        <div className="font-medium">{order.firstName} {order.lastName}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <div className="text-sm">{order.email}</div>
                        {order.phone && <div className="text-sm mt-1">{order.phone}</div>}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          {order.profile}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <div className="text-sm line-clamp-2 max-w-xs">{order.message}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <div className="text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                          <div className="text-xs opacity-70">
                            {new Date(order.createdAt).toLocaleTimeString()}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}