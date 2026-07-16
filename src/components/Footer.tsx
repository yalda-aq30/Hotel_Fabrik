import { UtensilsCrossed } from 'lucide-react';
import { useLang } from '../i18n';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-16 bg-steel-800 text-white">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center">
        {/* Restaurant info */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-steel-700 text-skyblue">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">{t.footer.restaurant}</h3>
            <p className="text-sm text-steel-200 font-light mt-0.5">{t.footer.tagline}</p>
          </div>
        </div>

        {/* Notices — single language, centered */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm text-steel-100 leading-relaxed">{t.footer.originText}</p>
          <p className="text-sm text-steel-200 leading-relaxed">{t.footer.legalText}</p>
          <p className="text-sm text-steel-200 italic leading-relaxed">{t.footer.pairingsText}</p>
        </div>

        <div className="mt-10 border-t border-steel-700 pt-6">
          <p className="font-serif text-2xl font-semibold tracking-wide">VILLA</p>
          <p className="mt-1 text-xs text-steel-300 tracking-[0.2em] uppercase">{t.footer.digitalMenu}</p>
        </div>
      </div>
    </footer>
  );
}
