// Initial Data
const data_engine = {
  id: "", // Unique identifier for each user
  first_name: "", // User's first name
  last_name: "", // user's last name
  email: "", // User's email address
  phone: "", // User's contact information
  address: "", // User's physical address
  // additional user-related fields
};

// User Reducer

const userReducer = (state = data_engine, action) => {
  switch (action.type) {
    case "user/update_first_name":
      return { ...state, first_name: action.payload };
    case "user/update_last_name":
      return { ...state, last_name: action.payload };
    case "user/update_email":
      return { ...state, email: action.payload };
    case "user/update_phone":
      return { ...state, phone: action.payload };
    case "user/update_address":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

//   Action Creator Functions

export function update_first_name(data) {
  return { type: "user/update_first_name", payload: data };
}
export function update_last_name(data) {
  return { type: "user/update_last_name", payload: data };
}
export function update_email(data) {
  return { type: "user/update_email", payload: data };
}
export function update_phone(data) {
  return { type: "user/update_phone", payload: data };
}
export function update_address(data) {
  return { type: "user/update_address", payload: data };
}

export default userReducer;
