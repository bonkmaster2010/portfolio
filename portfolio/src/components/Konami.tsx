import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gubby from '../icons/gub-removebg-preview.png';

const KonamiEgg = () => {
  const [showMonster, setShowMonster] = useState(false);
  const keysRef = useRef<string[]>([]); 
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
    "b", "a"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current = [...keysRef.current.slice(-9), e.key];
      
      // Check Konami code match
      if (keysRef.current.join(" ") === konamiCode.join(" ")) {
        setShowMonster(true);
        console.log(
        "%c🔥 SECRET UNLOCKED: You found the pixel monster! " + 
        "Tell the dev 'GG' for extra credit. 🔥", 
        "color: red; font-size: 14px; font-weight: bold;"
        );        
        setTimeout(() => setShowMonster(false), 8000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showMonster && (
        <motion.div
         onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ", "_blank")}
          key="monster"
          initial={{ x: "-100px", y: 0 }}
          animate={{ 
            x: "calc(100vw + 100px)",
            y: [0, -50, 0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            zIndex: 999,
          }}
           whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <img 
            src={gubby} 
            alt="gubby :D" 
            width="90"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEgg;