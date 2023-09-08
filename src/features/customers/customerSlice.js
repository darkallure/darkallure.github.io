import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
    updateNationalID(state, action) {
      state.nationalID = action.payload.nationalID;
    },
  },
});
export const { createCustomer, updateName, updateNationalID } =
  customerSlice.actions;
export default customerSlice.reducer;

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }
// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: {
//       fullName,
//     },
//   };
// }
// export function updateNationalID(nationalID) {
//   return {
//     type: "customer/updateNationalID",
//     payload: {
//       nationalID,
//     },
//   };
// }
// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };
//     case "customer/updateNationalID":
//       return {
//         ...state,
//         nationalID: action.payload.nationalID,
//       };

//     default:
//       return state;
//   }
// }
