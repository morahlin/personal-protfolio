import { tech } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import morahlinLogo from '../assets/morahlin logo.png';

const Stack = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    AOS.init({ 
      mirror: false,
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <div className="py-20 px-10  md:px-16 overflow-hidden lg:w-[90%]">
      <div className="">
             
        <h2 className="font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7 flex items-center gap-4">
          <img src={morahlinLogo} width={48} height={48} alt="Morahlin Logo" />
          Tech Stack
        </h2>
        <p className="text-[18px]">The dev tools and apps I use.</p>
      </div>

      <div className="">
        <div className="">
          <h2 className="mt-7 text-[20px] font-bold md:text-[30px]">Dev & Design</h2>
          <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-between mt-5 lg:justify-start">
            {tech.dev.map((dev) => (
              <div
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1500"
                data-aos-delay='0.5'
                data-aos-mirror="false"
                className="tech p-10 flex flex-col items-center justify-center w-[350px] md:w-[310px] max-h-[280px] gap-5 rounded-2xl "
                key={dev.name}
              >
                <img src={dev.logo} alt="" className="w-[150px]" />
                <div className="tech-desc-container flex justify-between w-[120%] md:w-[] font-semibold py-5">
                  <p className="flex items-center w-[48%]">{dev.name}</p>
                  <p className="tech-desc w-[50%] md:w-[65%] flex justify-center items-center p-2  rounded-3xl text-[15px] font-normal">{dev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
         
        <h2 className="font-black lg:text-[40px] sm:text-[60px] text-[20px] lg:leading-[98px] mt-7 flex items-center gap-4">
          <img src={morahlinLogo} width={48} height={48} alt="Morahlin Logo" />
          Apps
        </h2>
          <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-between mt-10 lg:justify-start">
            {tech.app.map((app) => (
              <div
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1500"
                data-aos-delay='0.5'
                data-aos-mirror="false"
                className="tech p-10 flex flex-col items-center justify-center w-[310px] max-h-[280px] rounded-2xl"
                key={app.name}
              >
                <img src={app.logo} alt="" className="w-[150px]" />
                <div className="flex justify-between w-[120%] font-semibold py-5">
                  <p className="flex items-center">{app.name}</p>
                  <p className="tech-desc w-[65%] flex justify-center items-center p-2 rounded-3xl text-[15px] font-normal">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;