import Register from './Register';
import LoginScreen from './components/login/Loginscreen';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Map from './components/Map';
import CollectionButtons from './components/CollectionButtons';
import Popup from './Popup';
import PostalForm from './Postalform';
import CollectionProgress from './CollectionProgress';
import { RequireToken } from "./Auth";
import Profile from './Profile';
import Loginnew from './Loginnew';
import AssignONOPopup from './AssignONOPopup';
import Loginworks from './Loginworks';

function App() {

  return (
    <main className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
        <Route path="/loginnew" element={[<Loginnew/>]} />
        <Route path="/loginworks" element={[<Loginworks/>]} />
        <Route path="/" element={[<Map/>, <CollectionButtons/>]} />
        <Route path="/login" element={[<LoginScreen/>]} />
          <Route path="/register" element={[<Register/>]} />
          <Route path="/ondemand" element={[<Popup/>]} />
          <Route path= "/collectionstatus" element={[<CollectionProgress/>]} />
          <Route  path="/profile"  element={<RequireToken><Profile /></RequireToken>}/>
          <Route path= "/assignono" element={[<AssignONOPopup/>]} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;