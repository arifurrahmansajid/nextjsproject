import img1 from "../../../public/assets/images/homeCarousel/beautiful-girl-with-long-hair-garage-repairing-motorcycle.jpg";
import img2 from "../../../public/assets/images/homeCarousel/man-fixing-motorcycle-modern-workshop.jpg";
import img3 from "../../../public/assets/images/homeCarousel/man-repairing-his-motorcycle.jpg";
import img4 from "../../../public/assets/images/homeCarousel/smiling-mechanic-workshop.jpg";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] relative">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
        <Image 
          src={img1} 
          fill
          className="object-cover rounded-xl"
          alt="Premium Car Servicing"
          priority
        />
        <div className="absolute left-0 top-0 flex items-center h-full pl-5 md:pl-16 z-20">
          <div className="text-white space-y-4 md:space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium <span className="text-red-500">Car Care</span> <br />
              At Competitive Prices
            </h2>
            <p className="text-sm md:text-base">
              Experience top-tier automotive service without breaking the bank. 
              Our certified technicians use only the highest quality parts and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-3 text-sm md:text-base">
                Book Service Now
              </button>
              <button className="btn btn-outline text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-sm md:text-base">
                View Special Offers
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-5 bottom-5 flex gap-3 z-20">
          <a href="#slide4" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
        <Image 
          src={img2} 
          fill
          className="object-cover rounded-xl"
          alt="Expert Technicians"
          priority
        />
        <div className="absolute left-0 top-0 flex items-center h-full pl-5 md:pl-16 z-20">
          <div className="text-white space-y-4 md:space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Certified <span className="text-red-500">Experts</span> <br />
              For Your Vehicle
            </h2>
            <p className="text-sm md:text-base">
              Our ASE-certified technicians have years of experience working with all makes and models.
              Your car is in the best hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-3 text-sm md:text-base">
                Meet Our Team
              </button>
              <button className="btn btn-outline text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-sm md:text-base">
                Service Packages
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-5 bottom-5 flex gap-3 z-20">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
        <Image 
          src={img3} 
          fill
          className="object-cover rounded-xl"
          alt="Quality Parts"
          priority
        />
        <div className="absolute left-0 top-0 flex items-center h-full pl-5 md:pl-16 z-20">
          <div className="text-white space-y-4 md:space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Genuine <span className="text-red-500">Parts</span> <br />
              For Optimal Performance
            </h2>
            <p className="text-sm md:text-base">
              We use only OEM or OEM-equivalent parts to ensure your vehicle performs at its best.
              Quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-3 text-sm md:text-base">
                View Parts Catalog
              </button>
              <button className="btn btn-outline text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-sm md:text-base">
                Warranty Info
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-5 bottom-5 flex gap-3 z-20">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
        <Image 
          src={img4} 
          fill
          className="object-cover rounded-xl"
          alt="Customer Satisfaction"
          priority
        />
        <div className="absolute left-0 top-0 flex items-center h-full pl-5 md:pl-16 z-20">
          <div className="text-white space-y-4 md:space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Satisfaction <span className="text-red-500">Guaranteed</span> <br />
              On Every Service
            </h2>
            <p className="text-sm md:text-base">
              Our 100% satisfaction guarantee means we'll make it right if you're not completely happy with our service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-3 text-sm md:text-base">
                Read Reviews
              </button>
              <button className="btn btn-outline text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-sm md:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-5 bottom-5 flex gap-3 z-20">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-white/30 hover:bg-white/50 border-none">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;