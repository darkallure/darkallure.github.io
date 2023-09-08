import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - action.payload.amount,
      };
    default:
      return state;
  }
}
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    case "customer/updateNationalID":
      return {
        ...state,
        nationalID: action.payload.nationalID,
      };

    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
// store.dispatch({
//   type: "account/deposit",
//   payload: {
//     amount: 888,
//   },
// });
// store.dispatch({
//   type: "account/withdraw",
//   payload: {
//     amount: 88,
//   },
// });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 8888,
//     purpose: "buy a car",
//   },
// });
// store.dispatch({
//   type: "account/payLoan",
//   payload: {
//     amount: 8888,
//   },
// });
// console.log(store.getState());
function deposit(amount) {
  return {
    type: "account/deposit",
    payload: {
      amount,
    },
  };
}
function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: {
      amount,
    },
  };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}
function payLoan(amount) {
  return {
    type: "account/payLoan",
    payload: {
      amount,
    },
  };
}
store.dispatch(deposit(888));
store.dispatch(withdraw(88));
store.dispatch(requestLoan(8888, "buy a car"));
store.dispatch(payLoan(4688));
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: {
      fullName,
    },
  };
}
function updateNationalID(nationalID) {
  return {
    type: "customer/updateNationalID",
    payload: {
      nationalID,
    },
  };
}
store.dispatch(createCustomer("Nikolai Polozov", "123456789"));
console.log(store.getState());
store.dispatch(updateName("John Doe 2"));
console.log(store.getState());
