import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

/* Pages */
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Allies from './pages/Allies';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';

//layouts
import MainLayout from './layouts/MainLayouts'

import './default.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>

          {/* HOMEPAGE */}
  
        <Route exact path="/" render={()=> (  
            <Homepage />
          )}/>

          {/* HOME MENU */}
  
        <Route exact path="/Allies" render={()=> (  
          <MainLayout>
            <Allies />
          </MainLayout>
        )}/>

        <Route exact path="/Portfolio" render={()=> (  
          <MainLayout>
            <Portfolio />
          </MainLayout>
        )}/>

        <Route exact path="/Contacts" render={()=> (  
          <MainLayout>
            <Contact />
          </MainLayout>
        )}/>

        <Route exact path="/AboutMe" render={()=> (  
          <MainLayout>
            <Aboutme />
          </MainLayout>
        )}/>

        {/* OTHERS */}

        <Route exact path="/Gallery" render={()=> (  
          <MainLayout>
            <Gallery />
          </MainLayout>
        )}/>

        </Switch>
      </div>
    );
  }
}

export default App;
