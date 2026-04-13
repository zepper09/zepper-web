import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen py-32 px-8 flex items-center justify-center relative">
      <motion.div style={{ y, opacity }} className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#0077b6] font-bold mb-8 block">01 / Vision</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              The "Zepto" of <br />
              <span className="italic font-serif font-normal">Home Cooking.</span>
            </h2>
            <p className="text-lg opacity-60 leading-relaxed mb-12">
              Zepper is an instant home-cooking app that works exactly like Zepto or Blinkit, but for cooks instead of groceries. We bring instant, healthy, home-style meals to every urban family.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                { title: "Instant", desc: "10-15 minute arrival cooking slots." },
                { title: "Fresh", desc: "Prepared in your own kitchen." },
                { title: "Healthy", desc: "No oily restaurant delivery guilt." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#0077b6]/20 flex items-center justify-center text-[#0077b6] group-hover:bg-[#0077b6] group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-1">{item.title}</h3>
                    <p className="text-sm opacity-50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-linear-to-br from-[#0077b6]/20 to-transparent rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/cooking/800/800" 
                alt="Cooking" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-full bg-[#0077b6]" />
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Arrival in</p>
                <p className="text-2xl font-bold tracking-tighter">12 MINS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
