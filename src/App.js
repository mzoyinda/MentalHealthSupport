import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Home from './Pages/Home/index';
import NgoLink from './Pages/GetSupport/index';
import About from './Pages/About/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/get-support'>
            <NgoLink/>
          </Route>
          <Route path='/about-us'>
            <About />
          </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
