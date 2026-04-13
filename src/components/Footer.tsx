import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-32 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-12">
              Ready for <br />
              <span className="text-[#0077b6]">Dinner?</span>
            </h2>
            <button className="group flex items-center gap-4 text-2xl font-bold tracking-tighter uppercase">
              Download the App
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                →
              </div>
            </button>
          </div>
          
          <div className="flex flex-col justify-end gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-30 mb-4">Contact</p>
                <a href="mailto:hello@zepper.in" className="text-lg hover:text-[#0077b6] transition-colors">hello@zepper.in</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-30 mb-4">Location</p>
                <p className="text-lg">Hyderabad, India</p>
              </div>
            </div>
            
            <div className="flex gap-8">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0077b6] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">Z</span>
            </div>
            <span className="font-bold tracking-tighter text-sm uppercase">ZEPPER</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 Zepper Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
