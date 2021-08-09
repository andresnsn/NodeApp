import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Roteamento
import { Route, Switch, useLocation } from 'react-router-dom'
//Components
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'
//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Admin from './pages/Admin'


function App() {
  const location = useLocation()
  library.add(fab, fas)

  return (
    <div>
      <GlobalStyle/>
      {location.pathname !== '/admin' && <Nav/>}
      <Switch>
        <Route exact path = "/" component={AboutUs}/>
        <Route path = {['/portfolio:id', '/portfolio']} component={Portfolio}/>
        <Route path = "/contact" component={ContactMe}/>
        <Route path = '/admin' component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
