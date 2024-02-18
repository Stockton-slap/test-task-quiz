import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          loader: "Finding collections for you...",
          saveCsv: "Save Results as CSV",
          startAgain: "Start Again",
          emailText: "Email",
          emailSubText: "Enter your email to get full access",
          terms: "By continuing I agree with Privacy policy and Terms of use.",
          questions: {
            1: {
              title: "What is your preferred language?",
              subTitle: "Choose language",
              type: "single-select",
              options: ["English", "French", "German", "Spanish"],
            },
            2: {
              title: "What gender do you identify with?",
              subTitle: "Please share how do you identify yourself",
              type: "single-select-image",
              options: [
                { text: "Female", emoji: "👩" },
                { text: "Male", emoji: "👨" },
                { text: "Other", emoji: "😉" },
              ],
            },
            3: {
              title: "What is your age?",
              type: "single-select",
              options: ["18-29 years", "30-39 years", "40-49 years", "50+"],
            },
            4: {
              title: "What do you hate the most in a book?",
              type: "multi-select",
              options: [
                "Lack of logic",
                "A slow speed",
                "Lack of humor",
                "Way too generic ending",
              ],
            },
            5: {
              title: "What are your favorite topics?",
              subTitle: "Choose up to 3 topics you like",
              type: "bubble",
              options: ["Werewolf", "Action"],
            },
          },
        },
      },
      de: {
        translations: {
          loader: "Daten werden geladen...",
          questions: {
            1: {
              title: "Welcher Sprache bevorzugst du?",
              subTitle: "Sprache wählen",
              type: "single-select",
              options: ["Englisch", "Franzésisch", "Deutsch", "Spanisch"],
            },
            2: {
              title: "Welcher Geschlecht identifizierst du?",
              subTitle: "Bitte teilen Sie mit, wie Sie sich identifizieren",
              type: "single-select-image",
              options: [
                { text: "Weiblich", emoji: "👩" },
                { text: "Maennlich", emoji: "👨" },
                { text: "Divers", emoji: "😉" },
              ],
            },
            3: {
              title: "Wie alt bist du?",
              type: "single-select",
              options: ["18-29 years", "30-39 years", "40-49 years", "50+"],
            },
            4: {
              title: "Was magst du am wenigsten an einem Buch?",
              type: "multi-select",
              options: [
                "Mangel an Logik",
                "Eine langsame Geschwindigkeit",
                "Mangel an Humor",
                "Vielleicht zu generisches Ende",
              ],
            },
            5: {
              title: "Was sind deine Lieblingsthemen?",
              subTitle: "Wähle bis zu 3 Themen, die dir gefallen",
              type: "bubble",
              options: ["Werewolf", "Action"],
            },
          },
        },
      },
      fr: {
        translations: {
          loader: "Recherche des collections pour vous...",
          questions: {
            1: {
              title: "Quel est votre langue?",
              subTitle: "Choisissez la langue",
              type: "single-select",
              options: ["Anglais", "Français", "Allemand", "Espagnol"],
            },
            2: {
              title: "Quel est votre genre?",
              subTitle: "Veuillez partager comment vous vous identifiez",
              type: "single-select-image",
              options: [
                { text: "Femme", emoji: "👩" },
                { text: "Homme", emoji: "👨" },
                { text: "Autre", emoji: "😉" },
              ],
            },
            3: {
              title: "Quel est votre age?",
              type: "single-select",
              options: ["18-29 years", "30-39 years", "40-49 years", "50+"],
            },
            4: {
              title: "Qu'est-ce que vous détestez le plus dans un livre?",
              type: "multi-select",
              options: [
                "Manque de logique",
                "Une vitesse lente",
                "Manque d'humour",
                "Une fin beaucoup trop générique",
              ],
            },
            5: {
              title: "Quels sont vos sujets préférés?",
              subTitle: "Choisissez jusqu'à 3 sujets que vous aimez",
              type: "bubble",
              options: ["Werewolf", "Action"],
            },
          },
        },
      },
      es: {
        translations: {
          loader: "Buscando colecciones para ti...",
          questions: {
            1: {
              title: "Cual es tu idioma preferido?",
              subTitle: "Elija el idioma",
              type: "single-select",
              options: ["Ingles", "Frances", "Aleman", "Espanol"],
            },
            2: {
              title: "Cual es tu genero?",
              subTitle: "Por favor, comparte cómo te identificas",
              type: "single-select-image",
              options: [
                { text: "Mujer", emoji: "👩" },
                { text: "Hombre", emoji: "👨" },
                { text: "Otro", emoji: "😉" },
              ],
            },
            3: {
              title: "Cual es tu edad?",
              type: "single-select",
              options: ["18-29 years", "30-39 years", "40-49 years", "50+"],
            },
            4: {
              title: "¿Qué odias más en un libro?",
              type: "multi-select",
              options: [
                "Falta de lógica",
                "Una velocidad lenta",
                "Falta de humor",
                "Final demasiado genérico",
              ],
            },
            5: {
              title: "¿Cuáles son tus temas favoritos?",
              subTitle: "Elige hasta 3 temas que te gusten",
              type: "bubble",
              options: ["Werewolf", "Action"],
            },
          },
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
