import { Wine, Beer, Plus, Sparkles, Leaf } from 'lucide-react';
import type { Dish } from '../menuData';
import { DIET_INFO } from '../menuData';
import { useLang } from '../i18n';

interface Props {
  dish: Dish;
  index: number;
}

function buildDietaryText(dish: Dish, lang: 'fi' | 'en'): string | null {
  const all = [
    ...dish.diets.map((d) => ({ key: d, optional: false })),
    ...(dish.optionalDiets ?? []).map((d) => ({ key: d, optional: true })),
  ];
  if (all.length === 0) return null;

  return all
    .map((d) => {
      if (lang === 'en') {
        return d.optional
          ? `Available as ${DIET_INFO[d.key].en.toLowerCase()}`
          : DIET_INFO[d.key].en;
      }
      return d.optional
        ? `Saatavana ${DIET_INFO[d.key].fi.toLowerCase()}`
        : DIET_INFO[d.key].fi;
    })
    .join(', ');
}

export default function DishCard({ dish, index }: Props) {
  const { lang, t } = useLang();
  const dietary = buildDietaryText(dish, lang);
  const dishName = dish.name[lang];
  const dishDesc = lang === 'fi' ? dish.descFi : dish.descEn;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-lightgray/70 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 animate-float-in"
      style={{ animationDelay: `${Math.min(index * 60, 480)}ms` }}
    >
      {dish.image && (
        <div className="relative w-full aspect-video sm:h-44 lg:h-40 flex-shrink-0 overflow-hidden">
          <img
            src={dish.image}
            alt={dishName}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {dish.limited && (
            <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-steel-600/90 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-white">
              <Sparkles className="h-3 w-3" /> {t.dish.limited}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 min-w-0 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-steel-800 leading-tight text-balance">
              {dishName}
            </h3>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-steel-700 whitespace-nowrap">
              {dish.price} €
            </span>
            {dish.k18 && (
              <span className="block text-[10px] font-bold text-steel-600 mt-0.5">K18</span>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{dishDesc}</p>

        {dish.addOn && (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-steel-600 font-medium">
            <Plus className="h-3.5 w-3.5" /> {t.dish.addOnFries}
          </p>
        )}

        {(dish.wine || dish.drink) && (
          <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-lightcyan to-skyblue/20 border border-lightgray/60 px-3 py-2">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-steel-500 text-white">
              {dish.wine ? <Wine className="h-4 w-4" /> : <Beer className="h-4 w-4" />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                {dish.wine ? t.dish.winePairing : t.dish.drinkPairing}
              </p>
              <p className="text-sm text-steel-700 font-medium truncate">
                {dish.wine ? dish.wine.name : dish.drink!.name}
              </p>
            </div>
            <span className="flex-shrink-0 text-sm font-semibold text-steel-600 whitespace-nowrap">
              {dish.wine ? dish.wine.price : dish.drink!.price}
            </span>
          </div>
        )}

        {dietary && (
          <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-slate-50 border border-lightgray/50 px-3 py-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-steel-100 text-steel-600">
              <Leaf className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                {t.dish.dietaryInfo}
              </p>
              <p className="text-sm text-steel-700 font-medium leading-snug">{dietary}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
