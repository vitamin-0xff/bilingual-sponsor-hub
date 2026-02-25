import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Robotek IR 4.0 Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70 dark:bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-heading font-semibold text-primary">{t("hero.date")}</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="text-gradient-cyan">ROBOTEK</span>{" "}
          <span className="text-gradient-amber">IR 4.0</span>
        </h1>

        <p className="font-heading text-xl md:text-2xl font-semibold text-[hsl(0_0%_95%)] mb-2">
          {t("hero.subtitle")}
        </p>
        <p className="font-heading text-lg text-[hsl(185_60%_70%)] mb-4 italic">
          {t("hero.theme")}
        </p>

        <div className="flex items-center justify-center gap-2 mb-10 text-[hsl(0_0%_80%)]">
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">{t("hero.location")}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary animate-pulse-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
