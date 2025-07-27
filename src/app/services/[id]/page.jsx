import dbConnect, { collectionNameObject } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesDetails = async ({ params }) => {
    const p = await params.id;
    const singleData = await (await dbConnect(collectionNameObject.servicesCollections)).findOne({ _id: new ObjectId(p) });

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero Banner */}
            <section className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden mb-12">
                <Image
                    src="/assets/images/checkout/checkout.png"
                    fill
                    alt="Motorcycle service banner"
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Service Details
                    </h1>
                </div>
            </section>

            {/* Service Content */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                        <Image 
                            src={singleData.img} 
                            width={800} 
                            height={450} 
                            alt={singleData.title || 'Service image'} 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {singleData.title}
                        </h2>
                        <div className="prose max-w-none text-gray-600 text-lg">
                            <p>{singleData.description}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Pricing</h3>
                            <p className="text-4xl font-bold text-red-600">${singleData.price}</p>
                            <p className="text-gray-500 mt-2">Estimated cost</p>
                        </div>

                        <div className="space-y-4">
                            <Link href='/services/checkOut'>
                                <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all hover:shadow-md">
                                    Book This Service
                                </button>
                            </Link>
                            
                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-2">Service Includes:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Professional inspection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Quality parts replacement
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        30-day service warranty
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;