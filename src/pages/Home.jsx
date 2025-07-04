import { useEffect } from 'react';
import { GetInTouch, GetToKnow, Hero, Projects } from '../components'
import { Helmet } from 'react-helmet';



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
    <Helmet>
        <title>MØRÅHŁĮŇ</title>
        <meta name="description" content="Skilled frontend developer with 2+ years of development experience. Proficient in ReactJS, JavaScript, NextJS, TypeScript, CSS3, and TailwindCSS. Let's collaborate to create something extraordinary that will make a lasting impact!" />
        <meta property="og:image" />
      </Helmet>
    <div className="pt-[8%] mx-3 md:mx-0 w-[90vw]">
              <Hero />
              <Projects />
               <GetToKnow />
              <GetInTouch />
              
              
            </div>
    </>
  )
}

export default Home