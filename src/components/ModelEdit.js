import React from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModel } from "../actions/models.actions";

const ModelEdit = ({ isOpen, value, description, isExpense }) => {
  const dispatch = useDispatch();
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entries</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          // setValue={setValue}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModel())}>Cancel</Button>
        {/* <Button onClick={() => setIsOpen(false)} positive>
          Save
        </Button> */}
      </Modal.Actions>
    </Modal>
  );
};

export default ModelEdit;
