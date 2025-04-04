"use client"
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Case } from './ui/cases-with-infinite-scroll';

export const Trusted = () => {

      const titleRef = useRef(null);
      const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
      const titleControls = useAnimation();

      useEffect(() => {
          if (isTitleInView) {
            titleControls.start("visible");
          }
        }, [isTitleInView, titleControls]);
      
        // Animation variants
        const titleVariants = {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

    
  return (
    <div className="bg-[url('/Background5.png')] bg-cover bg-center bg-no-repeat pt-10 lg:pt-20 md:pt-20 pb-64 lg:pb-96">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="relative z-20 text-center pt-20"
        >
          <div className="relative inline-block">
            <h2 className="bg-clip-text text-transparent capitalize drop-shadow-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-4xl md:text-6xl lg:text-7xl font-bold">
              Trusted By the Best
            </h2>
            <motion.div 
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={isTitleInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <Case />
          </motion.div>
    </div>
  )
}
