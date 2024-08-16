const redux = require("redux");
const logger = require("redux-logger");

// const initialCakeState = {
//   numOfCake: 20,
//   numOfIcecream: 10,
// };
const initialCakeState = {
  numOfCake: 20,
};

const initialIcecreamState = {
  numOfIcecream: 10,
};

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    purpose: "Buy a cake",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    purpose: "Buy a icecream",
  };
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// const myLogger = () => {
//   console.log("Hello");
// };

const myLogger = store => next => action => {
    console.log("Hello");
    // console.log("Hello");
    console.log("State", store.getState());
    return next(action);
  };

// const store = redux.createStore(rootReducer, redux.applyMiddleware(logger.createLogger()));
const store = redux.createStore(rootReducer, redux.applyMiddleware(myLogger));

const unsubscribe = store.subscribe(() =>
  console.log("State", store.getState()
)
);
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
