import React, { Fragment } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  const handelExpense = () => {
    setIsExpense(!isExpense);
  };
  const handelDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shiny things"
          value={description}
          onChange={(event) => handelDescription(event)}></Form.Input>
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onClick={handelExpense}></Checkbox>
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
