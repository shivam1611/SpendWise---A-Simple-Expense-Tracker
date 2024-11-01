const initialState = {
  isSignedIn: false,
};

// reducer

const authentication_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "sign_in_allowed":
      return { ...state, isSignedIn: true };
    case "sign_in_reject":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

// action creators

export function sign_in_allowed() {
  return { type: "sign_in_allowed" };
}

export function sign_in_reject() {
  return { type: "sign_in_reject" };
}

export default authentication_reducer;
