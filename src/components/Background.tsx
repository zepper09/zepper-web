import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Subtle atmospheric gradients */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0077b6]/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00b4d8]/5 blur-[100px]"
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
