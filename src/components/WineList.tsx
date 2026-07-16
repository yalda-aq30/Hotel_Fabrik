import { Wine, Grape, GlassWater } from 'lucide-react';
import { WINE_LIST } from '../menuData';
import { useLang } from '../i18n';

export default function WineList() {
  const { lang, t } = useLang();

  return (
    <div className="space-y-10">
      {WINE_LIST.map((group) => {
        const sectionLabel = lang === 'fi' ? group.sectionFi : group.section;
        const sectionSub = lang === 'fi' ? group.section : group.sectionFi;
        return (
          <div key={group.section}>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-steel-500 text-white">
                <Wine className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-steel-800">{sectionLabel}</h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-medium">
                  {sectionSub}
                </p>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {group.wines.map((w) => (
                <div
                  key={w.name}
                  className="group rounded-xl border border-lightgray/70 bg-white p-4 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg font-semibold text-steel-800 leading-snug">
                      {w.name}
                      {w.nonAlcoholic && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[10px] font-bold align-middle">
                          0%
                        </span>
                      )}
                    </h4>
                  </div>
                  {w.grapes && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <Grape className="h-3.5 w-3.5" /> {w.grapes}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-slate-500 italic">{w.descFi}</p>
                  <div className="mt-3 flex items-center gap-4 border-t border-lightgray/60 pt-2.5">
                    {w.glass && (
                      <span className="flex items-center gap-1.5 text-sm text-steel-700 font-medium">
                        <GlassWater className="h-4 w-4 text-steel-500" />
                        <span className="text-xs text-slate-400">{t.wine.glass}</span> {w.glass}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-sm text-steel-700 font-medium">
                      <Wine className="h-4 w-4 text-steel-500" />
                      <span className="text-xs text-slate-400">{t.wine.bottle}</span> {w.bottle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
