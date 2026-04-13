import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-20 overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 bg-[#0077b6] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,119,182,0.3)]">
            <span className="text-white font-sans font-bold text-4xl tracking-tighter lowercase">zepper</span>
          </div>
        </motion.div>

        <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase mb-6">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            Ghar Jaisa
          </motion.span>
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden text-[#0077b6]"
          >
            Khana.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-sm md:text-lg uppercase tracking-[0.3em] font-medium max-w-2xl mx-auto"
        >
          Cooked. At Your Place.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-30">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
