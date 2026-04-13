/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Howl } from "howler";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Preloader from "./components/Preloader";

import ServiceModules from "./components/ServiceModules";
import Strategy from "./components/Strategy";

export default function App() {
  useEffect(() => {
    // Subtle hover sound
    const hoverSound = new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"],
      volume: 0.1,
    });

    const clickSound = new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
      volume: 0.2,
    });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        hoverSound.play();
      }
    };

    const handleClick = () => {
      clickSound.play();
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-[#0077b6] selection:text-white">
      <Preloader />
      <CustomCursor />
      <Background />
      <Navbar />
      
      <Hero />
      
      <div id="vision">
        <Vision />
      </div>
      
      <div id="problem">
        <Problem />
      </div>

      <ServiceModules />
      
      <Strategy />
      
      <div id="service">
        <HowItWorks />
      </div>
      
      <Footer />
    </main>
  );
}
