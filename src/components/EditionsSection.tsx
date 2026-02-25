import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { AlertDialog, AlertDialogOverlay } from "./ui/alert-dialog";
import { AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import FirstEdition from "@/assets/editions/1.png";
import SecondEdition from "@/assets/editions/2.png";
import ThirdEdition from "@/assets/editions/3.png";

import { AnimatePresence } from 'framer-motion'

const editions = [
  {
    num: "1.0",
    titleKey: "editions.1.title",
    dateKey: "editions.1.date",
    descKey: "editions.1.desc",
    color: "border-destructive",
    imgSrc: FirstEdition,
    mainColor: "#E7331E",
    titleColorPositionStart: 7,
  },
  {
    num: "2.0",
    titleKey: "editions.2.title",
    dateKey: "editions.2.date",
    descKey: "editions.2.desc",
    color: "border-primary",
    imgSrc: SecondEdition,
    mainColor: "#1F305B",
    titleColorPositionStart: 5,
  },
  {
    num: "3.0",
    titleKey: "editions.3.title",
    dateKey: "editions.3.date",
    descKey: "editions.3.desc",
    color: "border-accent",
    imgSrc: ThirdEdition,
    mainColor: "amber",
    titleColorPositionStart: 0,
  },
];

const EditionsSection = () => {
  const { t } = useLanguage();
  const [selectedEdition, setSelectedEdition] = useState<typeof editions[0] | null>(null);

  return (
    <section id="editions" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-amber">
          {t("editions.title")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {editions.map((ed) => (
            <motion.div
              onClick={() => setSelectedEdition(ed)}
              key={ed.num}
              className={`card-gradient cursor-pointer hover:glow-amber rounded-xl p-6 border-l-4 ${ed.color} border border-border hover:shadow-lg transition-shadow`}
            >
              <span className="font-display text-5xl font-black text-muted-foreground/20">{ed.num}</span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-2">{t(ed.titleKey).slice(0, ed.titleColorPositionStart + 13)}<span style={{
                color: ed.mainColor
              }}>{t(ed.titleKey).slice(ed.titleColorPositionStart + 13)}</span></h3>
              <p className="text-xs font-body text-primary mt-1 mb-3">{t(ed.dateKey)}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(ed.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {

          selectedEdition && (
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-secondary rounded-lg p-8 max-w-md mx-auto"
              >
                <img src={selectedEdition.imgSrc} alt={t(selectedEdition.titleKey)} className="w-full object-cover rounded mb-6" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{t(selectedEdition.titleKey).slice(0, selectedEdition.titleColorPositionStart + 13)}<span style={{
                  color: selectedEdition.mainColor
                }}>{t(selectedEdition.titleKey).slice(selectedEdition.titleColorPositionStart + 13)}</span></h3>
                <p className="text-sm text-muted-foreground font-body mb-6">{t(selectedEdition.dateKey)}</p>
                <p className="text-base text-muted-foreground font-body leading-relaxed">{t(selectedEdition.descKey)}</p>
                <button
                  onClick={() => setSelectedEdition(null)}
                  className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                >
                  {t("close")}
                </button>
              </motion.div>
            </motion.div>
          )
        }

      </AnimatePresence>

    </section>
  );
};

export default EditionsSection;
