import Image from "next/image";
import image1 from "../../../public/assets/images/products/1.png";
import image2 from "../../../public/assets/images/products/2.png";
import image3 from "../../../public/assets/images/products/3.png";
import image4 from "../../../public/assets/images/products/4.png";
const testimonials = [
  {
    name: "Rahim Uddin",
    feedback: "Excellent service! My car feels brand new after the comprehensive maintenance package. The technicians were thorough and explained everything clearly. Highly recommend their team for any automotive needs.",
    location: "Dhaka, Bangladesh",
    rating: 5,
    avatar: image1
  },
  {
    name: "Sadia Akter",
    feedback: "Quick turnaround and very professional staff. They completed my brake service in half the time quoted by other shops, with no compromise in quality. Will definitely come again for all my car maintenance!",
    location: "Chittagong, Bangladesh",
    rating: 5,
    avatar: image2
  },
  {
    name: "Tanvir Hasan",
    feedback: "Affordable pricing and genuine parts. After being overcharged at other workshops, I finally found a trustworthy place that provides honest diagnostics and fair estimates. My car has never run better.",
    location: "Sylhet, Bangladesh",
    rating: 4,
    avatar: image3
  },
  {
    name: "Farzana Rahman",
    feedback: "Friendly technicians and great customer support. They remembered my car's service history and provided personalized recommendations. My go-to place for car service - they treat you like family!",
    location: "Khulna, Bangladesh",
    rating: 5,
    avatar: image4
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 bg-gray-50 rounded-xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by <span className="text-red-600">Car Owners</span> Across Bangladesh
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear what our satisfied customers have to say
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-start mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic relative pl-6">
              <span className="absolute left-0 top-0 text-5xl text-gray-200 font-serif select-none" aria-hidden="true">“</span>
              {testimonial.feedback}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <svg className="w-10 h-10 text-red-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}