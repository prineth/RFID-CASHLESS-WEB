import React from 'react'
import img1 from './hand.png';
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from '../../../utility/animation';

const Banner = () => {
  return <section className="bg-secondary/20">
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/*image one */}
        <div className="flex justify-center items-center">
        <motion.img 
        initial={{opacity:1, scale:1}}
        whileInView={{opacity:1, scale:1 }}
        transition={{type: "spring",stiffness:100, delay:0.2}}
        viewport={{once:true}}
        src={img1} alt="" className="w-[500px] md:max-w-[900px] h-full object-cover"  />
        </div>
        
        {/*image one info*/}
        <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold uppercase">Streamline Payments and Access Control with RFID Technology
                </motion.h1>

                <motion.p variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="text-1xl lg:text-1xl font-semibold">
                    RFID (Radio Frequency Identification) is revolutionizing 
                    the way businesses manage payments, inventory, and access control. 
                    With RFID tags and readers, we offer seamless, contactless solutions 
                    for industries ranging from retail to logistics, events, and more.
                </motion.p>
            </div>
        </div>

    
    </div>
  </section>
}

export default Banner