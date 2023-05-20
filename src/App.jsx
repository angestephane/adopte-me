import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdoptedPetContext from './utility/adoptedPetContext';

import DetailErrorBoundary from './components/detail/Pet_detail';

import Home from './pages/Home/Home';

import Header from './components/header/Header';
import Footer from './components/footer/footer';
import PetList from './pages/Show-pet/PetList';

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
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<DetailErrorBoundary />} />
              <Route path="/list-pet" element={<PetList />} />
            </Routes>
            <Footer />
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
