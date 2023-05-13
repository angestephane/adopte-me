import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import FormToFilterPet from './components/form/Form';
import DetailErrorBoundary from './components/detail/Pet_detail';

import AdoptedPetContext from './utility/adoptedPetContext';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <div className="min-h-screen bg-gray-100 min-w-screen">
            <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/details/:id" element={<DetailErrorBoundary />} />
              <Route path="/" element={<FormToFilterPet />} />
            </Routes>
            <About />
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
