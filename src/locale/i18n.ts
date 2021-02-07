import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import moment from "moment";

import sk from "./sk";

moment.locale("sk");

// the translations
export const resources = {
  sk,
} as const;

i18n
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    resources,
    lng: "sk",
    fallbackLng: "sk",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
