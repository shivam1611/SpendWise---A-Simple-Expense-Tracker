const data = [
  {
    accountId: "", // Unique identifier for each account
    accountNumber: "", // Bank account number
    bankName: "", // Name of the bank
    accountType: "", // e.g., Savings, Checking
    balance: 0, // Current balance
    userId: "", // Link to user object (user's ID)
    // additional account-related fields
  },
  // more accounts
];

// bankReducer

const bankReducer = (state = data, action) => {
  switch (action.type) {
    case "bank/addBank":
      return [...state, action.payload];
    case "bank/removeBank":
      return state.filter(
        (bank) => bank.accountId.toLowerCase() === action.payload.toLowerCase()
      );
    default:
      return state;
  }
};

// action creators

export function addBank(obj) {
  return { type: "bank/addBank", payload: obj };
}
export function removeBank(id) {
  return { type: "bank/removeBank", payload: id };
}

export default bankReducer;
