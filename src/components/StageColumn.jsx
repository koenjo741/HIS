import React from 'react';
import StandardCard from './StandardCard';
import StageTitleCard from './StageTitleCard';

const StageColumn = ({ stage, index, searchQuery }) => {
  return (
    <div className="flex-1 min-w-[300px] xl:w-[320px] flex flex-col animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Title card – mobile/tablet only (desktop uses fixed row in App) */}
      <div className="xl:hidden mb-4">
        <StageTitleCard stage={stage} index={index} />
      </div>

      <div className="flex-1 flex flex-col gap-3 space-y-1">
        {stage.standards.map((standard) => (
          <StandardCard 
            key={standard.id} 
            standard={standard} 
            searchQuery={searchQuery} 
          />
        ))}
      </div>
    </div>
  );
};

export default StageColumn;
