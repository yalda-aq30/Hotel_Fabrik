import { APERITIFS, AVEC } from '../menuData';
import { Martini, Coffee } from 'lucide-react';
import { useLang } from '../i18n';

export default function DrinksSection() {
  const { t } = useLang();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-lightgray/70 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-steel-500 text-white">
            <Martini className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-steel-800">{t.drinks.aperitifs}</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium">
              {t.drinks.aperitifsSub}
            </p>
          </div>
        </div>
        <ul className="divide-y divide-lightgray/60">
          {APERITIFS.map((d) => (
            <li key={d.name} className="flex items-center justify-between py-2.5">
              <span className="text-sm text-slate-600">{d.name}</span>
              <span className="font-serif text-lg font-semibold text-steel-700">{d.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-lightgray/70 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-steel-500 text-white">
            <Coffee className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-steel-800">{t.drinks.avec}</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium">
              {t.drinks.avecSub}
            </p>
          </div>
        </div>
        <ul className="divide-y divide-lightgray/60">
          {AVEC.map((d) => (
            <li key={d.name} className="flex items-center justify-between py-2.5">
              <span className="text-sm text-slate-600">{d.name}</span>
              <span className="font-serif text-lg font-semibold text-steel-700">{d.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
