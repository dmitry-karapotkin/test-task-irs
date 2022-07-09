import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';

import { SectionContext } from '../contexts/SectionContext';
import TopBar from './TopBar';
import Stats from './Stats';
import Section from './Section';

function Dashboard ({onMenuClick}) {
    const context = useContext(SectionContext);
    const items = JSON.parse(JSON.stringify(context));
    delete items.home;

    return (
    <>
        <TopBar onMenuClick={onMenuClick}/>
        <Stats />
        <Grid>
          <Grid.Row stretched columns={Object.keys(items).length}>
            {Object.keys(items).map(key => {
                return (
                <Section key={key} id={key} item={items[key]}/>
                )
            })}
          </Grid.Row>
        </Grid>
    </>
    )
};

export default Dashboard;