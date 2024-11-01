const data = [
  {
    cardId: "", // Unique identifier for each card
    cardNumber: "", // Debit card number
    expiryDate: "", // Expiry date of the card
    cvv: "", // Card verification value
    linkedAccount: "", // Account ID the card is linked to
    userId: "", // Link to user object (user's ID)
    // additional card-related fields
  },
  // more cards
];

//   debitCardReducer

const debitCardReducer = (state = data, action) => {
  switch (action.type) {
    case "debit/addCard":
      return [...state, action.payload];
    case "debit/removeCard":
      return state.filter((card) => card.cardNumber === action.payload);
    default:
      return state;
  }
};

// Actions Creator

export function addCard(obj) {
  return { type: "debit/addCard", payload: obj };
}

export function removeCard(id) {
  return { type: "debit/removeCard", payload: id };
}

export default debitCardReducer;
