"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideArrowButton from "./download-button";

function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center">
  {/* Hamburger Button */}
  <Button
    className="block xl:hidden lg:hidden md:hidden bg-[#112850] hover:bg-[#112850]  text-white dark:text-white mx-4"
    onClick={() => setOpen((prevState) => !prevState)}
    aria-expanded={open}
    aria-label={open ? "Close menu" : "Open menu"}
  >
    <svg
      className="pointer-events-none text-white transition-all duration-300 w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Line */}
      <path
        d="M4 12H20"
        className={`transition-all duration-300 origin-center ${
          open ? "rotate-45 translate-y-[4px]" : "-translate-y-[6px]"
        }`}
      />
      {/* Middle Line */}
      <path
        d="M4 12H20"
        className={`transition-all duration-300 origin-center ${
          open ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      {/* Bottom Line */}
      <path
        d="M4 12H20"
        className={`transition-all duration-300 origin-center ${
          open ? "-rotate-45 -translate-y-[4px]" : "translate-y-[6px]"
        }`}
      />
    </svg>
  </Button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-[#112850] opacity-35 dark:bg-neutral-900 shadow-lg z-40 flex flex-col items-center py-10"
          >
            {/* Close Button (same as Hamburger) */}
            <Button
              className="absolute top-4 right-4 bg-[#112850] hover:bg-[#112850]"
              onClick={() => setOpen(false)}
            >
              <svg
                className="pointer-events-none transition-all duration-300"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center rotate-45 translate-y-0 transition-all duration-300"
                />
                <path
                  d="M4 12H20"
                  className="opacity-0 transition-all duration-300"
                />
                <path
                  d="M4 12H20"
                  className="origin-center -rotate-45 translate-y-0 transition-all duration-300"
                />
              </svg>
            </Button>

            {/* Navigation Items */}
            <nav className="flex flex-col justify-center text-center space-y-6 text-lg font-semibold m-auto">
              <a
                href="#"
                className="text-white hover:text-[#3c5aac] px-6 py-2 rounded-md transition duration-300 bg-opacity-10"
              >
                Vultisig Airdrop
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3c5aac] px-6 py-2 rounded-md transition duration-300 bg-opacity-10"
              >
                $VULT
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3c5aac] px-6 py-2 rounded-md transition duration-300 bg-opacity-10"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-white hover:text-[#3c5aac] px-6 py-2 rounded-md transition duration-300 bg-opacity-10"
              >
                FAQs
              </a>
              <SlideArrowButton text="Download App" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { HamburgerMenu };
