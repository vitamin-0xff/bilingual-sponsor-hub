import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell,
} from "recharts";

const StatisticsSection = () => {
  const { lang } = useLanguage();

  const editions = [
    lang === "fr" ? "1ère Éd." : "1st Ed.",
    lang === "fr" ? "2ème Éd." : "2nd Ed.",
    lang === "fr" ? "3ème Éd." : "3rd Ed.",
    lang === "fr" ? "4ème Éd. (est.)" : "4th Ed. (est.)",
  ];

  const socialMediaData = editions.map((name, i) => ({ name, value: [17.856, 150.186, 265.47, 500][i] }));
  const visitorsData = editions.map((name, i) => ({ name, value: [600, 800, 1000, 1500][i] }));
  const teamsData = editions.map((name, i) => ({ name, teams: [70, 80, 135, 180][i], participants: [210, 240, 405, 540][i] }));
  const budgetData = editions.map((name, i) => ({ name, value: [7000, 8000, 10000, 41667][i] }));

  const barColors = ["hsl(185, 80%, 40%)", "hsl(185, 70%, 45%)", "hsl(185, 60%, 50%)", "hsl(185, 90%, 35%)"];
  const accentColor = "hsl(35, 90%, 55%)";

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
        <p className="font-heading text-foreground font-medium">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-muted-foreground">
            {p.name}: <span className="font-semibold text-foreground">{p.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  };

  const charts = [
    { title: lang === "fr" ? "Vues réseaux sociaux (K)" : "Social Media Views (K)", data: socialMediaData, type: "single" as const, barName: lang === "fr" ? "Vues (K)" : "Views (K)" },
    { title: lang === "fr" ? "Nombre des Visiteurs" : "Number of Visitors", data: visitorsData, type: "single" as const, barName: lang === "fr" ? "Visiteurs" : "Visitors" },
    { title: lang === "fr" ? "Équipes et Participants" : "Teams & Participants", data: teamsData, type: "grouped" as const },
    { title: lang === "fr" ? "Consommation par Événement (DT)" : "Cost per Event (DT)", data: budgetData, type: "single" as const, barName: "Budget (DT)" },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
            {lang === "fr" ? "Statistiques du Club" : "Club Statistics"}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {charts.map((chart, idx) => (
            <motion.div key={idx} variants={staggerItem} className="card-gradient rounded-xl p-6 border border-border">
              <p className="font-heading text-base md:text-lg font-semibold text-foreground text-center mb-4">
                {chart.title}
              </p>
              <ResponsiveContainer width="100%" height={260}>
                {chart.type === "grouped" ? (
                  <BarChart data={chart.data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12 }} formatter={(v) => <span className="text-muted-foreground">{v}</span>} />
                    <Bar dataKey="teams" name={lang === "fr" ? "Équipes" : "Teams"} fill="hsl(185, 80%, 40%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="participants" name={lang === "fr" ? "Personnes" : "Persons"} fill={accentColor} radius={[4, 4, 0, 0]} />
                  </BarChart>
                ) : (
                  <BarChart data={chart.data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" name={chart.barName} radius={[4, 4, 0, 0]}>
                      {(chart.data as any[]).map((_, i) => <Cell key={i} fill={barColors[i]} />)}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
