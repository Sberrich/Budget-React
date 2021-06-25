import React from "react";
import { Segment, Grid, Container, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModel } from "../actions/models.actions";
const EntryLine = ({ id, description, value, isExpense = false }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModel(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default EntryLine;
