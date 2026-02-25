import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gradient-amber">
          {t("contact.title")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:isetrrobotech@gmail.com" className="font-body text-foreground hover:text-primary transition-colors">
              isetrrobotech@gmail.com
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-muted-foreground">
                {t("contact.president")}: <span className="text-foreground">28 322 801</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-muted-foreground">
                {t("contact.sponsoring")}: <span className="text-foreground">27 521 083</span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="font-body text-sm text-muted-foreground">{t("contact.address")}</span>
          </div>

          <p className="font-heading text-lg font-semibold text-primary pt-4">{t("contact.thanks")}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
