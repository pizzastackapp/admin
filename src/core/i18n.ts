import polyglotI18nProvider from 'ra-i18n-polyglot';
import ua from 'ra-language-ukrainian';

const lang = {
  ra: {
    ...ua.ra,
    configurable: {
      ...ua.ra.configurable,
      customize: 'customize',
    },
  },
};

export const i18nProvider = polyglotI18nProvider(() => lang, 'ua');
