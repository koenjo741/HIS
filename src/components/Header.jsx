import React from 'react';
import { Search, Activity } from 'lucide-react';
import pkg from '../../package.json';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-muw-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            <Activity className="w-6 h-6 text-muw-light" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight flex items-baseline gap-3">
              The HIS Standard Map <span className="font-light opacity-80">2026</span>
              <span className="text-[10px] font-normal text-muw-light/40 tracking-widest hidden sm:inline-block">v{pkg.version}</span>
            </h1>
            <p className="text-xs md:text-sm text-muw-light/70 font-medium tracking-wide flex items-center gap-2">
              Clinical Information Flow Journey
              <span className="text-[9px] font-normal text-muw-light/40 tracking-widest sm:hidden">v{pkg.version}</span>
            </p>
          </div>
        </div>
        
        <div className="relative hidden md:block w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muw-blue/50" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-white text-muw-blue placeholder-muw-blue/50 focus:outline-none focus:ring-2 focus:ring-muw-accent focus:border-muw-accent sm:text-sm transition-all shadow-inner"
            placeholder="Search standards or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Mobile search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muw-blue/50" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-white text-muw-blue placeholder-muw-blue/50 focus:outline-none focus:ring-2 focus:ring-muw-accent focus:border-muw-accent sm:text-sm shadow-inner"
            placeholder="Search standards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
