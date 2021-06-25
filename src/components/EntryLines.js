import { Container } from "semantic-ui-react";
import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} />
      ))}
    </Container>
  );
};

export default EntryLines;
