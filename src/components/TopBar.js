import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function TopBar ({onMenuClick}) {
    return (
        <Grid
          as={Segment}
          raised
        >
          <Grid.Row columns={3}>
          <Grid.Column width="1">
            <Icon 
              name="bars" 
              style={{cursor: "pointer"}}
              onClick={onMenuClick}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <Icon name="envelope" />
            Новых сообщений: 3
          </Grid.Column>
          <Grid.Column width="6">
            <Icon name="newspaper" />
            Есть новости
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}

export default TopBar;