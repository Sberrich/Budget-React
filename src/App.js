import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import { useState, useEffect } from "react";
import ModalEdit from "./components/ModelEdit";
import { useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";
import { useDispatch } from "react-redux";

function App() {
  const [totalIncomse, setTotalIncomse] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState("");
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const index = entries.findIndex((entry) => entries.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);
  useEffect(() => {
    let TotalIncome = 0;
    let TotalExpence = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (TotalExpence += Number(entry.value));
      } else {
        return (TotalIncome += Number(entry.value));
      }
    });

    setTotal(TotalIncome - TotalExpence);
    setTotalExpense(TotalExpence);
    setTotalIncomse(TotalIncome);
    // eslint-disable-next-line
  }, [entries]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <Container>
      <MainHeader type="h1" title="Budget" />
      <DisplayBalance size="small" value={total} title="Your Balance" />
      <DisplayBalances
        totalExpense={totalExpense}
        totalIncomse={totalIncomse}
      />
      <MainHeader type="h3" title="History: " />
      <EntryLines entries={entries} />
      <MainHeader type="h3" title="Add new transaction: " />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
