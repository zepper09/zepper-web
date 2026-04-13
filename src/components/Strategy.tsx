import { motion } from "motion/react";

export default function Strategy() {
  const strategies = [
    { title: "Micro-Clusters", desc: "Operating in 2–3 km 'Kitchen Zones' for 10-minute promises." },
    { title: "Safety First", desc: "Mandatory police verification, Aadhaar linking, and audio logging." },
    { title: "Standard Kit", desc: "Every cook carries an apron, hairnet, and basic spice/oil kit." },
    { title: "Cook Academy", desc: "3-day workshop on hygiene, standardization, and soft skills." }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 gap-12">
              {strategies.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8"
                >
                  <span className="text-xs font-mono opacity-30 pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{s.title}</h3>
                    <p className="text-sm opacity-50 leading-relaxed max-w-sm">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#0077b6] font-bold mb-8 block">Strategy</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              The Engine <br />
              <span className="italic font-serif font-normal text-white/40">Behind the Speed.</span>
            </h2>
            <p className="text-lg opacity-60 leading-relaxed mb-12">
              To reach Unicorn Status, the math must work for the middle class while remaining profitable. Our operational engine is built on micro-clusters and high cook density.
            </p>
            <div className="p-8 rounded-3xl bg-linear-to-br from-[#0077b6] to-[#00b4d8] text-white">
              <p className="text-xs uppercase tracking-widest font-bold mb-4 opacity-70">Revenue Model</p>
              <p className="text-3xl font-bold tracking-tighter">15–20% Margin</p>
              <p className="text-sm opacity-80 mt-2">on each booking session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
