import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/Entries.reducers";
import modalsReduser from "../reducers/Modals.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReduser,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  // sagaMiddleware.run(getAllEntries);
  initSagas(sagaMiddleware);
  return store;
};

export default configureStore;
