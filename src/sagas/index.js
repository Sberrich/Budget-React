import * as entriesSaga from "./entriesSaga";

export function initSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
