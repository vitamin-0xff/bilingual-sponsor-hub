import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X } from "lucide-react";

const features = [
  "packs.feat.logo_posters",
  "packs.feat.logo_social",
  "packs.feat.logo_wall",
  "packs.feat.video",
  "packs.feat.logo_maquette",
  "packs.feat.stand",
  "packs.feat.radio",
  "packs.feat.ceremony",
  "packs.feat.formation",
  "packs.feat.badge",
  "packs.feat.thanks",
];

// How many features each pack includes (cumulative from top)
const packAccess: Record<string, number> = {
  bronze: 3,
  silver: 6,
  gold: 9,
  diamond: 11,
};

const packs = [
  { key: "bronze", styles: "border-amber-glow/40", badge: "bg-amber-glow/20 text-amber-glow", highlight: false },
  { key: "silver", styles: "border-muted-foreground/40", badge: "bg-muted/60 text-muted-foreground", highlight: false },
  { key: "gold", styles: "border-accent glow-amber", badge: "bg-accent/20 text-accent", highlight: true },
  { key: "diamond", styles: "border-primary glow-cyan", badge: "bg-primary/20 text-primary", highlight: true },
];

const SponsorPacksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="packs" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-amber">
          {t("packs.title")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack) => {
            const count = packAccess[pack.key];
            return (
              <div
                key={pack.key}
                className={`card-gradient rounded-xl border-2 ${pack.styles} p-6 flex flex-col ${pack.highlight ? "scale-[1.02]" : ""} cursor-pointer hover:scale-105  transition-transform group`}
              >
                <div className={`inline-block self-start px-3 py-1 rounded-full text-xs font-display font-bold uppercase mb-4 ${pack.badge}`}>
                  {t(`packs.${pack.key}`)}
                </div>
                <p className="font-display text-xl font-bold text-foreground mb-6">
                  {t(`packs.${pack.key}.price`)}
                </p>

                <ul className="space-y-2 flex-1">
                  {features.map((feat, i) => {
                    const included = i < count;
                    return (
                      <li key={feat} className="flex items-start gap-2 text-xs font-body">
                        {included ? (
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                        )}
                        <span className={included ? "text-foreground" : "text-muted-foreground/40"}>
                          {t(feat)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorPacksSection;
