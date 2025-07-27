"use client"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaMotorcycle } from 'react-icons/fa';

export default function Contacts() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            Contact Bike Service
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Get in touch with our expert mechanics for inquiries, support, or service appointments.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="rounded-xl p-8 bg-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-red-200">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-red-100 text-red-600">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Call Us</h3>
            <p className="mb-4 text-gray-600">Speak directly with our service team</p>
            <a 
              href="tel:+1234567890" 
              className="text-lg font-medium text-red-600 hover:text-red-500"
            >
              (123) 456-7890
            </a>
          </div>

          {/* Email Card */}
          <div className="rounded-xl p-8 bg-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-red-200">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-red-100 text-red-600">
              <FaEnvelope className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Email Us</h3>
            <p className="mb-4 text-gray-600">Send us your questions or service requests</p>
            <a 
              href="mailto:service@Bike Service.com" 
              className="text-lg font-medium text-red-600 hover:text-red-500"
            >
              service@Bike Service.com
            </a>
          </div>

          {/* Location Card */}
          <div className="rounded-xl p-8 bg-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-red-200">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-red-100 text-red-600">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Visit Us</h3>
            <p className="mb-4 text-gray-600">Stop by our workshop for a consultation</p>
            <address className="not-italic text-red-600">
              123 Garage Lane<br />
              Motorville, MV 12345
            </address>
          </div>
        </div>

        {/* Hours & Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Hours */}
          <div className="rounded-xl p-8 bg-white shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-red-100 text-red-600">
                <FaClock className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Service Hours</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between pb-4 border-b last:border-b-0 last:pb-0 last:mb-0 border-gray-200">
                  <span className="font-medium text-gray-600">{item.day}</span>
                  <span className="font-medium text-red-600">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-red-100 text-red-600">
                <FaMotorcycle className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">Emergency Service?</h3>
                <p className="text-gray-600">Call our 24/7 hotline: <span className="font-medium text-red-600">(123) 456-7891</span></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-600">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
                  placeholder="Service Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132834!2d-73.9878449241645!3d40.74844047138948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuMyJX!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}