import React from "react";
import { MemoryRouter } from "react-router-dom";
import SignFormWrapper from "./SignFormWrapper";
import SignFormBase from "./SignFormBase";
import SignFormTitle from "./SignFormTitle";
import SignFormInput from "./SignFormInput";
import SignFormButton from "./SignFormButton";
import SignFormText from "./SignFormText";
import SignFormLink from "./SignFormLink";
import SignFormCaptcha from "./SignFormCaptcha";
import SignFormError from "./SignFormError";

export default {
  title: "Components/SignForm",
  decorators: [
    // Wrap all stories with MemoryRouter and provide padding for better visibility
    (Story) => (
      <MemoryRouter>
        <div style={{ minHeight: "100vh", padding: "40px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

// Complete sign-in form with all input fields and supporting elements
export const ComposedSignInForm = {
  render: () => (
    <SignFormWrapper>
      <SignFormBase onSubmit={(e) => e.preventDefault()} method="POST">
        <SignFormTitle>Sign In</SignFormTitle>
        <SignFormInput type="text" placeholder="Email Address" />
        <SignFormInput
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <SignFormButton>Sign In</SignFormButton>
        <SignFormText>
          New to Netflix?
          <SignFormLink href="/signup">Sign up now.</SignFormLink>
        </SignFormText>
        <SignFormCaptcha>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.
        </SignFormCaptcha>
      </SignFormBase>
    </SignFormWrapper>
  ),
};

// Sign-in form displaying an error message for invalid credentials
export const SignInFormWithError = {
  render: () => (
    <SignFormWrapper>
      <SignFormBase onSubmit={(e) => e.preventDefault()} method="POST">
        <SignFormTitle>Sign In</SignFormTitle>
        <SignFormError>
          The email address or password you entered is incorrect. Please try
          again.
        </SignFormError>
        <SignFormInput
          type="text"
          placeholder="Email Address"
          defaultValue="user@example.com"
        />
        <SignFormInput
          type="password"
          placeholder="Password"
          autoComplete="off"
          defaultValue="wrongpassword"
        />
        <SignFormButton>Sign In</SignFormButton>
        <SignFormText>
          New to Netflix?
          <SignFormLink href="/signup">Sign up now.</SignFormLink>
        </SignFormText>
        <SignFormCaptcha>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.
        </SignFormCaptcha>
      </SignFormBase>
    </SignFormWrapper>
  ),
};

// Individual component: Form wrapper providing styling container
export const Wrapper = {
  render: () => (
    <SignFormWrapper>
      <p style={{ color: "#fff" }}>
        SignFormWrapper provides a dark semi-transparent container
      </p>
    </SignFormWrapper>
  ),
};

// Individual component: Form title heading
export const Title = {
  render: () => (
    <SignFormWrapper>
      <SignFormTitle>Sign In</SignFormTitle>
    </SignFormWrapper>
  ),
};

// Individual component: Form input fields for email and password
export const Input = {
  render: () => (
    <SignFormWrapper>
      <SignFormBase>
        <SignFormInput type="text" placeholder="Email Address" />
        <SignFormInput type="password" placeholder="Password" />
      </SignFormBase>
    </SignFormWrapper>
  ),
};

// Individual component: Submit button in normal and disabled states
export const Button = {
  render: () => (
    <SignFormWrapper>
      <SignFormBase>
        <SignFormButton>Sign In</SignFormButton>
        <SignFormButton disabled>Sign In (Disabled)</SignFormButton>
      </SignFormBase>
    </SignFormWrapper>
  ),
};

// Individual component: Text with embedded link for sign-up
export const TextAndLink = {
  render: () => (
    <SignFormWrapper>
      <SignFormText>
        New to Netflix?
        <SignFormLink href="/signup">Sign up now.</SignFormLink>
      </SignFormText>
    </SignFormWrapper>
  ),
};

// Individual component: reCAPTCHA notice text
export const Captcha = {
  render: () => (
    <SignFormWrapper>
      <SignFormCaptcha>
        This page is protected by Google reCAPTCHA to ensure you are not a bot.
      </SignFormCaptcha>
    </SignFormWrapper>
  ),
};

// Individual component: Error message display
export const Error = {
  render: () => (
    <SignFormWrapper>
      <SignFormError>
        The email address or password you entered is incorrect.
      </SignFormError>
    </SignFormWrapper>
  ),
};
