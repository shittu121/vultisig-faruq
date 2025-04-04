"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion, useAnimation, useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator } from "./ui/carousel";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      description: "Sign up in seconds with your email or social media accounts",
      image: "/App.png",
    },
    {
      id: 2,
      title: "Set Preferences",
      description: "Customize your experience by selecting your interests",
      image: "/Group2.png",
    },
    {
      id: 3,
      title: "Explore Content",
      description: "Discover personalized recommendations just for you",
      image: "/Group1.png",
    },
  ];

  // Animation reference
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

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5 + index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const badgeVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8 
      }
    },
    hover: { 
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="relative w-full overflow-x-hidden">
      <BackgroundGradientAnimation className="">
        {/* Fixed-position Title */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="relative z-20 text-center pt-20"
        >
          <div className="relative inline-block">
            <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-4xl md:text-6xl lg:text-7xl font-bold">
              How It Works
            </h2>
            <motion.div 
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={isTitleInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <motion.p 
            className="text-white/80 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Three simple steps to transform your experience
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative z-10 max-w-7xl mx-auto sm-hidden px-4 sm:px-6 pt-16 pb-20 h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center border border-white/10 transition-all"
              >
                <div className="relative w-full h-full mb-8 overflow-hidden rounded-xl group">
                  <motion.div
                    whileHover="hover"
                    variants={imageVariants}
                    className="w-full h-full"
                  >
                    <Image
                      src={step.image}
                      alt={`Step ${step.id}`}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                
                <motion.div
                  variants={badgeVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="w-16 h-44 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-xl mb-4 shadow-lg z-10"
                >
                  {step.id}
                </motion.div>
                
                <motion.h3 
                  className="text-white text-2xl font-semibold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-white/70 text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps Section - Small Screens */}
<div className="w-full flex lg:hidden md:hidden mt-5">
  <Carousel className="w-full h-[400px] pr-4 pl-2">
    <CarouselContent>
      {steps.map((step, index) => (
        <CarouselItem key={step.id} className="p-4">
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center border border-white/10 transition-all"
          >
            <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl group">
              <motion.div whileHover="hover" variants={imageVariants} className="w-full h-full">
                <Image src={step.image} alt={`Step ${step.id}`} fill className="object-contain" />
              </motion.div>
            </div>

            <motion.div
              variants={badgeVariants}
              initial="initial"
              whileInView="animate"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-xl mb-2 shadow-lg z-10"
            >
              {step.id}
            </motion.div>

            <motion.h3 className="text-white text-lg font-semibold mb-2">{step.title}</motion.h3>
            <motion.p className="text-white/70 text-sm">{step.description}</motion.p>
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselNavigation />
    <CarouselIndicator className="top-[26.8rem]"/>
  </Carousel>
</div>
      </BackgroundGradientAnimation>
    </section>
  );
};

export default HowItWorks;