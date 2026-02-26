import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

const TARGET_DATE = new Date("2026-04-05T07:00:00").getTime();

const useCountdown = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const countdown = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Robotek IR 4.0 Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70 dark:bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6"
        >
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-heading font-semibold text-primary">{t("hero.date")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-gradient-cyan">ROBOTEK</span>{" "}
          <span className="text-gradient-amber">IR 4.0</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="font-heading text-xl md:text-2xl font-semibold text-[hsl(0_0%_95%)] mb-2">
            {t("hero.subtitle")}
          </p>
          <p className="font-heading text-lg text-[hsl(185_60%_70%)] mb-4 italic">
            {t("hero.theme")}
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 sm:gap-5 mb-6"
        >
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="font-display text-3xl sm:text-5xl font-black text-[hsl(0_0%_95%)] tabular-nums">
                {String(countdown[unit]).padStart(2, "0")}
              </span>
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-wider text-primary mt-1">
                {lang === "fr"
                  ? { days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec" }[unit]
                  : { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" }[unit]}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-2 mb-10 text-[hsl(0_0%_80%)]"
        >
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">{t("hero.location")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#packs"
            className="px-8 py-3 rounded-lg font-heading font-bold text-lg uppercase tracking-wider bg-primary text-primary-foreground hover:brightness-110 transition-all glow-cyan"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-heading font-bold text-lg uppercase tracking-wider border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            {t("hero.discover")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown className="w-6 h-6 text-primary animate-pulse-glow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
