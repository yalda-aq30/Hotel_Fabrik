import { useMemo, useState } from 'react';
import { CATEGORIES, DIET_INFO, type Dish } from './menuData';
import StickyNav from './components/StickyNav';
import DishCard from './components/DishCard';
import WineList from './components/WineList';
import DrinksSection from './components/DrinksSection';
import Footer from './components/Footer';
import LangToggle from './components/LangToggle';
import { useActiveSection } from './hooks/useActiveSection';
import { LanguageContext, TRANSLATIONS, useLang, type Language } from './i18n';
import { UtensilsCrossed, ChevronDown, SearchX } from 'lucide-react';
import myHeaderImage from './header.jpg';

const HERO_IMAGE =
  myHeaderImage; 

function dishMatchesSearch(dish: Dish, q: string): boolean {
  const query = q.toLowerCase().trim();
  if (!query) return true;

  const haystack = [
    dish.name.fi,
    dish.name.en,
    dish.descFi,
    dish.descEn,
    dish.wine?.name ?? '',
    dish.drink?.name ?? '',
    ...dish.diets.map((d) => `${DIET_INFO[d].en} ${DIET_INFO[d].fi} ${d}`),
    ...(dish.optionalDiets ?? []).map((d) => `${DIET_INFO[d].en} ${DIET_INFO[d].fi} ${d}`),
  ]
    .join(' ')
    .toLowerCase();

  return query.split(/\s+/).every((token) => haystack.includes(token));
}

function AppInner() {
  const { t } = useLang();
  const activeId = useActiveSection();
  const [search, setSearch] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isSearching = search.trim().length > 0;

  const { visibleCategories, totalResults } = useMemo(() => {
    if (!isSearching) {
      return { visibleCategories: CATEGORIES, totalResults: 0 };
    }
    const mapped = CATEGORIES.map((c) => ({
      ...c,
      dishes: c.dishes.filter((d) => dishMatchesSearch(d, search)),
    })).filter((c) => c.dishes.length > 0);
    const total = mapped.reduce((sum, c) => sum + c.dishes.length, 0);
    return { visibleCategories: mapped, totalResults: total };
  }, [search, isSearching]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <header className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Villa Restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/50 via-steel-800/40 to-steel-900/70" />
        {/* Language toggle - absolute positioned top right */}
        <div className="absolute top-4 right-4 z-20">
          <LangToggle />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
          <div className="animate-float-in max-w-xl">
            <div className="mb-3 sm:mb-4 flex items-center justify-center">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
                <UtensilsCrossed className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide drop-shadow-lg">
              VILLA
            </h1>
            <p className="mt-2 text-[11px] sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.35em] text-skyblue font-medium">
              {t.hero.subtitle}
            </p>
            <p className="mt-4 sm:mt-5 max-w-md mx-auto text-sm sm:text-base text-steel-100/90 font-light leading-relaxed">
              {t.hero.description}
            </p>
          </div>
          <button
            onClick={() => scrollTo(CATEGORIES[0].id)}
            className="mt-6 sm:mt-8 flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25 animate-fade-in"
          >
            {t.hero.explore} <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </header>

      <StickyNav
        activeId={activeId}
        onNavClick={scrollTo}
        searchValue={search}
        onSearchChange={setSearch}
        searchResultCount={totalResults}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isSearching && totalResults === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-steel-100 text-steel-400 mb-4">
              <SearchX className="h-8 w-8" />
            </span>
            <p className="font-serif text-2xl font-semibold text-steel-700">{t.nav.noResults}</p>
            <p className="mt-2 text-sm text-slate-500">{t.nav.noResultsDesc(search)}</p>
            <button
              onClick={() => setSearch('')}
              className="mt-5 rounded-full bg-steel-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-steel-600"
            >
              {t.nav.clearButton}
            </button>
          </div>
        ) : (
          visibleCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-44 pt-12 pb-6">
              {/* Category header */}
              <div className="relative mb-5 sm:mb-7 overflow-hidden rounded-2xl">
                <img
                  src={cat.image}
                  alt={t.categories[cat.id]}
                  className="h-24 sm:h-32 md:h-40 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-steel-900/80 via-steel-800/60 to-steel-700/40" />
                <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow">
                    {t.categories[cat.id]}
                  </h2>
                </div>
              </div>

              {/* Dishes */}
              {cat.id === 'drinks' ? (
                <div className="space-y-8">
                  <DrinksSection />
                  <div>
                    <h3 className="font-serif text-3xl font-semibold text-steel-800 mb-1">
                      {t.drinks.wineList}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium mb-6">
                      {t.drinks.wineListSub}
                    </p>
                    <WineList />
                  </div>
                </div>
              ) : cat.dishes.length === 0 ? null : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {cat.dishes.map((dish, i) => (
                    <DishCard key={dish.id} dish={dish} index={i} />
                  ))}
                </div>
              )}
            </section>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('fi');

  const value = useMemo(
    () => ({
      lang,
      t: TRANSLATIONS[lang],
      toggle: () => setLang((p) => (p === 'fi' ? 'en' : 'fi')),
      setLang,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      <AppInner />
    </LanguageContext.Provider>
  );
}
