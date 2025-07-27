"use client"
import Image from 'next/image';
import { useState } from 'react';

const allBlogs = [
  {
    id: 1,
    title: "5 Essential Motorcycle Maintenance Tips Every Rider Should Know",
    summary: "Keep your bike in top condition with these crucial maintenance practices that can prevent breakdowns and extend your motorcycle's lifespan.",
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Mike Rider",
    date: "July 27, 2025",
    readTime: "6 min read",
    category: "Maintenance"
  },
  {
    id: 2,
    title: "How to Properly Clean and Lubricate Your Motorcycle Chain",
    summary: "Step-by-step guide to chain maintenance that will improve performance and prevent premature wear on your sprockets.",
    image: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Sarah Biker",
    date: "July 25, 2025",
    readTime: "8 min read",
    category: "Drivetrain"
  },
  {
    id: 3,
    title: "Signs Your Motorcycle Needs a Brake Service",
    summary: "Learn to recognize these warning signs that indicate your bike's braking system needs immediate attention for your safety.",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Alex Moto",
    date: "July 20, 2025",
    readTime: "5 min read",
    category: "Brakes"
  },
  {
    id: 4,
    title: "Winter Storage: Preparing Your Motorcycle for Cold Months",
    summary: "Complete checklist to properly store your bike during winter to prevent damage and ensure easy spring startup.",
    image: "https://images.pexels.com/photos/39693/motorcycle-motorbike-bmw-f-800-gs-adventure-39693.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Winters Frost",
    date: "July 15, 2025",
    readTime: "7 min read",
    category: "Seasonal"
  },
  {
    id: 5,
    title: "DIY: How to Change Your Motorcycle Oil Like a Pro",
    summary: "Follow these professional tips to perform an oil change at home and save money on basic maintenance.",
    image: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Oil Master",
    date: "July 10, 2025",
    readTime: "9 min read",
    category: "Fluids"
  },
  {
    id: 6,
    title: "Troubleshooting Common Motorcycle Electrical Problems",
    summary: "Diagnose and fix these frequent electrical issues that plague many riders, from dead batteries to faulty wiring.",
    image: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Sparky Watts",
    date: "July 5, 2025",
    readTime: "10 min read",
    category: "Electrical"
  },
  {
    id: 7,
    title: "The Ultimate Guide to Motorcycle Tire Pressure",
    summary: "Why proper inflation matters and how to find the perfect PSI for your riding style and bike model.",
    image: "https://images.pexels.com/photos/5750002/pexels-photo-5750002.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Rubber Road",
    date: "June 28, 2025",
    readTime: "6 min read",
    category: "Tires"
  },
  {
    id: 8,
    title: "How to Spot Wear on Your Motorcycle Tires",
    summary: "Visual guide to identifying dangerous tire wear patterns before they become a safety hazard.",
    image: "https://images.pexels.com/photos/5750002/pexels-photo-5750002.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Tread Lightly",
    date: "June 22, 2025",
    readTime: "5 min read",
    category: "Tires"
  },
  {
    id: 9,
    title: "Motorcycle Carburetor Cleaning: When and How",
    summary: "Symptoms of a dirty carburetor and professional techniques to clean it without damaging sensitive components.",
    image: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Fuel Guru",
    date: "June 18, 2025",
    readTime: "12 min read",
    category: "Engine"
  },
  {
    id: 10,
    title: "Upgrading Your Motorcycle's Suspension: What You Need to Know",
    summary: "Complete breakdown of suspension options and how to choose the right setup for your riding style.",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Bouncy Ride",
    date: "June 15, 2025",
    readTime: "8 min read",
    category: "Suspension"
  }
];

export default function Blogs() {
  const [visibleBlogs, setVisibleBlogs] = useState(allBlogs.slice(0, 3));
  const [hasMore, setHasMore] = useState(allBlogs.length > 3);

  const loadMoreBlogs = () => {
    const currentlyVisible = visibleBlogs.length;
    const nextBlogs = allBlogs.slice(0, currentlyVisible + 3);
    setVisibleBlogs(nextBlogs);
    
    if (nextBlogs.length >= allBlogs.length) {
      setHasMore(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            MotoWorks Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice, maintenance tips, and repair guides from our motorcycle mechanics.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map(blog => (
            <div 
              key={blog.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col"
            >
              <div className="relative h-60 w-full group overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 px-3 py-1 rounded-tr-lg text-sm font-semibold bg-red-100 text-red-800">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-red-50 text-red-600">
                    {blog.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
                  {blog.title}
                </h2>
                
                <p className="mb-4 text-gray-600">
                  {blog.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    By {blog.author}
                  </span>
                  <span className="text-gray-500">
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={loadMoreBlogs}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-md"
            >
              Load More Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}