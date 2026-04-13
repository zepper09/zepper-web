import { motion } from "motion/react";

export default function Problem() {
  const problems = [
    { title: "Exhaustion", desc: "Both parents working 9-10+ hours; no energy left to cook." },
    { title: "Parental Guilt", desc: "Feeling forced to feed children junk food or oily restaurant delivery." },
    { title: "The Helper Gap", desc: "Full-time cooks are expensive; part-time cooks are unreliable." },
    { title: "Health", desc: "Consistent consumption of high-sodium, oily food." }
  ];

  return (
    <section className="py-32 px-8 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.8] uppercase">
            The Daily <br />
            <span className="text-[#0077b6]">Dinner Tension.</span>
          </h2>
          <p className="max-w-md text-sm uppercase tracking-widest font-medium opacity-60">
            Middle-class urban families face a recurring struggle: they crave fresh, home-cooked food but lack the time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 border-t border-black/10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#0077b6", color: "#ffffff" }}
              className="p-12 border-r border-b border-black/10 transition-colors duration-500 group"
            >
              <span className="text-xs font-mono mb-12 block opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
