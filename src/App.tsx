import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DrawerProvider } from './components/DrawerContext';
import Biography from './components/Biography';
import Works from './components/Works';
import Header from './components/Header';
import NavigationDrawer from './components/NavigationDrawer';

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Header />
        <NavigationDrawer />
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
