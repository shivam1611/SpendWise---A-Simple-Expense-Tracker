const data = [
  {
    transactionId: "", // Unique identifier for each transaction
    accountId: "", // Bank account ID for tracking
    type: "credit/debit", // Transaction type
    amount: 0, // Amount of the transaction
    date: "", // Date of the transaction
    // additional transaction-related fields
  },
  // more transactions
];

// reducer

const transaction_reducer = (state = data, action) => {
  switch (action.type) {
    case "addTransaction":
      return [...state, action.payload];
    case "removeTransaction":
      return state.filter((data) => data.transactionId === action.payload);
    default:
      return state;
  }
};

// Action creators

export function addTransaction(obj) {
  return { type: "addTransaction", payload: obj };
}

export function removeTransaction(id) {
  return { type: "removeTransaction", payload: id };
}

export default transaction_reducer;
