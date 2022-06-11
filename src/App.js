import Register from './Register';
import LoginScreen from './components/login/Loginscreen';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu'
import Map from './components/Map'
import CollectionButtons from './components/CollectionButtons'
import './App.css'

function App() {

  return (
    <main className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Map/>, <CollectionButtons/>]} />
          <Route path="/login" element={[<LoginScreen/>]} />
          <Route path="/register" element={[<Register/>]} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;