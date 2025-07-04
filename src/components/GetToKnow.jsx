import { Link } from 'react-router-dom';
import { know } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const GetToKnow = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <section ref={ref} id='about' className='flex flex-col gap-[32px] mt-[20vh] xxl:h-[80vh] p-5'>
      <h2 className='flex justify-center w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]'>
       A Little About Me
      </h2>

      <div className='flex flex-wrap items-start justify-around gap-[60px] max-w-full p-3 md:p-10 mt-[5%]'>
        {know.map((about, index) => (
          <motion.div
            key={about.name}
            animate={animate ? 'show' : 'hidden'}
            variants={fadeIn('left', 'spring', 0.4 * index, 0.75)}
                className='flex flex-col items-center justify-between rounded-2xl h-auto md:h-[400px] w-full max-w-[350px] p-6 bg-[#0f172a] shadow-xl transition-transform duration-300 hover:scale-105'
              >
            <Link to={`/${about.id}`} className='flex flex-col gap-7 items-center'>
              <p className='text-[32px] font-bold'>{about.name}</p>
            
            <p className='text-[16px] text-[#808080 ]'>{about.description}</p>
            <div className='site-btn flex justify-start px-14 py-3 rounded-[10px] bg-tertiary items-start'>
                <p>{about.linkName}</p>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GetToKnow;