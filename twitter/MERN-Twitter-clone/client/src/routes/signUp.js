import React from "react";
import Header from "../components/Header";
import SignupBody from "../components/SignupBody";
import { signal } from "nodemon/lib/config/defaults";

function SignUp() {
  return (
    <>
      <Header />
      <SignupBody />
    </>
  );
}

export default SignUp;
