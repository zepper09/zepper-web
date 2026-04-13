import { motion, AnimatePresence } from "motion/react";
import { useDynamicPricing } from "@/src/hooks/useDynamicPricing";
import { CloudRain, Zap, Sun } from "lucide-react";

export default function ServiceModules() {
  const { multiplier, reasons, weather } = useDynamicPricing();

  const modules = [
    { 
      title: "The Quick Fix", 
      duration: "20–30 mins", 
      basePrice: 199,
      desc: "1 Dal, 1 Sabzi, Fresh Rotis. Perfect for the 'emergency' dinner." 
    },
    { 
      title: "The Family Feast", 
      duration: "45–60 mins", 
      basePrice: 399,
      desc: "Full meal (3–4 items) for a family of four." 
    },
    { 
      title: "The Prep-Mate", 
      duration: "30 mins", 
      basePrice: 149,
      desc: "No cooking—just chopping, kneading dough, and marinating." 
    },
    { 
      title: "The Lunchbox Dash", 
      duration: "20 mins", 
      basePrice: 179,
      desc: "Early morning slot (6:00 AM – 8:00 AM) for healthy tiffins." 
    }
  ];

  return (
    <section className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#0077b6] font-bold mb-4 block">Modules</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Time-Boxed <br />Service.</h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="max-w-sm text-sm opacity-50 leading-relaxed">
              Zepper doesn't just "cook"; it provides specific modules to prevent cooks from being "stuck" and ensure maximum efficiency.
            </p>
            
            {/* Dynamic Pricing Status */}
            <AnimatePresence mode="wait">
              {multiplier > 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#0077b6]/10 border border-[#0077b6]/20"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0077b6] flex items-center justify-center animate-pulse">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#0077b6]">Surge Pricing Active</p>
                    <p className="text-xs opacity-60">{reasons.join(" + ")}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono">
                    {weather === "rain" ? <CloudRain className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                    {multiplier.toFixed(1)}x
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((module, i) => {
            const currentPrice = Math.round(module.basePrice * multiplier);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-12 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#0077b6]/50 transition-all duration-700"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-xs font-mono opacity-30">0{i + 1}</span>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-4 py-1 rounded-full bg-[#0077b6]/10 text-[#0077b6] text-[10px] uppercase tracking-widest font-bold">
                        {module.duration}
                      </span>
                      <div className="flex items-baseline gap-2">
                        {multiplier > 1 && (
                          <span className="text-xs opacity-30 line-through">₹{module.basePrice}</span>
                        )}
                        <span className="text-2xl font-bold tracking-tighter text-white">
                          ₹{currentPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6 group-hover:text-[#0077b6] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm opacity-50 leading-relaxed max-w-xs group-hover:opacity-100 transition-opacity">
                    {module.desc}
                  </p>
                </div>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0077b6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
