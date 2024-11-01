import React from "react";
import { useDispatch } from "react-redux";
import { sign_in_allowed } from "../features/authentication.js";

const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(sign_in_allowed())}>Sign In</button>
    </div>
  );
};

export default SignIn;
