import React from 'react'

import GlobalStyle from './components/GlobalStyle';

import { Route, Switch } from 'react-router-dom'
//Components
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'
import PortfolioDetail from './components/PortfolioDetail'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route exact path = "/">
          <AboutUs/>
        </Route>
        <Route path = "/portfolio" exact>
          <Portfolio/>
        </Route>
        <Route path = "/portfolio/:id">
          <PortfolioDetail/>
        </Route>
        <Route path = "/contact">
          <ContactMe/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
