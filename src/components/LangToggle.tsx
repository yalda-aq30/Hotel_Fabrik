import { useLang } from '../i18n';

export default function LangToggle() {
  const { lang, toggle, t } = useLang();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/25"
      aria-label={lang === 'fi' ? t.langToggle.toEn : t.langToggle.toFi}
    >
      <span className={lang === 'fi' ? 'text-white' : 'text-white/50'}>FI</span>
      <span className="text-white/40">/</span>
      <span className={lang === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
    </button>
  );
}
