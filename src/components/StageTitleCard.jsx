import React from 'react';

const StageTitleCard = ({ stage, index }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative group h-32">
    <div className="absolute top-0 left-0 w-full h-1 bg-muw-teal group-hover:bg-muw-accent transition-colors duration-300"></div>
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muw-blue/10 text-muw-blue font-bold text-sm">
          {index}
        </span>
        <h2 className="font-bold text-slate-800 leading-tight">
          {stage.title}
        </h2>
      </div>
      <p className="text-xs text-slate-500 font-medium pl-11">
        {stage.description}
      </p>
    </div>
  </div>
);

export default StageTitleCard;
