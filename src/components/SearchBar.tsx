import { Search, X } from 'lucide-react';
import { useLang } from '../i18n';

interface Props {
  value: string;
  onChange: (v: string) => void;
  resultCount: number;
  searching: boolean;
}

export default function SearchBar({ value, onChange, resultCount, searching }: Props) {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 pt-3 pb-2">
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-400">
          <Search className="h-5 w-5" />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t.nav.searchPlaceholder}
          className="w-full rounded-full border border-lightgray bg-white py-3 pl-12 pr-12 text-base sm:text-sm text-slate-700 placeholder:text-slate-400 shadow-soft transition focus:border-steel-400 focus:outline-none focus:ring-2 focus:ring-steel-200"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label={t.nav.clearSearch}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {searching && (
        <p className="mt-2 px-2 text-xs text-slate-500">
          {resultCount > 0
            ? t.nav.resultsFound(resultCount)
            : t.nav.noResults}
        </p>
      )}
    </div>
  );
}
