import React from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <div class="ui segment">
        <div class="ui left rail">
          <div class="ui segment">Left Rail Content</div>
        </div>
        <div class="ui right rail">
          <div class="ui segment">Right Rail Content</div>
        </div>

        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="" textAlign="center">
              Welcome to Home Page
            </Header>
            <Segment>
              <Button color="blue" fluid size="large">
                Logout
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
