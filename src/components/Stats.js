import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';


function Stats () {

    const items = [
        ['Готовность к выполнению мобилизационных заданий', '27%'],
        ['Обеспеченность производственными мощностями', '40%'],
        ['Обеспеченность рабочей силой', '90%']
    ]

    return (
        <Grid>
          <Grid.Row stretched columns={items.length}>
            {items.map((item, i) => {
                return (
                  <Grid.Column 
                    key={i} 
                    as={Segment}
                    raised
                  >
                    <Header as="h3" content={item[0]} />
                    {item[1]}
                  </Grid.Column>
                )
            })}
            </Grid.Row>
        </Grid>
    )
}

export default Stats;