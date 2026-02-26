import { useLanguage } from "@/contexts/LanguageContext";
import { Eye, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";

const reasons = [
  { key: "visibility", icon: Eye },
  { key: "youth", icon: Users },
  { key: "growth", icon: TrendingUp },
];

const WhySponsorSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
            {t("why.title")}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.key}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -5 }}
              className="card-gradient rounded-xl p-8 border border-border hover:glow-amber transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{t(`why.${r.key}`)}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(`why.${r.key}.desc`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySponsorSection;
