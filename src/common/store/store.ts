import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import commonRootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
/**
 * @description Configures the redux store.
 * Store is created with root reducer along with the root Saga for Redux-Saga.
 *
 * @returns the store object which is used by the provider.
 */
function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const appStore: any = createStore(
    commonRootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  appStore.runSagaTask = () => {
    appStore.sagaTask = sagaMiddleware.run(rootSaga);
  };

  appStore.runSagaTask();

  return appStore;
}

const store = configureStore();

export default store;
