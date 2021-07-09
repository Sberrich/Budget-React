import React from "react";

import { Grid, Header, Segment } from "semantic-ui-react";

import { useHistory } from "react-router-dom";
const Landing = () => {
  const history = useHistory();

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
              Welcome to landing Page
            </Header>

            <Segment>
              <div class="ui buttons">
                <button
                  class="ui button"
                  onClick={() => {
                    history.push("/login");
                  }}>
                  Login
                </button>
                <div class="or"></div>
                <button
                  class="ui positive button"
                  onClick={() => {
                    history.push("/register");
                  }}>
                  Register
                </button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
