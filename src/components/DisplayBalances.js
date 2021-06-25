import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Grid, Segment } from "semantic-ui-react";

const DisplayBalances = ({ totalExpense, totalIncomse }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              value={totalIncomse}
              size="tiny"
              title="Incoming :"
              color="green"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              value={totalExpense}
              size="tiny"
              title="Expenses :"
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
