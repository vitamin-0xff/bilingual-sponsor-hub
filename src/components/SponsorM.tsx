import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import ADTLogo from "@/assets/sponsors/adt.png";
import KrombergLogo from "@/assets/sponsors/kromberg_scubert.png";
import IRDLogo from "@/assets/sponsors/ird_solution.png";
import AtlasautoLogo from "@/assets/sponsors/atolasauto.png";
import OranginaLogo from "@/assets/sponsors/orangina.png";
import SNELogo from "@/assets/sponsors/sme_somitel.png";
import WizardLogo from "@/assets/sponsors/wizard_printing.png";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { Tooltip } from "recharts";

export const SponsorM = () => {
    const { lang } = useLanguage();
    const sponsors = [
        { name: "ADT", logo: ADTLogo },
        { name: "Kromberg & Schubert", logo: KrombergLogo },
        { name: "IRD Solutions", logo: IRDLogo },
        { name: "Atlasauto", logo: AtlasautoLogo },
        { name: "Orangina", logo: OranginaLogo },
        { name: "SNE Sometel", logo: SNELogo },
        { name: "Wizard", logo: WizardLogo },
    ];
    return (
        <section id="challenges" className="py-24 px-4 bg-secondary/50">
            <AnimatedSection>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-amber">
                    {lang === "fr" ? "Nos Sponsors" : "Our Sponsors"}
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
                <p className="text-center text-muted-foreground font-body text-sm mb-12 max-w-2xl mx-auto">
                    {lang === "fr"
                        ? "Nous exprimons notre profonde gratitude à nos sponsors pour leur soutien et leur confiance."
                        : "We express our deep gratitude to our sponsors for their support and trust."}
                </p>
            </AnimatedSection>
            <div className="sponsors-marquee bg-gray-200">
                <Marquee
                    fade={true}
                    direction="left"
                    reverse={false}
                    pauseOnHover={true}
                    className="" // pass class to change gap or speed
                    innerClassName="" // pass class to change gap or speed
                >
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} title={sponsor.name} className="sponsor-item mx-11">
                            <img src={sponsor.logo} alt={sponsor.name} className="size-44 object-contain" />
                        </div>
                    ))}
                </Marquee>

            </div>
        </section>
    );
}