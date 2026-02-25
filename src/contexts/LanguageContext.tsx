import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.about": { fr: "À propos", en: "About" },
  "nav.events": { fr: "Événements", en: "Events" },
  "nav.challenges": { fr: "Challenges", en: "Challenges" },
  "nav.sponsors": { fr: "Sponsors", en: "Sponsors" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  // Hero
  "hero.date": { fr: "5 Avril 2026", en: "April 5, 2026" },
  "hero.subtitle": { fr: "Compétition Nationale de Robotique", en: "National Robotics Competition" },
  "hero.theme": { fr: "Thème : Voyage dans le Temps", en: "Theme: Time Travelling" },
  "hero.location": { fr: "ISET Radès, Tunisie", en: "ISET Rades, Tunisia" },
  "hero.cta": { fr: "Devenir Sponsor", en: "Become a Sponsor" },
  "hero.discover": { fr: "Découvrir", en: "Discover" },

  // About
  "about.title": { fr: "Qui sommes-nous ?", en: "Who are we?" },
  "about.intro": {
    fr: "Le Club Robotek IR, créé en 2018 au sein de l'Institut Supérieur des Études Technologiques de Radès, réunit 150 étudiants actifs, passionnés par la robotique, l'électronique, la programmation et l'innovation technologique.",
    en: "Club Robotek IR, founded in 2018 at the Higher Institute of Technological Studies of Rades, brings together 150 active students passionate about robotics, electronics, programming, and technological innovation.",
  },
  "about.mission": {
    fr: "Notre objectif est de développer les compétences techniques et créatives de nos membres à travers la réalisation de projets concrets et la participation à des compétitions nationales et internationales.",
    en: "Our goal is to develop the technical and creative skills of our members through concrete projects and participation in national and international competitions.",
  },
  "about.members": { fr: "Membres actifs", en: "Active members" },
  "about.editions": { fr: "Éditions", en: "Editions" },
  "about.participants": { fr: "Participants", en: "Participants" },
  "about.sponsors_count": { fr: "Sponsors", en: "Sponsors" },

  // Editions
  "editions.title": { fr: "Nos Éditions", en: "Our Editions" },
  "editions.1.title": { fr: "Édition 1.0 — Squid Game", en: "Edition 1.0 — Squid Game" },
  "editions.1.date": { fr: "30 Avril 2023", en: "April 30, 2023" },
  "editions.1.desc": {
    fr: "46 participants, 200+ spectateurs. Catégories : Suiveur de ligne, Tout-terrain, Fighter, Junior.",
    en: "46 participants, 200+ spectators. Categories: Line Follower, All-terrain, Fighter, Junior.",
  },
  "editions.2.title": { fr: "Édition 2.0 — PlayStation", en: "Edition 2.0 — PlayStation" },
  "editions.2.date": { fr: "3 Mars 2024", en: "March 3, 2024" },
  "editions.2.desc": {
    fr: "63 participants, 300+ spectateurs. L'esprit gaming et la précision robotique.",
    en: "63 participants, 300+ spectators. Gaming spirit meets robotic precision.",
  },
  "editions.3.title": { fr: "Édition 3.0 — Avatar", en: "Edition 3.0 — Avatar" },
  "editions.3.date": { fr: "2025", en: "2025" },
  "editions.3.desc": {
    fr: "Harmonie entre technologie et nature. Robots intelligents et créatifs.",
    en: "Harmony between technology and nature. Smart and creative robots.",
  },

  // Challenges
  "challenges.title": { fr: "Les Challenges 4.0", en: "Challenges 4.0" },
  "challenges.junior.title": { fr: "Junior", en: "Junior" },
  "challenges.junior.desc": {
    fr: "Initiation à la robotique pour les plus jeunes avec un petit robot simple.",
    en: "Introduction to robotics for young participants with a simple robot.",
  },
  "challenges.line.title": { fr: "Suiveur de Ligne", en: "Line Follower" },
  "challenges.line.desc": {
    fr: "Robot autonome suivant une ligne noire et évitant les obstacles.",
    en: "Autonomous robot following a black line and avoiding obstacles.",
  },
  "challenges.terrain.title": { fr: "Tout-Terrain", en: "All-Terrain" },
  "challenges.terrain.desc": {
    fr: "Robots téléguidés dans une course avec ponts, sable, virages et gravier.",
    en: "Remote-controlled robots racing through bridges, sand, turns, and gravel.",
  },
  "challenges.sumo.title": { fr: "Sumo", en: "Sumo" },
  "challenges.sumo.desc": {
    fr: "Affrontement entre deux robots — poussez l'adversaire hors du ring !",
    en: "Two robots face off — push your opponent out of the ring!",
  },
  "challenges.fighter.title": { fr: "Fighter", en: "Fighter" },
  "challenges.fighter.desc": {
    fr: "Combats de robots avec différentes armes. Sortez avec le minimum de dégâts !",
    en: "Robot combat with various weapons. Survive with minimal damage!",
  },

  // Sponsor Packs
  "packs.title": { fr: "Les Packs Sponsors", en: "Sponsor Packs" },
  "packs.bronze": { fr: "Bronze", en: "Bronze" },
  "packs.silver": { fr: "Silver", en: "Silver" },
  "packs.gold": { fr: "Gold", en: "Gold" },
  "packs.diamond": { fr: "Diamond", en: "Diamond" },
  "packs.bronze.price": { fr: "500 - 1000 DT", en: "500 - 1000 DT" },
  "packs.silver.price": { fr: "1000 - 1750 DT", en: "1000 - 1750 DT" },
  "packs.gold.price": { fr: "1750 - 2250 DT", en: "1750 - 2250 DT" },
  "packs.diamond.price": { fr: "2250 - 3000 DT", en: "2250 - 3000 DT" },

  "packs.feat.logo_posters": { fr: "Logo sur affiches & banderoles", en: "Logo on posters & banners" },
  "packs.feat.logo_social": { fr: "Logo sur les réseaux sociaux", en: "Logo on social media" },
  "packs.feat.logo_wall": { fr: "Logo sur le mur des sponsors", en: "Logo on sponsors wall" },
  "packs.feat.video": { fr: "Vidéo publicitaire sur Facebook", en: "Ad video on Facebook" },
  "packs.feat.logo_maquette": { fr: "Logo sur la maquette de jeu", en: "Logo on game model" },
  "packs.feat.stand": { fr: "Stand sponsor pendant l'événement", en: "Sponsor stand at the event" },
  "packs.feat.radio": { fr: "Mention dans les passages radio/TV", en: "Radio/TV mentions" },
  "packs.feat.ceremony": { fr: "Séquence publicitaire à la cérémonie", en: "Ad sequence at ceremony" },
  "packs.feat.formation": { fr: "Formation en collaboration", en: "Collaborative training session" },
  "packs.feat.badge": { fr: "Logo et mention sur les badges", en: "Logo and mention on badges" },
  "packs.feat.thanks": { fr: "Remerciement et mot du représentant", en: "Thanks & representative speech" },

  // Why Sponsor
  "why.title": { fr: "Pourquoi nous sponsoriser ?", en: "Why Sponsor Us?" },
  "why.visibility": { fr: "Visibilité médiatique forte", en: "Strong media visibility" },
  "why.visibility.desc": {
    fr: "Facebook, Instagram, LinkedIn, YouTube, TikTok, affiches, banderoles, radio, presse, télévision locale.",
    en: "Facebook, Instagram, LinkedIn, YouTube, TikTok, posters, banners, radio, press, local TV.",
  },
  "why.youth": { fr: "Lien avec la jeunesse", en: "Youth connection" },
  "why.youth.desc": {
    fr: "Soutenir la formation de la nouvelle génération d'ingénieurs. Identifiez de futurs collaborateurs.",
    en: "Support the training of the next generation of engineers. Identify future collaborators.",
  },
  "why.growth": { fr: "Opportunité de croissance", en: "Growth opportunity" },
  "why.growth.desc": {
    fr: "Renforcez votre notoriété, présentez vos produits, valorisez votre image d'entreprise engagée.",
    en: "Strengthen your brand, showcase your products, enhance your image as an engaged company.",
  },

  // Contact
  "contact.title": { fr: "Contactez-nous", en: "Contact Us" },
  "contact.email": { fr: "Email", en: "Email" },
  "contact.president": { fr: "Président", en: "President" },
  "contact.sponsoring": { fr: "Responsable Sponsoring", en: "Sponsoring Manager" },
  "contact.address": {
    fr: "Institut Supérieur des Études Technologiques de Radès, Ben Arous, Tunisie",
    en: "Higher Institute of Technological Studies of Rades, Ben Arous, Tunisia",
  },
  "contact.thanks": {
    fr: "Votre contribution est essentielle pour concrétiser cette initiative !",
    en: "Your contribution is essential to make this initiative a reality!",
  },

  // Schedule
  "schedule.title": { fr: "Planning", en: "Schedule" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
