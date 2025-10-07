import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { ChevronRightIcon } from "lucide-react";

function HeroSection() {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2e5ed4,
          backgroundColor: 0x7f7fde,
        })
      );
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return <div ref={myRef} className="absolute inset-0" />;
}

export default function Details() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <HeroSection />
      <motion.div
        className="relative z-10 flex flex-col  gap-10 text-center w-89 h-73 bg-gray-200 bg-opacity-80 rounded-md p-6  transition duration-300  border-3 border-blue-200 hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex">
            <button>
            < ChevronRightIcon className="text-blue-700 bg-blue-200 rounded-md cursor-pointer  transition duration-300 hover:scale-105 "/>
            </button>
        </div>
        <div className="flex gap-6 flex-col">
        <h2 className="text-blue-700 text-3xl font-bold ">{title}</h2>
        <p className="text-blue-700 text-2xl font-semibold bg-blue-200 min-h-20 rounded-md  ">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}