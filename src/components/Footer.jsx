import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.jsx'
import {  Footlinks } from '../constants'
import { useState } from 'react';

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className='flex flex-wrap justify-around items-start flex-col md:w-[98%] w-[40vw] p-5 mb-8 '>
      <div className="h-[1px] bg-[#808080] md:w-full w-[80vw] xxl:ml-5"></div>
      <div className="flex xs:justify-start md:justify-around items-start my-12 w-[50vw]  md:w-full flex-wrap-reverse md:flex-wrap gap-10">
        <div className="flex flex-col justify-between items-start gap-[50px] lg:gap-[93px] ">
          <div className="">
            <a  
            href="#hero"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setActive("");
              document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
            }}>
              <Logo />
            </a>
            <p className='text-[#808080] text-[14px]'>Thanks for stopping by <span className='text-[22px]'>ッ</span> </p>
          </div>
          <p className='text-[#808080] text-[14px]'>© 2025 Morahlin. Intellectual property rights reserved.</p>
      </div>

      <div className="flex flex-wrap gap-[70px]  lg:gap-[120px]" >
        {Footlinks.map((link) => (
          <div className="flex flex-col lg:gap-[16px] justify-start items-start" key={link.name}>
            <p className='text-[16px] font-bold '>{link.name}</p>
            <div className='flex flex-col gap-5 mt-5'>
              {link.links.map((links) => (
                <Link to={links.id} className='cursor-pointer flex flex-col gap-[8px] text-[#808080]' key={links.name}>{links.name}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Footer