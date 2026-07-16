import { useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../menuData';
import SearchBar from './SearchBar';
import { useLang } from '../i18n';

interface Props {
  activeId: string;
  onNavClick: (id: string) => void;
  searchValue: string;
  onSearchChange: (v: string) => void;
  searchResultCount: number;
}

export default function StickyNav({
  activeId,
  onNavClick,
  searchValue,
  onSearchChange,
  searchResultCount,
}: Props) {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current?.querySelector(`[data-id="${activeId}"]`) as HTMLElement | null;
    if (el && scrollRef.current) {
      const container = scrollRef.current;
      const elLeft = el.offsetLeft - container.offsetLeft;
      container.scrollTo({ left: elLeft - container.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
    }
  }, [activeId]);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sticky' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        resultCount={searchResultCount}
        searching={searchValue.trim().length > 0}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="no-scrollbar flex items-center gap-1 overflow-x-auto py-2.5 whitespace-nowrap scrollbar-hide"
        >
          {CATEGORIES.map((cat) => {
            const active = activeId === cat.id;
            return (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => onNavClick(cat.id)}
                className={`relative flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-steel-500 text-white shadow-soft'
                    : 'text-slate-600 hover:bg-steel-50 hover:text-steel-700'
                }`}
              >
                <span className="whitespace-nowrap">{t.categories[cat.id]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
