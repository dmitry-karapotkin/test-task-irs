import React from 'react';
import { Grid,
         Segment,
         Header,
         Icon, 
         Container, 
         Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Section({id, item}) {
    return (
        <Grid.Column
          as={Segment}
          raised
          stretched
          style={{
              display: "flex",
              flexDirection: "column"
          }}
        >
        <div className="section-with-button">
          <Container textAlign="justified">            
            <Header as="h3"><Icon name={item[1]} />{item[0]}</Header>            
                {item[2]}
          </Container>
            <Button 
              as={Link}
              to={`/${id}`}
              primary
              fluid
              content="Перейти"
            />
        </div>
        </Grid.Column>
    )
}

export default Section;