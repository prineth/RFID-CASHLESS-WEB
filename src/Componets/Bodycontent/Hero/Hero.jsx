import React from 'react';
import HeroPng from './RFI.png';
import { motion } from "framer-motion";
import { FadeRight } from '../../../utility/animation';

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-[650px]"></div>

      {/* Main details */}
      <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div className="text-center md:text-left space-y-6 lg:max-w-[20000px]">
          <motion.h1 variants={FadeRight(0.6)} initial="hidden" animate="visible" className="text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-poppins">
            Welcome to Our RFID Solution
          </motion.h1>
          <div className="bg-purple-900 text-white p-10 rounded-lg shadow-lg">
            <motion.p variants={FadeRight(0.9)} initial="hidden" animate="visible" className="text-4xl lg:text-2xl text-black-400 text-center md:text-left space-y-6 lg:max-w-[500px]">
              Revolutionize Your Transactions with RFID Technology. Secure, fast, and contactless payment and identification solutions for a smarter future. RFID cashless payment systems are an innovative and efficient solution for modern transactions.
            </motion.p>
            {/* Button */}
            <div className="flex justify-left">
              <button  className="primary-btn">More Info</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background image */}
      {/*<div className="flex justify-center items-center md:w-11/12">
        <img src={HeroPng} alt="" className="w-[350px] md:w-[550px] drop-shadow"      />
      </div>*/}
    </section>
  );
};

export default Hero;
