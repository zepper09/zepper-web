import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-24 h-24 bg-[#0077b6] rounded-full flex items-center justify-center mb-8"
            >
              <span className="text-white font-bold text-2xl">Z</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-white/20 absolute -bottom-4 left-0"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 overflow-hidden"
          >
            <p className="text-[10px] uppercase tracking-[1em] font-bold opacity-50">
              Initializing Zepper
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
