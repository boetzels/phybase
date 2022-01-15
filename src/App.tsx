// React
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// file css
import './App.scss';

// pages and components
import SignIn from './pages/signin/signin.page';
import DefaultPage from './pages/default/default.page';
import Dashboard from './pages/dashboard/dashboard.page';
import ErrorPage from './pages/error.page';
import Header from './components/common/header.comp';

import { PrivateRoute } from './utils/privateroute.utils';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<DefaultPage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="dash" element={<PrivateRoute component={Dashboard} />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
