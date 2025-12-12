import  { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      mirror: false,
      duration: 1000,
      once: true,
    });
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [loading, setLoading] = useState(false);
  const [sendButton, setSendButton] = useState('Send');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(form.email)) {
      setIsValidEmail(false);
      return;
    }

    setLoading(true);
    setSendButton('Redirecting...');

    const phoneNumber = '2349055492653'; // Replace with YOUR WhatsApp number (no "+" or leading zero)

    const message = `👋 Hello Morahlin!%0A%0A` +
      `My name is ${form.name}.%0A` +
      `Email: ${form.email}%0A%0A` +
      `Message:%0A${encodeURIComponent(form.message)}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappURL, '_blank');

    setTimeout(() => {
      setSendButton('Sent!');
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setLoading(false);
      setTimeout(() => setSendButton('Send'), 2000);
    }, 1000);
  };

  return (
    <div className='w-[95vw] md:w-full flex items-center justify-center py-20 px-16 overflow-hidden'>
      <div  className='flex flex-col items-start justify-center gap-12' >
       <div 
       data-aos="zoom-in-down"
       data-aos-easing="ease"
       data-aos-duration="1500"
       data-aos-delay='0.5'
       data-aos-mirror="false"
       className="md:p-0 p-4">
       <h1 className='font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7 '>Connect with Me</h1>
        <p className='text-[18px]'>Let's build something awesome!</p>
       </div>

       <div 
       data-aos="zoom-in"
       data-aos-easing="ease"
       data-aos-duration="1500"
       data-aos-delay='0.5'
       data-aos-mirror="false"
       className="form border-[0.3px] border-[#808080] rounded-2xl px-5 md:px-10 md:w-[600px] xl:h-[610px] lg:w-[800px] md:h-690px h-[750px] w-[330px]">

          <div className="flex gap-16 md:gap-60 p-4 items-center border-b-[0.3px] border-[#808080] w-full">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#F63636] rounded-full"></div>
              <div className="w-3 h-3 bg-[#F6C136] rounded-full"></div>
              <div className="w-3 h-3 bg-[#68F636] rounded-full"></div>
            </div>
            <p>New Message</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-6 flex flex-col gap-10  justify-center'>
          <label htmlFor="name" className="flex flex-wrap gap-5 ">
            <span className='flex items-center'>Your Name:</span>
            <input type="text" name='name' id='name' value={form.name} onChange={handleChange} placeholder="What's your name?" required 
            className='outline-none p-2 border-b-[0.5px] border-[#808080]'  
            aria-label='name'/>
          </label>

          <label htmlFor="email" className="flex flex-wrap items-center gap-5">
                <span className='flex items-center'>Your Email:</span>
                <input
                  type="text"
                  name='email'
                  id='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={`outline-none  border-b-[0.5px] border-[#808080] p-2 font-medium ${!isValidEmail ? 'border-red-500' : ''}`}
                />
                {!isValidEmail && (
                  <span className="text-red-500">Invalid email format</span>
                )}
              </label>

          <label htmlFor="" className="flex flex-col">
            <span className=' font-medium mb-4'>Submit Your Message:</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="Write your message here" required className='placeholder:text-[#808080] bg-tranparent outline-none p-4  border-[0.5px] border-[#808080] rounded-2xl ' />
          </label>

            <div className="w-full flex  justify-center items-center">
            <button type='submit' className='main-button w-[80%] md:w-[40%] lg:w-[30%]'>{loading ? 'Sending...' : sendButton}</button>
            </div>
          </form>
       </div>
      </div>
    </div>
  )
}

export default Contact