"use client"
import { useEffect, useState } from 'react';

export default function Appointment() {
  const [orders, setOrders] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch orders from API
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => setOrders(data));
    
    // Check for dark mode preference
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
    }
  }, []);

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-orange-500' : 'text-red-600'}`}>Service Appointments</h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              View and manage upcoming motorcycle service appointments
            </p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        <div className={`rounded-xl overflow-hidden shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <table className="w-full">
              <thead className={darkMode ? 'bg-gray-700' : 'bg-red-50'}>
                <tr>
                  <th className={`py-4 px-6 text-left font-semibold ${darkMode ? 'text-orange-400' : 'text-red-700'}`}>Customer</th>
                  <th className={`py-4 px-6 text-left font-semibold ${darkMode ? 'text-orange-400' : 'text-red-700'}`}>Contact</th>
                  <th className={`py-4 px-6 text-left font-semibold ${darkMode ? 'text-orange-400' : 'text-red-700'}`}>Service Type</th>
                  <th className={`py-4 px-6 text-left font-semibold ${darkMode ? 'text-orange-400' : 'text-red-700'}`}>Details</th>
                  <th className={`py-4 px-6 text-left font-semibold ${darkMode ? 'text-orange-400' : 'text-red-700'}`}>Appointment Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className={`py-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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
                      className={`border-t ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-red-50/50'}`}
                    >
                      <td className={`py-4 px-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        <div className="font-medium">{order.firstName} {order.lastName}</div>
                      </td>
                      <td className={`py-4 px-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="text-sm">{order.email}</div>
                        {order.phone && <div className="text-sm mt-1">{order.phone}</div>}
                      </td>
                      <td className={`py-4 px-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                          ${darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-red-100 text-red-800'}`}>
                          {order.profile}
                        </span>
                      </td>
                      <td className={`py-4 px-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="text-sm line-clamp-2 max-w-xs">{order.message}</div>
                      </td>
                      <td className={`py-4 px-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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