import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SignIn from './pages/sign_in/sign_in.page';
import DefaultPage from './pages/default/default.page';
import Header from './components/common/header.comp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/signin" element={<SignIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
