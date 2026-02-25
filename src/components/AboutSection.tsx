import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Trophy, UserCheck, Handshake } from "lucide-react";

const stats = [
  { key: "about.members", value: "150+", icon: Users },
  { key: "about.editions", value: "4", icon: Trophy },
  { key: "about.participants", value: "300+", icon: UserCheck },
  { key: "about.sponsors_count", value: "6+", icon: Handshake },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
          {t("about.title")}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-muted-foreground leading-relaxed font-body">{t("about.intro")}</p>
          <p className="text-muted-foreground leading-relaxed font-body">{t("about.mission")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="card-gradient rounded-xl p-6 text-center border border-border hover:glow-cyan transition-shadow group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="font-heading text-sm text-muted-foreground mt-1">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
