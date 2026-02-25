import { useLanguage } from "@/contexts/LanguageContext";
// Uses lang directly for labels
import { TrendingUp, Users, Eye, Calendar } from "lucide-react";

const StatisticsSection = () => {
  const { lang } = useLanguage();

  const stats = [
    { value: "150+", labelFr: "Membres actifs", labelEn: "Active Members", icon: Users },
    { value: "4", labelFr: "Éditions organisées", labelEn: "Editions Organized", icon: Calendar },
    { value: "300+", labelFr: "Participants cumulés", labelEn: "Total Participants", icon: TrendingUp },
    { value: "500+", labelFr: "Spectateurs", labelEn: "Spectators", icon: Eye },
    { value: "6+", labelFr: "Sponsors partenaires", labelEn: "Partner Sponsors", icon: Users },
    { value: "5", labelFr: "Challenges proposés", labelEn: "Challenges Offered", icon: TrendingUp },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
          {lang === "fr" ? "Statistiques du Club" : "Club Statistics"}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-gradient rounded-xl p-6 md:p-8 text-center border border-border hover:glow-cyan transition-all group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-black text-foreground">{stat.value}</p>
              <p className="font-heading text-sm text-muted-foreground mt-2">
                {lang === "fr" ? stat.labelFr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
