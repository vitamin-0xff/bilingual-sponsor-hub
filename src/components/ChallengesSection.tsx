import { useLanguage } from "@/contexts/LanguageContext";
import { Baby, Route, Mountain, Shield, Swords } from "lucide-react";

const challenges = [
  { key: "junior", icon: Baby },
  { key: "line", icon: Route },
  { key: "terrain", icon: Mountain },
  { key: "sumo", icon: Shield },
  { key: "fighter", icon: Swords },
];

const ChallengesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="challenges" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
          {t("challenges.title")}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {challenges.map((ch) => (
            <div
              key={ch.key}
              className="card-gradient rounded-xl p-6 border border-border hover:glow-cyan transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <ch.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {t(`challenges.${ch.key}.title`)}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {t(`challenges.${ch.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
