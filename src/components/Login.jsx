import React, { useContext } from "react";
import Input from "src/components/Input";
import AuthPageArtwork from "./AuthPageArtwork";
import { AuthPageContext } from "../context/AuthPageContext";
import { useRouter } from "next/router";

export default function Login() {
  const [page, setPage] = useContext(AuthPageContext);
  const router = useRouter();
  return (
    <div className="p-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Mobile Number</h2>
        <p className="text-sm text-dark/80">
          Save extra cash with our monthly or Yearly subscription. If it fits in
          the bag, we’ll clean it.
        </p>
      </div>
      <div className="mt-8 gap-6 md:mt-12 md:flex">
        <div className="space-y-4 md:w-4/12 md:min-w-[300px] md:px-2">
          {/*conditionally render this element*/}
          <p className="text-sm text-red-500">Some error message goes here</p>

          <Input label="Email ID" id="email" name="Email" type="text" />
          <Input
            label="Password"
            id="password"
            name="Password"
            type="password"
          />

          {/*make it disabled conditionally*/}
          <button
            /*for demo only*/
            onClick={() => router.push("/account/summary")}
            className="btn-primary">
            Log In
          </button>
          <div className="space-y-4 text-center">
            <button
              onClick={() => setPage("forgot-password")}
              className="font-semibold text-dark/70 underline">
              Forgot Password?
            </button>
            <div className="separator">or continue with</div>
            <div className="flex items-stretch justify-center space-x-3">
              <button className="w-20 rounded-lg border py-3 px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-6"
                  viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setPage("register-mobile")}
                className="w-max rounded-lg border py-3 px-6 text-center font-semibold uppercase">
                OTP
              </button>
            </div>
            <p>
              {"Don't have an account? "}
              <button
                onClick={() => setPage("register")}
                className="font-semibold text-blue-600">
                Register
              </button>
            </p>
          </div>
        </div>
        <AuthPageArtwork />
      </div>
    </div>
  );
}
