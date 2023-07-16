import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import { styles } from "../styles";
import { motion } from "framer-motion";


const Hero = () => (
  <>
    <section className={`relative overflow-hidden w-full h-screen mx-auto`}>
      <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome To <br /> My Personal Portfolio
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I craft stunning designs, intuitive user <br className='sm:block hidden' />
            interfaces, and cutting-edge web applications
          </p>
          <div className='absolute xs:bottom-10 bottom-32 flex justify-left'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#DFFF0F] flex justify-center items-start'>
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className='w-3 h-3 rounded-full bg-[#DFFF0F] mb-1'
                />
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 z-0">
          {/* Animation component goes here */}
          <BackgroundAnimation />
        </div>
      </div>
      </section>
  </>
);

export default Hero;