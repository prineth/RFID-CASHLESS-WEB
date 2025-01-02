import React from 'react'
import { motion } from 'framer-motion'
import { FadeRight,FadeUp } from '../../../utility/animation'

const Bannerfour = () => {
  return <section className="">
  <div className="container grid grid-cols-1 md:grid-cols-2 
  space-y-6 md:space-y-0 py-14 md:py-24">
        
        {/*image one info*/}
        <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold uppercase">Real-Time Monitoring
                </motion.h1>

                <motion.p variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="text-1xl lg:text-1xl font-semibold">
                   Track assets, products, or individuals in real-time with high precision and accuracy.
                   user-friendly but also a reliable tool for monitoring and managing financial activities.
                    As society continues to shift towards contactless solutions, RFID cashless payment systems are playing a pivotal role in reshaping how people conduct everyday transactions.
                </motion.p>
            </div>
        </div>

    
    </div>
  </section>
}

export default Bannerfour