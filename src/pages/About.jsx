import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { useEffect } from 'react';
import morahlinLogo from '../assets/morahlin logo.png';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
    <div className='flex flex-col gap-10 py-[150px] justify-center items-center'>

      <div className="px-10">
        <h1 className='font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7 '>A little bit about ME</h1>
        <p className='text-[#808080]'>Who I am and what i do.</p>
      </div>

      <div className="bg-[#808080] h-[1px] w-full"></div>

      <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHO I AM</h2>
          <p>Hello, I’m  <span className='font-bold'>Obinna </span>,  a passionate self-taught Full Stack Developer based in Nigeria.
My journey into web development has been an exciting ride fueled by curiosity, creativity, and the desire to build meaningful digital experiences. From crafting clean, responsive user interfaces to developing powerful backend systems, I enjoy working across the entire stack to bring ideas to life.</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DO</h2>
          <p>As a Full Stack Developer, I design and build robust, scalable web applications from front to back. I’m passionate about turning complex ideas into clean, efficient code — bringing digital experiences to life through both aesthetic interfaces and powerful backend logic.</p>
            <ul className="list-none pl-5 flex flex-col gap-4">
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Design, develop, and maintain full-stack web applications using technologies like Next.js, React, Node.js, and Firebase.
              </li>
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Build RESTful APIs and integrate third-party services to enable smooth data flow and real-time functionality.


              </li>
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Develop clean, responsive UI components while ensuring performance, accessibility, and cross-device compatibility.
              </li>
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Collaborate closely with designers, developers, and stakeholders to plan features, solve problems, and ship updates efficiently.
              </li>
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Write scalable backend logic, handle database modelin stack to maintain a stable and reliable product.
              </li>
              <li className='flex items-center gap-5'>
                <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
                <span className='text-[28px]'></span> Contribute to code reviews, CI/CD workflows, and agile processes to support a collaborative and high-quality development environment.
              </li>
            </ul>
        </div>


        <div className="flex flex-col gap-5">
            <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
          <h2 className='font-bold'>WHAT I DID</h2> 
          <p>At PersonaRise, I worked as a Growth Marketing Associate where I focused on driving digital engagement through strategic content efforts. I managed and optimized website content, implemented SEO best practices, built high-quality backlinks, and launched targeted email campaigns. I also developed engaging social media content—particularly for Twitter—to grow brand visibility and audience interaction..</p>
        </div>

        <div className="flex flex-col gap-5">
           <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
          <h2 className='font-bold'>EDUCATION</h2>
          <p>I began my Full Stack JavaScript journey with The Odin Project — an intensive, project-based program that built my skills across the entire web development stack. It equipped me with a strong command of front-end technologies like HTML5, CSS3, JavaScript, React.js, and Next.js, while also deepening my backend knowledge with tools such as Node.js, GraphQL, and Firebase. This experience shaped my ability to build fully functional, scalable applications from the ground up — both client and server side.</p>
        </div>

        <div className="flex flex-col gap-5">
            <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
          <h2 className='font-bold'>SKILLS</h2>
          <p>My toolkit includes a variety of skills such as JavaScript (ReactJS, NextJS, TypeScript, ES6, EsLint, Context API), ThreeJS for 3D animations, GitHub collaboration, CSS expertise (CSS3, TailwindCSS), Figma for design, and an agile mindset that fosters effective teamwork and communication.</p>
        </div>
      </div>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>
        Feel free to reach out to me via <span> </span>
        <a href="mailto:morahlinmorahmorahlin@gmail.com" className='font-bold underline underline-offset-4'>
          email  
          </a>  
        .<span> </span>Dive into my professional journey through my  <span> </span>
        <a  href="https://flowcv.com/resume/34q1jvd2lsoh" target="blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
          Resume
        </a>
        ,  <span> </span>or connect with me on  <span> </span> 
        <a href="https://www.facebook.com/mola.mola.615302/" target="_blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
        FaceBook
        </a>
        . <span> </span>
      </p>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>Let's collaborate and build something great together,</p>

      <Logo /> <img src={morahlinLogo} width={40} height={40} alt="Morahlin Logo" />

      <Link to="/contact" className="touch-btn flex items-center h-[50px] md:w-[30%] w-[60vw] justify-center bg-[#181818] rounded-[1.87rem] text-[18px]">
          <button className=" flex items-center font-semibold">Get in touch</button>
          </Link>
    </div>
  );
};

export default About;