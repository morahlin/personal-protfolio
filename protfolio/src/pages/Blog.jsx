import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import morahlinLogo from '../assets/morahlin logo.png';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

    return (
      <div className='flex flex-col gap-5 py-[150px] justify-center items-center'>
      <div className="px-10">
              <div className="flex items-center gap-4">
                        <img src={morahlinLogo} width={40} height={0} alt="Morahlin Logo" />
        <h1 className='font-black lg:text-[50px] sm:text-[60px] text-[30px] lg:leading-[70px] mt-7 '>Legal Intelligence for Innovators!</h1>
      </div>
      </div>
      <div className="bg-[#808080] h-[1px] w-full"></div>
       
       <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
       <p>From launching bold ideas to scaling ventures and staying ahead of legal curves — I break down the essentials that shape the startup world. Whether you're building, backing, or simply exploring, you'll find sharp, actionable insights right here.

</p>
        <div className="flex items-center gap-4">
          <img src={morahlinLogo} width={24} height={24} alt="Morahlin Logo" />
          <p className='font-bold'>Disclaimer</p>
        </div>
        <p>The information shared on this blog is intended for general educational and informational purposes only. It does not constitute legal advice or create an attorney-client relationship. The views expressed are my own, based on personal research and experience. For legal guidance specific to your situation, please consult a licensed legal professional.</p>
      <div>
        <p className='font-bold'>You said:


Professional & Clear</p>
          <p>Browse the newest legal perspectives and thought pieces.
          </p>
      </div>
       </div>
      </div>
      
    );
  }
  
  export default Blog;