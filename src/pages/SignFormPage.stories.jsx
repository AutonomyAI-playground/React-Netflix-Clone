import React, { useEffect, useRef } from "react";
import { MemoryRouter } from "react-router-dom";
import { FirebaseContext } from "../context/FirbaseContext";
import SignFormPage from "./SignFormPage";

// Mock Firebase context for Storybook
// Returns errors to demonstrate error handling without real authentication
const mockFirebase = {
  auth: () => ({
    signInWithEmailAndPassword: () =>
      Promise.reject(new Error("Invalid email or password")),
    createUserWithEmailAndPassword: () =>
      Promise.reject(new Error("Email already in use")),
  }),
};

const meta = {
  title: "Pages/SignFormPage",
  component: SignFormPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase: mockFirebase }}>
          <Story />
        </FirebaseContext.Provider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

// Sign In Mode (Default State)
export const SignIn = {};

// Story wrapper that programmatically switches to sign up mode
// Uses a ref to track whether the mode toggle has been triggered to prevent duplicate clicks
const SignUpModeWrapper = () => {
  const clicked = useRef(false);

  useEffect(() => {
    if (clicked.current) return;
    const timer = setTimeout(() => {
      const link = document.querySelector(".sign-form-link");
      if (link && !clicked.current) {
        clicked.current = true;
        link.click();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <SignFormPage />;
};

export const SignUp = {
  render: () => <SignUpModeWrapper />,
};

// Story wrapper that fills the form with invalid data to demonstrate validation
// Invalid email (no @domain) and password too short (< 6 chars) keep the button disabled
const SignInWithErrorsWrapper = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const emailInput = document.querySelector(
        'input[placeholder="Email Address"]'
      );
      const passwordInput = document.querySelector(
        'input[placeholder*="Password"]'
      );

      if (emailInput && passwordInput) {
        // Use native setter to trigger React's onChange handlers
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;

        nativeInputValueSetter.call(emailInput, "invalid-email");
        emailInput.dispatchEvent(new Event("input", { bubbles: true }));

        nativeInputValueSetter.call(passwordInput, "123");
        passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <SignFormPage />;
};

export const SignInWithValidationErrors = {
  render: () => <SignInWithErrorsWrapper />,
};

// Story wrapper that switches to sign up mode and fills form with invalid data
// Empty first name, invalid email, and short password demonstrate full validation state
const SignUpWithErrorsWrapper = () => {
  const clicked = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Switch to sign up mode first
      const link = document.querySelector(".sign-form-link");
      if (link && !clicked.current) {
        clicked.current = true;
        link.click();
      }

      // Fill with invalid data after mode switch completes
      setTimeout(() => {
        const nameInput = document.querySelector(
          'input[placeholder="First Name"]'
        );
        const emailInput = document.querySelector(
          'input[placeholder="Email Address"]'
        );
        const passwordInput = document.querySelector(
          'input[placeholder*="Password"]'
        );

        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;

        if (nameInput) {
          nativeInputValueSetter.call(nameInput, "");
          nameInput.dispatchEvent(new Event("input", { bubbles: true }));
        }

        if (emailInput) {
          nativeInputValueSetter.call(emailInput, "bad-email");
          emailInput.dispatchEvent(new Event("input", { bubbles: true }));
        }

        if (passwordInput) {
          nativeInputValueSetter.call(passwordInput, "12");
          passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 200);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <SignFormPage />;
};

export const SignUpWithValidationErrors = {
  render: () => <SignUpWithErrorsWrapper />,
};
