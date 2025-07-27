import Image from "next/image";
import Services from "./components/Services";
import Banner from "./components/Banner";
import WhyChooseUs from "./why-choose-us/page";
import Testimonials from "./components/Testimonials";

export default function Home() {

  return (
    <div>
      <div className="mt-5">
<Banner />
      </div>
      
      <Services />
      <div className="mt-16">
        <WhyChooseUs />
      </div>
      <Testimonials/>
    </div>
  );
}
