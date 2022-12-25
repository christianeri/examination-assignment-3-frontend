
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import './App.css';
// import { Todo } from './models/todoModel';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactView from './views/ContactView';

import SearchView from './views/SearchView';
// import CompareView from './views/CompareView';
// import WishListView from './ref/WishListView';
import ShoppingCartView from './views/ShoppingCartView';

import OnSaleView from './views/OnSaleView';

import NotFoundView from './views/NotFoundView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import UserProvider from './not-in-use/UserContext';
import AdminView from './not-in-use/AdminView';


function App() {
  return (
    <BrowserRouter>

      <UserProvider>
        <ShoppingCartProvider>
          <ProductProvider>
            <Routes>

              <Route path="/" element={<HomeView/>} />
              <Route path="/categories" element={<CategoriesView/>} />
              <Route path="/products" element={<ProductsView/>} />

              <Route path="/product/:params" element={<ProductDetailsView/>} />
              
              <Route path="/contact" element={<ContactView/>} />
              <Route path="/search" element={<SearchView/>} />
              {/* <Route path="/compare" element={<CompareView/>} /> */}
              {/* <Route path="/wishlist" element={<WishListView/>} /> */}
              <Route path="/shoppingcard" element={<ShoppingCartView/>} />

              <Route path="/sale" element={<OnSaleView/>} />

              <Route path="/admin" element={<AdminView/>} />
              <Route path="*" element={<NotFoundView/>} />

            </Routes>
          </ProductProvider>
        </ShoppingCartProvider>
      </UserProvider>
      
    </BrowserRouter>
  );
}

export default App;