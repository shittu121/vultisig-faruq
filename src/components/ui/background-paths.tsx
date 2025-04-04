"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlideArrowButton from "./download-button";
import { HamburgerMenu } from "./hamburger-menu";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.3 + i * 0.015,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[#5aac9a] dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden 
            bg-[#0d1b33] dark:bg-neutral-950 
            bg-[url('/Background4.png')] sm:bg-[url('/Background4.png')] md:bg-[url('/Background1.png')] lg:bg-[url('/Background1.png')] 
            bg-cover lg:bg-cover md:bg-cover bg-center bg-no-repeat h-screen"
        >
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent text-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* <div className="text-2xl font-bold">YourLogo</div> */}
                    <Image src="/logo.png" alt="logo" height={20} width={100} className="z-20 w-40"/>
                    <ul className="flex items-center space-x-10 text-xl sm-hidden">
                        <li>
                            <a href="#" className="hover:text-[#3c5aac] transition-all ease-in-out duration-300 md:hidden lg:flex">Vultisig Airdrop</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#3c5aac] transition-all ease-in-out duration-300">$VULT</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#3c5aac] transition-all ease-in-out duration-300">Docs</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#3c5aac] transition-all ease-in-out duration-300">FAQs</a>
                        </li>
                        <SlideArrowButton text="Download App" />
                    </ul>
                </div>
                <HamburgerMenu />
                {/* Right-side highlight effect */}
                <div className="absolute inset-y-0 right-0 w-4/5 bg-gradient-to-l from-[#3c5aac] to-transparent opacity-35 pointer-events-none"></div>
            </nav>

            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative -z-0 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter mt-20">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-white"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <SlideArrowButton text="Download App" className="w-60 py-2" />
                    
                </motion.div>
            </div>
        </div>
    );
}
