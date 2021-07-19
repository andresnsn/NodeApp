import React from 'react'

import GlobalStyle from './components/GlobalStyle';

import AboutUs from './pages/AboutUs'

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Route path = "/">
          <AboutUs/>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
