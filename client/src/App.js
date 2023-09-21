import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
//import Home from './components/home/Home';

import DataProvider, { DataContext } from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import { Suspense, lazy, useContext, useState } from 'react';

const Home = lazy(()=> import('./components/home/Home'));


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <div style={{marginTop: 56 }}>
        <Routes>
          <Route path='/' 
            element={(
              <Suspense fallback={<h1>Loading</h1>}>
                <Home/>
              </Suspense>
              )}/>
          <Route path='/product/:id' element={<DetailView/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
