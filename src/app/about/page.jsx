import Image from 'next/image';

export default function About() {
  // Image URLs from free stock photo sites
  const images = {
    workshop: "https://i.ibb.co/0jtnKXRZ/pexels-photo-3818903.jpg",
   technician1: "	https://speedforce.in/wp-content/uploads/2020/08/WhatsApp-Image-2021-05-12-at-14.48.30.jpeg",
    technician2: "	https://speedforce.in/wp-content/uploads/2020/08/WhatsApp-Image-2021-05-12-at-14.48.33.jpeg",
    technician3: "	https://speedforce.in/wp-content/uploads/2020/08/WhatsApp-Image-2021-05-12-at-14.48.31.jpeg",
    technician4: "https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-700">
          About Bike Service Bangladesh
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted destination for all motorcycle service and repair needs in Dhaka
        </p>
      </section>

      {/* About Content with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-lg text-gray-600">
            At Bike Service Bangladesh, we're passionate motorcycle enthusiasts dedicated to keeping your two-wheeled companion in perfect condition. Our fully-equipped workshop and skilled technicians handle everything from routine maintenance to complex repairs.
          </p>
          <p className="text-lg text-gray-600">
            We understand your bike is more than transportation—it's your freedom and joy. That's why we treat every motorcycle with the utmost care and attention to detail.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">Expert Technicians</span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">Quality Parts</span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">Fast Service</span>
          </div>
        </div>

        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src={images.workshop} 
            alt="Our bike service workshop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-red-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-600 text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Quality Service</h3>
              <p className="text-gray-600">Providing expert services with original quality parts at affordable prices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-600 text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Customer Trust</h3>
              <p className="text-gray-600">Building long-term relationships based on reliability and transparency</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-600 text-4xl mb-4">👨‍🔧</div>
              <h3 className="font-bold text-lg mb-2">Team Growth</h3>
              <p className="text-gray-600">Investing in our team's development to deliver exceptional service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Expert Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-60 relative">
                <Image 
                  src={images[`technician${item}`]}
                  alt={`Technician ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-1">Technician Name</h3>
                <p className="text-red-600 font-medium">Specialization</p>
                <p className="text-gray-600 mt-2">10+ years experience</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Service Your Bike?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book an appointment today and experience our premium service firsthand
        </p>
        <button className="bg-white text-red-700 font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
          Schedule Service
        </button>
      </section>
    </main>
  );
}