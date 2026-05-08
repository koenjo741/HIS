import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import DataJourney from './components/DataJourney';
import StageTitleCard from './components/StageTitleCard';
import { stages } from './data/standards';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const handleScroll = () => {
      // Hide the hint when the user is within 40px of the bottom
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 40;
      setShowScrollHint(!atBottom);
    };

    // Run once on mount to handle pages that don't need scrolling
    handleScroll();

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-muw-light">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Desktop-only fixed title cards row (never scrolls) */}
      <div className="hidden xl:block flex-shrink-0 px-10 pt-8 pb-3" style={{ backgroundColor: '#cfedff' }}>
        <div className="flex flex-row items-start gap-4 max-w-[1800px] mx-auto">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div
                className="flex-1 min-w-[300px] w-[320px] animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <StageTitleCard stage={stage} index={index + 1} />
              </div>

              {/* Invisible spacer matching the arrow column width */}
              {index < stages.length - 1 && (
                <div className="w-12 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll container */}
      <main
        ref={mainRef}
        className="flex-1 overflow-x-auto overflow-y-auto relative no-scrollbar pb-10"
      >
        <DataJourney searchQuery={searchQuery} />
      </main>

      {/* ── Scroll hint: bottom fade + chevron ── */}
      <div
        aria-hidden="true"
        style={{
          opacity: showScrollHint ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.5s ease',
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, #f0f4f8)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '10px',
          zIndex: 50,
        }}
      >
        {/* Bouncing chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#004b79"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: '22px',
            height: '22px',
            opacity: 0.55,
            animation: 'scrollBounce 1.8s ease-in-out infinite',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Keyframe for the chevron bounce */}
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}

export default App;
