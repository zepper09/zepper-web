import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0077b6] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">Z</span>
        </div>
        <span className="font-bold tracking-tighter text-xl">ZEPPER</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        {["About", "Service", "Vision", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.2em] font-medium opacity-50 hover:opacity-100 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-500">
        Book Now
      </button>
    </motion.nav>
  );
}
