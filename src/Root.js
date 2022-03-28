import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise";
export default ({ children, initState = {} }) => {
  return (
    <Provider
      store={createStore(reducers, initState, applyMiddleware(reduxPromise))}
    >
      {children}
    </Provider>
  );
};
