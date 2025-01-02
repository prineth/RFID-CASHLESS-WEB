import React from 'react'
import { motion } from 'framer-motion'
import { FadeRight,FadeUp } from '../../../utility/animation'



const Bannertwo = () => {
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
                className="text-3xl lg:text-4xl font-bold uppercase">Contactless Transactions
                </motion.h1>

                <motion.p variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="text-1xl lg:text-1xl font-semibold">
                   Make payments easier with RFID-enabled cards and wristbands for quick 
                   and secure transactions.RFID tags in devices like cards, wristbands, or 
                   mobile devices, which communicate wirelessly with RFID readers to process 
                   transactions instantly. This approach is widely adopted in various settings,
                    such as retail, events, transportation, and amusement parks, due to its speed, 
                    convenience, and enhanced security.
                </motion.p>
            </div>
        </div>

    
    </div>
  </section>
     
}

export default Bannertwo