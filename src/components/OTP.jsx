import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import AuthPageArtwork from "./AuthPageArtwork";
import { useEffect, useState } from "react";

function Otp({ phone, onBack }) {
  const [cooldown, setCooldown] = useState(10);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cooldown <= 0) return;
      setCooldown((old) => old - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [cooldown]);

  return (
    <>
      <div className="items-start md:flex">
        <button
          onClick={onBack}
          className="mr-4 rounded-full bg-white p-1 hover:bg-gray-100"
        >
          <ArrowSmallLeftIcon className="h-7 w-7 shrink-0 stroke-2" />
        </button>
        <div className="mt-2 space-y-1 md:mt-0">
          <h2 className="text-xl font-semibold">One Time Password (OTP)</h2>
          <p className="text-sm text-dark/80">Code has been sent to {phone}</p>
        </div>
      </div>
      <div className="mt-8 gap-6 md:mt-12 md:flex">
        <div className="space-y-4 md:w-4/12 md:min-w-[300px]">
          {/*conditionally render this element*/}
          {/*<p className="text-sm text-red-500">Some error message goes here</p>*/}
          <div>
            <label className="label" htmlFor="phone">
              Mobile Number
            </label>
            <div className="input relative mt-1 flex p-1">
              <div className="flex shrink-0 justify-center border-r py-2 px-4 font-semibold">
                DC
              </div>
              <input
                type="text"
                id="phone"
                placeholder="Enter Code"
                className="ml-2 w-full bg-transparent p-2 outline-none"
              />
            </div>
          </div>
          <div>
            {cooldown > 0 ? (
              <p className="text-sm font-medium text-gray-400">
                Your code will expire in {cooldown} sec.
              </p>
            ) : (
              <div>
                <span>{"Didn't receive the code? "}</span>
                <button className="text-blue-600">Resend OTP</button>
              </div>
            )}
          </div>

          {/*make it disabled conditionally*/}
          <button className="btn-primary">Verify</button>
        </div>
        <AuthPageArtwork />
      </div>
    </>
  );
}

export default Otp;
