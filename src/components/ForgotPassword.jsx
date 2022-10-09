import React, { useContext } from "react";
import Input from "src/components/Input";
import AuthPageArtwork from "./AuthPageArtwork";
import { AuthPageContext } from "../context/AuthPageContext";

export default function ForgotPassword() {
  const [page, setPage] = useContext(AuthPageContext);

  return (
    <div className="p-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Forgot Password</h2>
        <p className="text-sm text-dark/80">
          Save extra cash with our monthly or Yearly subscription. If it fits in
          the bag, we’ll clean it.
        </p>
      </div>
      <div className="mt-8 gap-6 md:mt-12 md:flex">
        <div className="space-y-4 md:w-4/12 md:min-w-[300px]">
          {/*conditionally render this element*/}
          <p className="text-sm text-red-500">Some error message goes here</p>

          <Input label="Email ID" id="email" name="Email" type="text" />
          <Input
            label="New Password"
            id="password"
            name="Password"
            type="password"
          />
          <Input
            label="Confirm Password"
            id="confirm-password"
            name="CPassword"
            type="password"
          />
          {/*make it disabled conditionally*/}
          <button className="btn-primary">Reset Password</button>
          <p className="text-center">
            {"Already have an account? "}
            <button
              onClick={() => setPage("login")}
              className="font-semibold text-blue-600">
              Login
            </button>
          </p>
        </div>
        <AuthPageArtwork />
      </div>
    </div>
  );
}
