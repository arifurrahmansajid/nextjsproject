import dbConnect, { collectionNameObject } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Services = async () => {
    const data = await (await dbConnect(collectionNameObject.servicesCollections)).find({}).toArray()

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Our Services</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Professional motorcycle services to keep your ride in top condition
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map(item => (
                    <div 
                        key={item._id} 
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                    >
                        <div className="relative h-48 w-full">
                            <Image 
                                src={item.img} 
                                alt={item.title || 'Service image'} 
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                            
                            <div className="flex justify-between items-center mt-6">
                                <span className="text-lg font-bold text-red-600">
                                    ${item.price}
                                </span>
                                <Link 
                                    href={`/services/${item._id}`}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                                >
                                    Details
                                    <GoArrowRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;