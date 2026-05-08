import React from 'react';
import StageColumn from './StageColumn';
import { stages } from '../data/standards';

const DataJourney = ({ searchQuery }) => {
  return (
    <div className="p-6 md:p-10 xl:pt-4 min-h-full">
      <div className="flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-4 max-w-[1800px] mx-auto pb-10">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            <StageColumn 
              stage={stage} 
              index={index + 1} 
              searchQuery={searchQuery} 
            />
            
            {/* Horizontal Arrow for Desktop */}
            {index < stages.length - 1 && (
              <div className="hidden xl:flex items-center justify-center h-[500px] w-12 flex-shrink-0 animate-fade-in opacity-50">
                <svg className="w-10 h-10 text-muw-blue animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            )}

            {/* Vertical Arrow for Mobile/Tablet */}
            {index < stages.length - 1 && (
              <div className="flex xl:hidden items-center justify-center py-2 animate-fade-in opacity-50">
                <svg className="w-10 h-10 text-muw-blue animate-pulse-slow transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DataJourney;
