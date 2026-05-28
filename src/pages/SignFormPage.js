import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/FirbaseContext";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FooterCompound from "../compounds/FooterCompound";
import SignFormWrapper from "../components/SignForm/SignFormWrapper";
import SignFormBase from "../components/SignForm/SignFormBase";
import SignFormTitle from "../components/SignForm/SignFormTitle";
import SignFormInput from "../components/SignForm/SignFormInput";
import SignFormButton from "../components/SignForm/SignFormButton";
import SignFormText from "../components/SignForm/SignFormText";
import SignFormLink from "../components/SignForm/SignFormLink";
import SignFormCaptcha from "../components/SignForm/SignFormCaptcha";
import SignFormError from "../components/SignForm/SignFormError";
import Warning from "../components/Header/Warning";

function SignFormPage() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [mode, setMode] = useState("signin");
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validation: Email must match basic pattern, password must be at least 6 characters
  const isValidEmail = /\S+@\S+\.\S+/.test(emailAddress);
  const isValidPassword = password.length >= 6;

  // Sign up requires first name, email, and password; sign in only requires email and password
  const isInvalid =
    mode === "signup"
      ? firstName === "" || !isValidEmail || !isValidPassword
      : !isValidEmail || !isValidPassword;

  const handleToggleMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
    // Clear error message when switching modes
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "signin") {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          setEmailAddress("");
          setPassword("");
          history.push("/browse");
        })
        .catch((error) => setError(error.message));
    } else {
      // Sign up: create user account and set display name before redirecting
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
          result.user
            .updateProfile({
              displayName: firstName,
            })
            .then(() => {
              setFirstName("");
              setEmailAddress("");
              setPassword("");
              history.push("/browse");
            })
        )
        .catch((error) => setError(error.message));
    }
  };

  return (
    <>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-signin">
          <Logo />
        </NavBar>
        <SignFormWrapper>
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <Warning>NOT official Netflix</Warning>
            <SignFormTitle>
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </SignFormTitle>
            {error ? <SignFormError>{error}</SignFormError> : null}
            {mode === "signup" && (
              <SignFormInput
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            )}
            <SignFormInput
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Password (min. 6 characters)"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignFormButton disabled={isInvalid}>
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </SignFormButton>
            <SignFormText>
              {mode === "signin" ? "New to Netflix?" : "Already a user?"}
              <SignFormLink onClick={handleToggleMode}>
                {mode === "signin" ? "Sign up now." : "Sign in now."}
              </SignFormLink>
            </SignFormText>
            <SignFormCaptcha>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderWrapper>
      <FooterCompound />
    </>
  );
}

export default SignFormPage;
