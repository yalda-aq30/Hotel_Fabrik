import { createContext, useContext } from 'react';

export type Language = 'fi' | 'en';

export interface Translations {
  hero: {
    subtitle: string;
    description: string;
    explore: string;
  };
  nav: {
    searchPlaceholder: string;
    clearSearch: string;
    resultsFound: (n: number) => string;
    noResults: string;
    noResultsDesc: (q: string) => string;
    clearButton: string;
  };
  dish: {
    winePairing: string;
    drinkPairing: string;
    dietaryInfo: string;
    limited: string;
    addOnFries: string;
  };
  categories: Record<string, string>;
  drinks: {
    aperitifs: string;
    aperitifsSub: string;
    avec: string;
    avecSub: string;
    wineList: string;
    wineListSub: string;
  };
  wine: {
    glass: string;
    bottle: string;
  };
  footer: {
    restaurant: string;
    tagline: string;
    originText: string;
    legalText: string;
    pairingsText: string;
    digitalMenu: string;
  };
  langToggle: {
    toEn: string;
    toFi: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fi: {
    hero: {
      subtitle: 'Ravintola',
      description:
        'Moderni ruokaelämys. Selaa menua, tutustu viinisuosituksiin ja löydä suomalaisista raaka-aineista valmistettuja ruokia.',
      explore: 'Selaa menua',
    },
    nav: {
      searchPlaceholder: 'Etsi ruokia, aineksia tai ruokavaliota…',
      clearSearch: 'Tyhjennä haku',
      resultsFound: (n) => `${n} ruokaa löytyi`,
      noResults: 'Ruokia ei löytynyt',
      noResultsDesc: (q) => `Ei tuloksia haulle "${q}".`,
      clearButton: 'Tyhjennä haku',
    },
    dish: {
      winePairing: 'Suositeltu viinipari',
      drinkPairing: 'Suositeltu juoma',
      dietaryInfo: 'Ruokavaliotiedot',
      limited: 'Rajallinen',
      addOnFries: 'Lisää ranskalaiset: +5,00 €',
    },
    categories: {
      starters: 'Alkuun',
      simple: 'Jotain yksinkertaista',
      mains: 'Pääruoat',
      desserts: 'Jälkiruoat',
      drinks: 'Juomat & viinit',
    },
    drinks: {
      aperitifs: 'Aperitiivit',
      aperitifsSub: 'Aperitifs',
      avec: 'Ruoan jälkeen',
      avecSub: 'Avec',
      wineList: 'Viinilista',
      wineListSub: 'Wine List',
    },
    wine: {
      glass: 'lasi',
      bottle: 'pullo',
    },
    footer: {
      restaurant: 'Villa Restaurant',
      tagline: 'Premium-ruokailuelämys',
      originText: 'Käyttämämme liha ja kana on alkuperältään suomalaista.',
      legalText: 'Hinnat euroina (€). K18 = ikäraja 18 vuotta alkoholijuomille.',
      pairingsText: 'Annoksille suositellut viinit. Kysy tarjoilijaltasi päivän valikoimaa.',
      digitalMenu: 'Digitaalinen menu',
    },
    langToggle: {
      toEn: 'In English',
      toFi: 'Suomeksi',
    },
  },
  en: {
    hero: {
      subtitle: 'Restaurant',
      description:
        'A modern dining experience. Browse our menu, explore wine pairings, and discover dishes crafted with Finnish ingredients.',
      explore: 'Explore Menu',
    },
    nav: {
      searchPlaceholder: 'Search dishes, ingredients, or dietary preferences…',
      clearSearch: 'Clear search',
      resultsFound: (n) => `${n} dish${n === 1 ? '' : 'es'} found`,
      noResults: 'No dishes found',
      noResultsDesc: (q) => `We couldn't find any dishes matching "${q}".`,
      clearButton: 'Clear search',
    },
    dish: {
      winePairing: 'Recommended Wine Pairing',
      drinkPairing: 'Recommended Drink',
      dietaryInfo: 'Dietary Information',
      limited: 'Limited',
      addOnFries: 'Add fries: +5,00 €',
    },
    categories: {
      starters: 'Starters',
      simple: 'Something Simple',
      mains: 'Main Courses',
      desserts: 'Desserts',
      drinks: 'Drinks & Wines',
    },
    drinks: {
      aperitifs: 'Aperitifs',
      aperitifsSub: 'Aperitiivit',
      avec: 'Avec',
      avecSub: 'Ruoan jälkeen',
      wineList: 'Wine List',
      wineListSub: 'Viinilista',
    },
    wine: {
      glass: 'glass',
      bottle: 'bottle',
    },
    footer: {
      restaurant: 'Villa Restaurant',
      tagline: 'Premium Dining Experience',
      originText: 'The meat and chicken we use is of Finnish origin.',
      legalText: 'Prices in euros (€). K18 = age 18+ for alcoholic beverages.',
      pairingsText: "Wine pairings suggested per dish. Ask your server for today's selection.",
      digitalMenu: 'Digital Menu',
    },
    langToggle: {
      toEn: 'In English',
      toFi: 'Suomeksi',
    },
  },
};

export const LanguageContext = createContext<{
  lang: Language;
  t: Translations;
  toggle: () => void;
  setLang: (l: Language) => void;
}>({
  lang: 'fi',
  t: TRANSLATIONS.fi,
  toggle: () => {},
  setLang: () => {},
});

export function useLang() {
  return useContext(LanguageContext);
}
