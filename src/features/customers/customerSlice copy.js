const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: {
      fullName,
    },
  };
}
export function updateNationalID(nationalID) {
  return {
    type: "customer/updateNationalID",
    payload: {
      nationalID,
    },
  };
}
export default function customerReducer(state = initialStateCustomer, action) {
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
