import { h1, h2 } from "framer-motion/client"
import morahlinLogo from '../assets/morahlin logo.png';

const Logo = () => {
  return (
    <h2>
       <div className="flex items-center gap-4">
           <img src={morahlinLogo} width={45} height={45} alt="Morahlin Logo" />
  <div className='font-saint text-[30px] md:text-[40px]'> MØRÅHŁĮŇ</div>
  </div>
    </h2>
    
  
    
  )
}

export default Logo