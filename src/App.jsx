import React, { useState } from 'react';
import Header from './components/Header';
import DataJourney from './components/DataJourney';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-muw-light">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-1 overflow-x-auto overflow-y-auto relative no-scrollbar pb-10">
        <DataJourney searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;
