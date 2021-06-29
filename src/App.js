import './App.css';
import React from 'react';

import 'antd/dist/antd.css';

import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import Card from './Components/card/Card';
import Projects from './Components/Projects';
import About from './Components/About';
import ContactMe from './Components/ContactMe';


function App() {

  return (
      <div className="app">
        <div className="background-img fade-in">
          <section>

            <AppHeader />
            <Card />

          </section>
        </div>
        <section>
          <About />
        </section>

        <section>
          <Projects />
        </section>
        <section>
          <ContactMe />
        </section>
        <AppFooter />
      </div>
  );
}

export default App;
