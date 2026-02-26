import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";

const partners = [
  { name: "ADT", descFr: "Association de développement technologique — promotion de la recherche scientifique et l'innovation technologique en Tunisie.", descEn: "Technology Development Association — promoting scientific research and technological innovation in Tunisia.", pack: "Partenaire principal : 1500 DT" },
  { name: "Kromberg & Schubert", descFr: "Développement et production de systèmes de câblage complexes pour l'industrie automobile dans plus de 40 sites mondiaux.", descEn: "Development and production of complex wiring systems for the automotive industry across 40+ global sites.", pack: "Pack Silver : 1000 DT" },
  { name: "IRD Solutions", descFr: "Accompagnement 360° des TPE/PME/ETI régionales pour une économie plus responsable et créatrice de valeur.", descEn: "360° support for regional SMEs toward a more responsible and value-creating economy.", pack: "Pack Bronze : 600 DT" },
  { name: "Atlasauto", descFr: "Engagement passionné pour une mobilité en toute sécurité — réaliser les souhaits et rêves de mobilité de chacun.", descEn: "Passionate commitment to safe mobility — fulfilling everyone's mobility wishes and dreams.", pack: "Pack Bronze : 700 DT" },
  { name: "Orangina", descFr: "Marque française de boisson gazeuse à base d'oranges et citrons — soutien en nature avec boissons et uniformes.", descEn: "French sparkling beverage brand — in-kind support with drinks and uniforms.", pack: "Pack en nature" },
  { name: "SNE Sometel", descFr: "Spécialisée dans les composants électroniques, appareils de mesure et équipements pour l'électronique en Tunisie.", descEn: "Specialized in electronic components, measurement devices, and electronics equipment in Tunisia.", pack: "Pack Bronze : 700 DT" },
  { name: "Wizard", descFr: "Convention d'impression — banderoles, flyers, logos, stickers et affiches fournis gratuitement.", descEn: "Printing convention — banners, flyers, logos, stickers, and posters provided free of charge.", pack: "Convention" },
];

const PartnersSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="partners" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-amber">
            {lang === "fr" ? "Nos Partenaires & Sponsors" : "Our Partners & Sponsors"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-center text-muted-foreground font-body text-sm mb-12 max-w-2xl mx-auto">
            {lang === "fr"
              ? "Nous exprimons notre profonde gratitude à nos sponsors pour leur soutien et leur confiance."
              : "We express our deep gratitude to our sponsors for their support and trust."}
          </p>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -3 }}
              className="card-gradient rounded-xl p-6 border border-border hover:glow-amber transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-lg font-bold text-foreground">{p.name}</h3>
                <span className="text-[10px] font-display font-bold uppercase px-2 py-1 rounded-full bg-accent/15 text-accent whitespace-nowrap">
                  {p.pack}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">
                {lang === "fr" ? p.descFr : p.descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
