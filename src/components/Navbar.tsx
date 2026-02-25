import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Globe } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggle } = useTheme();

  const links = [
    { key: "nav.about", href: "#about" },
    { key: "nav.events", href: "#editions" },
    { key: "nav.challenges", href: "#challenges" },
    { key: "nav.sponsors", href: "#packs" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-lg font-bold tracking-wider text-primary">
          ROBOTEK IR 4.0
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold uppercase bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={toggle}
            className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
