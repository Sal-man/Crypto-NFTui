import eherum from './assets/etherium.svg';
import eherumwhite from './assets/etherium-white.svg';
import { motion } from "framer-motion"
import polygon from './assets/polygon.svg';
import image from './assets/img1.png';
import Marquee from "react-fast-marquee";
import SingleCarousel from './components/single_carousel_item';

function CryptoPage() {

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      <div className="flex justify-between item-center">
        <motion.div 
          animate={{y: 0}}
          transition={{duration: .6, type: 'spring'}}
          initial={{y: -100}}>
          <h4 className="text-gray-400 text-xl pb-3">your balance</h4>
          <h2 className="text-white text-5xl font-regular">$1234.56</h2>
        </motion.div>
        <motion.div
        
          transition={{duration: .5}}
          animate={{x: 20, scale: 1}}
          initial={{scale: 0, x: 0}}
        >
          <a href="#" className="block text-black bg-white p-6 rounded-[28px] text-3xl"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="17.2197" y1="4.37114e-08" x2="17.2197" y2="35" stroke="black" strokeWidth="2"/><line y1="17.7803" x2="35" y2="17.7803" stroke="black" strokeWidth="2"/></svg></a>
        </motion.div>
      </div>
      <motion.div className='mt-5 overflow-x-hidden'  
      animate={{x: 0, opacity: 1}}
      transition={{duration: 1.5, type: 'spring'}}
      initial={{x: 400, opacity: 0}}
      >
        <ul
     className='flex gap-1 mt-2'>
      <Marquee pauseOnHover={true} gradient={false}>
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          </Marquee>
        </ul>
      </motion.div>
      <motion.div  className='mt-5 overflow-x-hidden'  
      animate={{x: 0, opacity: 1}}
      transition={{duration: 1.5, type: 'spring'}}
      initial={{x: -400, opacity: 0}}>
        <ul className='flex gap-1 mt-2'>
        <Marquee pauseOnHover={true} gradient={false} direction='right'>
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          <SingleCarousel logo={eherum} title={'etherium'} />
          <SingleCarousel logo={polygon} title={'polygon'} />
          </Marquee>
        </ul>
      </motion.div>
      <div>
        <motion.div className='mt-4' 
          transition={{duration: 1, delay: .6, type: "spring", }}
          animate={{y: 0, opacity: 1}}
          initial={{y: 400, opacity: 0}}>
          <picture>
            <img className='rounded-[40px]' src={image} alt="" />
          </picture>
          <div className='flex px-6 py-6 rounded-3xl bg-[#2d2e37] justify-between text-2xl'>
            <span className='text-white flex gap-4 items-center text-3xl'><img src={eherumwhite} alt="" />0.40</span>
            <span className='text-gray-500'>07:24:13</span>
          </div>
        </motion.div>
        <motion.div className='mt-4' transition={{duration: 1, delay: 1, type: "spring"}}
          animate={{y: 0, opacity: 1}}
          initial={{y: 400, opacity: 0}}>
          <picture>
            <img className='rounded-[40px]' src={image} alt="" />
          </picture>
          <div className='flex px-6 py-6 rounded-3xl bg-[#2d2e37] justify-between text-2xl'>
            <span className='text-white flex gap-4 items-center text-3xl'><img src={eherumwhite} alt="" />0.40</span>
            <span className='text-gray-500'>07:24:13</span>
          </div>
          
        </motion.div>
      </div>


      
    </>
  )
}

export default CryptoPage
