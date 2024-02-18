import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ViewProduct from './pages/view-products/view-products';

function App() {
  return (
    <div className="App">
      <ViewProduct />
    </div>
  );
}

export default App;
