import { useLanguage } from "@/contexts/LanguageContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const StatisticsSection = () => {
  const { lang } = useLanguage();

  const editions = [
    lang === "fr" ? "1ère Édition" : "1st Edition",
    lang === "fr" ? "2ème Édition" : "2nd Edition",
    lang === "fr" ? "3ème Édition" : "3rd Edition",
    lang === "fr" ? "4ème Édition (est.)" : "4th Edition (est.)",
  ];

  const socialMediaData = editions.map((name, i) => ({
    name,
    value: [17.856, 150.186, 265.47, 500][i],
  }));

  const visitorsData = editions.map((name, i) => ({
    name,
    value: [600, 800, 1000, 1500][i],
  }));

  const teamsData = editions.map((name, i) => ({
    name,
    teams: [70, 80, 135, 180][i],
    participants: [210, 240, 405, 540][i],
  }));

  const budgetData = editions.map((name, i) => ({
    name,
    value: [7000, 8000, 10000, 41667][i],
  }));

  const barColors = [
    "hsl(185, 80%, 40%)",
    "hsl(185, 70%, 45%)",
    "hsl(185, 60%, 50%)",
    "hsl(185, 90%, 35%)",
  ];
  const accentColor = "hsl(35, 90%, 55%)";

  const chartTitleClass =
    "font-heading text-base md:text-lg font-semibold text-foreground text-center mb-4";

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

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-cyan">
          {lang === "fr" ? "Statistiques du Club" : "Club Statistics"}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media Views */}
          <div className="card-gradient rounded-xl p-6 border border-border">
            <p className={chartTitleClass}>
              {lang === "fr"
                ? "Vues sur les réseaux sociaux (en K)"
                : "Social Media Views (in K)"}
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={socialMediaData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name={lang === "fr" ? "Vues (K)" : "Views (K)"} radius={[4, 4, 0, 0]}>
                  {socialMediaData.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Visitors */}
          <div className="card-gradient rounded-xl p-6 border border-border">
            <p className={chartTitleClass}>
              {lang === "fr" ? "Nombre des Visiteurs" : "Number of Visitors"}
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={visitorsData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name={lang === "fr" ? "Visiteurs" : "Visitors"} radius={[4, 4, 0, 0]}>
                  {visitorsData.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Teams & Participants */}
          <div className="card-gradient rounded-xl p-6 border border-border">
            <p className={chartTitleClass}>
              {lang === "fr"
                ? "Équipes et Personnes Participantes"
                : "Teams & Participants"}
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={teamsData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: 12 }}
                  formatter={(value) => <span className="text-muted-foreground">{value}</span>}
                />
                <Bar
                  dataKey="teams"
                  name={lang === "fr" ? "Équipes" : "Teams"}
                  fill="hsl(185, 80%, 40%)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="participants"
                  name={lang === "fr" ? "Personnes" : "Persons"}
                  fill={accentColor}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Budget */}
          <div className="card-gradient rounded-xl p-6 border border-border">
            <p className={chartTitleClass}>
              {lang === "fr"
                ? "Consommation par Événement (DT)"
                : "Cost per Event (DT)"}
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={budgetData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name={lang === "fr" ? "Budget (DT)" : "Budget (DT)"} radius={[4, 4, 0, 0]}>
                  {budgetData.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
