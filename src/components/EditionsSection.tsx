import { useLanguage } from "@/contexts/LanguageContext";

const editions = [
  { num: "1.0", titleKey: "editions.1.title", dateKey: "editions.1.date", descKey: "editions.1.desc", color: "border-destructive" },
  { num: "2.0", titleKey: "editions.2.title", dateKey: "editions.2.date", descKey: "editions.2.desc", color: "border-primary" },
  { num: "3.0", titleKey: "editions.3.title", dateKey: "editions.3.date", descKey: "editions.3.desc", color: "border-accent" },
];

const EditionsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="editions" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-amber">
          {t("editions.title")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {editions.map((ed) => (
            <div
              key={ed.num}
              className={`card-gradient rounded-xl p-6 border-l-4 ${ed.color} border border-border hover:shadow-lg transition-shadow`}
            >
              <span className="font-display text-5xl font-black text-muted-foreground/20">{ed.num}</span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-2">{t(ed.titleKey)}</h3>
              <p className="text-xs font-body text-primary mt-1 mb-3">{t(ed.dateKey)}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(ed.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
