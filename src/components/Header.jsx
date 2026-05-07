import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Activity } from 'lucide-react';
import pkg from '../../package.json';
import { CATEGORIES } from '../data/categories';
import { stages } from '../data/standards';

/**
 * SearchBox — search input + category-legend dropdown.
 * Clicking a category row sets searchQuery to that category label,
 * which drives the existing filter in StandardCard.
 */
const SearchBox = ({ searchQuery, setSearchQuery, inputClassName, placeholder }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when the user clicks outside the widget
  const handleClickOutside = useCallback((e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleCategoryClick = (label) => {
    setSearchQuery(label);
    setOpen(false);
  };

  const handleClear = () => {
    setSearchQuery('');
    setOpen(false);
  };

  const matchCount = React.useMemo(() => {
    if (!searchQuery) return 0;
    const lowerQuery = searchQuery.toLowerCase();
    let count = 0;
    stages.forEach((stage) => {
      stage.standards.forEach((standard) => {
        if (
          standard.name.toLowerCase().includes(lowerQuery) ||
          standard.summary.toLowerCase().includes(lowerQuery) ||
          (standard.category && standard.category.toLowerCase().includes(lowerQuery))
        ) {
          count++;
        }
      });
    });
    return count;
  }, [searchQuery]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
        <Search className="h-4 w-4 text-muw-blue/50" />
      </div>

      <input
        type="text"
        className={inputClassName}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label="Search standards or filter by category"
        aria-haspopup="listbox"
        aria-expanded={open}
      />

      {/* Clear button — visible only when query is non-empty */}
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-3 flex items-center text-muw-blue/40 hover:text-muw-blue transition-colors text-xs font-medium"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      {/* Category Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-[200] animate-fade-in"
        >
          <div className="px-3 pt-2.5 pb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {searchQuery ? 'Filter by text' : 'Filter by category'}
            </p>
          </div>
          {searchQuery ? (
            <div className="px-3 pb-3 pt-1 text-sm text-slate-700 font-medium">
              {matchCount} matches
            </div>
          ) : (
            <ul className="pb-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    role="option"
                    onClick={() => handleCategoryClick(cat.label)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-50 transition-colors group"
                  >
                    {/* Color swatch */}
                    <span
                      className="flex-shrink-0 w-3 h-3 rounded-full border border-black/10 shadow-sm"
                      style={{ backgroundColor: cat.color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium">
                      {cat.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const Header = ({ searchQuery, setSearchQuery }) => {
  const baseInputClass =
    'block w-full pl-10 pr-8 py-2 border border-transparent rounded-full leading-5 bg-white text-muw-blue placeholder-muw-blue/50 focus:outline-none focus:ring-2 focus:ring-muw-accent focus:border-muw-accent sm:text-sm transition-all shadow-inner';

  return (
    <header className="bg-muw-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            <Activity className="w-6 h-6 text-muw-light" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              HIS Standards <span className="font-light opacity-80">2026</span>
            </h1>
            <p className="text-xs md:text-sm text-muw-light/70 font-medium tracking-wide">
              Clinical Information Flow Journey
            </p>
          </div>
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-72">
            <SearchBox
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              inputClassName={baseInputClass}
              placeholder="Color info & Search"
            />
          </div>
          <span className="text-[10px] font-normal text-muw-light/40 tracking-widest">
            v{pkg.version}
          </span>
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden px-4 pb-4 flex items-center gap-3">
        <div className="relative flex-1">
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            inputClassName={baseInputClass}
            placeholder="Color info & Search"
          />
        </div>
        <span className="text-[9px] font-normal text-muw-light/40 tracking-widest">
          v{pkg.version}
        </span>
      </div>
    </header>
  );
};

export default Header;
