import { FaBolt  } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



const GetInTouch = () => {

  useEffect (() => {
    AOS.init({duration: 1500});
}, []);

  return (
    <section id="contact" className="md:h-[60vh] h-[60vh] flex flex-wrap justify-start md:justify-around p-4 md:p-14 mt-20 md:mt-14">
      <div className=""
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      >
        <h2 className="flex w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Collaborate With Me</h2>
        <p className="flex justify-start  mt-8 text-[20px] max-w-[496px] leading-[30px] text-[#808080]">Thinking about a cool project? I’m excited to jump in whenever you are.!</p>
      </div>
      
      <Link
       data-aos="fade-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1500"
      to="/contact" className="bg-gradient-to-r from-blue-500 v py-4 px-8 flex items-center justify-center h-[55px] rounded-full shadow-lg gap-3 font-bold text-white hover:to-blue-500 transition-all duration-300">
       <FaBolt /> <span>Get in touch</span>
      </Link>
      </section>
  )
}

export default GetInTouch