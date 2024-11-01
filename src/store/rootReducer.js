import { combineReducers } from "redux";
import bankReducer from "../features/bankAccountSlice";
import debitCardReducer from "../features/debitCardSlice";
import transaction_reducer from "../features/transactionSlice";
import userReducer from "../features/userSlice";
import authentication_reducer from "../features/authentication";

const rootReducer = combineReducers({
  user: userReducer,
  bank: bankReducer,
  debit: debitCardReducer,
  transaction: transaction_reducer,
  authentication: authentication_reducer,
});

export default rootReducer;
