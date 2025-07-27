"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const CheckOut = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const profileRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [confirmMsg, setConfirmMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOrderConfirm = async () => {
        setLoading(true);
        setConfirmMsg("");
        const payload = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            profile: profileRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
        const res = await fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
            setConfirmMsg("Your appointment has been confirmed!");
            // Clear form
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            profileRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } else {
            setConfirmMsg("Failed to confirm appointment. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Banner */}
            <section className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden">
                <Image
                    src="/assets/images/checkout/checkout.png"
                    fill
                    alt="Motorcycle service appointment"
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Book Your Service
                    </h1>
                </div>
            </section>

            {/* Appointment Form */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Service Appointment Form
                </h2>
                
                {confirmMsg && (
                    <div className={`mb-6 p-4 rounded-lg text-center ${confirmMsg.includes('confirmed') ? 
                        'bg-green-50 text-green-700 border border-green-200' : 
                        'bg-red-50 text-red-700 border border-red-200'}`}>
                        {confirmMsg}
                    </div>
                )}

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                ref={firstNameRef}
                                id="firstName"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                ref={lastNameRef}
                                id="lastName"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-1">
                                Bike Model/Type
                            </label>
                            <input
                                ref={profileRef}
                                id="profile"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                                placeholder="What's your motorcycle model?"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                ref={emailRef}
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Service Details
                        </label>
                        <textarea
                            ref={messageRef}
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                            placeholder="Describe what service you need..."
                        ></textarea>
                    </div>

                    <button
                        onClick={handleOrderConfirm}
                        disabled={loading}
                        className={`w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Confirm Appointment'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;