import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    { title: "Open App", desc: "Select a cooking slot (e.g., 'Tonight's Dinner')." },
    { title: "Add to Cart", desc: "Choose your meal preference or specific time window." },
    { title: "Checkout", desc: "Instant dispatch (like Zepto/Blinkit)." },
    { title: "10-15 Min Arrival", desc: "A verified Zepper cook arrives at your doorstep." },
    { title: "Cook & Rate", desc: "The meal is cooked in your kitchen; pay and rate in-app." }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#0077b6] font-bold mb-4 block">Process</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">How it Works</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 hidden md:block" />
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#0077b6] group-hover:border-[#0077b6] transition-all duration-500">
                  <span className="text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
