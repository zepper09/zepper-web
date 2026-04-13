import { useState, useEffect } from "react";

export type WeatherCondition = "clear" | "rain" | "storm";

export interface PricingState {
  multiplier: number;
  isPeakHour: boolean;
  weather: WeatherCondition;
  reasons: string[];
}

export function useDynamicPricing() {
  const [pricing, setPricing] = useState<PricingState>({
    multiplier: 1.0,
    isPeakHour: false,
    weather: "clear",
    reasons: [],
  });

  useEffect(() => {
    const calculatePricing = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // Peak Hours: 7:30 PM (1170 mins) to 9:00 PM (1260 mins)
      const isPeakHour = currentTimeInMinutes >= 1170 && currentTimeInMinutes <= 1260;

      // Mock weather - in a real app, this would fetch from an API
      const seconds = now.getSeconds();
      let weather: WeatherCondition = "clear";
      if (seconds > 45) {
        weather = "storm";
      } else if (seconds > 20) {
        weather = "rain";
      }

      let multiplier = 1.0;
      const reasons: string[] = [];

      if (isPeakHour) {
        multiplier += 0.5;
        reasons.push("Peak Dinner Hours");
      }

      if (weather === "rain") {
        multiplier += 0.3;
        reasons.push("Adverse Weather");
      } else if (weather === "storm") {
        multiplier += 0.6;
        reasons.push("Severe Weather");
      }

      setPricing({
        multiplier,
        isPeakHour,
        weather,
        reasons,
      });
    };

    calculatePricing();
    const interval = setInterval(calculatePricing, 10000); // Update every 10s

    return () => clearInterval(interval);
  }, []);

  return pricing;
}
