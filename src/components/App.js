import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { SectionContext, items } from '../contexts/SectionContext';
import LeftSidebar from './LeftSidebar';
import Dashboard from './Dashboard';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';


function App() {

  const [activeItem, setActiveItem] = useState('home');
  
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <SectionContext.Provider value={items}>

        <LeftSidebar 
          activeItem={activeItem}
          onClickItem={handleItemClick}
        />

          <Switch>
          {Object.keys(items).map(key => {
              if (key === 'home') {
                return (
                  <Route exact path='/' key={key}>
                    <Dashboard />
                  </Route>
                )
              } else {
                return (
                  <Route exact path={`/${key}`} key={key}>
                    {items[key][0]}
                  </Route>
                )
              }
            })}
          </Switch>

    </SectionContext.Provider>
  );
}

export default App;
