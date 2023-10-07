import createStore from "./utils/createStore";

const store = createStore({ count: 0 });

store.setState({ count: 1 });
store.subscribe(() => {
  console.info("update", store.getState());
});
export default store;
