import React, { useState } from 'react';
import { Info, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function for tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const StandardCard = ({ standard, searchQuery }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Check if standard matches search query
  const matchesSearch = searchQuery === '' || 
    standard.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    standard.summary.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <a 
      href={standard.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group relative block rounded-lg border p-4 transition-all duration-300 transform",
        "bg-white shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-muw-accent",
        matchesSearch ? "opacity-100" : "opacity-30 scale-95 grayscale"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-muw-blue group-hover:text-muw-accent transition-colors flex items-center gap-1.5">
          {standard.name}
        </h3>
        
        <div className="flex items-center gap-1 relative">
          {/* Info Icon with Custom Tooltip */}
          <div className="relative flex items-center justify-center text-slate-400 hover:text-muw-teal">
            <Info className="w-4 h-4 cursor-help" />
            
            {/* Tooltip */}
            <div className={cn(
              "absolute z-[100] w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl -top-2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none transition-all duration-200",
              isHovered ? "opacity-100 translate-y-[-100%]" : "opacity-0 translate-y-[-90%]"
            )}>
              <p className="font-medium mb-1 border-b border-slate-600 pb-1 text-muw-light">{standard.name}</p>
              <p>{standard.summary}</p>
              
              {/* Tooltip Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800"></div>
            </div>
          </div>
          
          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-muw-accent transition-colors" />
        </div>
      </div>
      
      {/* Short summary that's always visible but truncated to add visual weight */}
      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
        {standard.summary}
      </p>
    </a>
  );
};

export default StandardCard;
