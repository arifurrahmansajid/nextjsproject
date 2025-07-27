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
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Your Appointments</h1>
      <table className="w-full border rounded-lg overflow-hidden shadow-md">
        <thead className="bg-blue-100">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Profile</th>
            <th className="py-2 px-4">Message</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">No appointments found.</td>
            </tr>
          ) : (
            orders.map(order => (
              <tr key={order._id} className="border-t">
                <td className="py-2 px-4">{order.firstName} {order.lastName}</td>
                <td className="py-2 px-4">{order.email}</td>
                <td className="py-2 px-4">{order.profile}</td>
                <td className="py-2 px-4">{order.message}</td>
                <td className="py-2 px-4">{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}
