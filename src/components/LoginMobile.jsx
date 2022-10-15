import React, { useContext, useState } from "react";
import AuthPageArtwork from "./AuthPageArtwork";
import Image from "next/future/image";
import OTP from "./OTP";
import { AuthPageContext } from "../context/AuthPageContext";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "src/hooks/useAuth";

export default function LoginMobile() {
  const [page, setPage] = useContext(AuthPageContext);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState();
  const handlePhoneChange = (e) => {
    // console.log(e.target.value)
    setError("mobileNo", {});
    setPhone(e.target.value.trim());
  };

  const schema = yup.object().shape({
    mobileNo: yup
      .string()
      .required("Phone is a required field")
      .min(5, "min 5"),
  });

  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // ** Hook
  const auth = useAuth();

  const handleLogin = (data) => {
    const { mobileNo } = data;
    let countryCode = "+977";
    auth.mobileLoginInit({ mobileNo, countryCode }, (data) => {
      if (data.message == "success") {
        setPhone(mobileNo);
        setStep(2);
      } else {
        if (data.message == "failed") {
          setError("mobileNo", {
            // type: 'manual',
            message: data.error.message,
          });
        } else {
          setError("different", {
            // type: 'manual',
            message: data.error,
          });
        }
      }
    });
  };

  return (
    <div className="p-6">
      <>
        {step === 1 && (
          <>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">
                Login in to your account
              </h2>
              <p className="text-sm text-dark/80">
                Save extra cash with our monthly or Yearly subscription. If it
                fits in the bag, we’ll clean it.
              </p>
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
                      <div className="flex items-center space-x-3">
                        <Image
                          src="/flag-us.png"
                          width={20}
                          height={20}
                          className="object-contain"
                          alt=""
                        />
                        <span>+1</span>
                      </div>
                    </div>
                    {/* <Controller
                      name='id'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <input
                          value={value}
                          onBlur={onBlur}
                          // label='Email ID'
                          onChange={onChange}
                          id='id'
                          error={Boolean(errors.id)}
                          type="text"
                          placeholder="Enter phone number"
                          className="ml-2 w-full bg-transparent p-2 outline-none"

                        />
                      )}
                    /> */}

                    <input
                      {...register("mobileNo")}
                      value={phone}
                      // onBlur={onBlur}
                      // label='Email ID'
                      onChange={handlePhoneChange}
                      id="mobileNo"
                      // error={Boolean(errors.id)}
                      type="text"
                      placeholder="Enter phone number"
                      className="ml-2 w-full bg-transparent p-2 outline-none"
                    />
                  </div>
                </div>
                {/* <p style={{ marginTop: 0 }} className="text-sm text-red-500">hello</p> */}
                {errors.mobileNo && (
                  <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                    {errors.mobileNo.message}
                  </p>
                )}

                <button
                  onClick={handleSubmit(handleLogin)}
                  disabled={!!!phone}
                  // disabled={errors.id}
                  className="btn-primary">
                  Register
                </button>
                <div className="space-y-4 text-center">
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
                      onClick={() => setPage("login")}
                      className="w-max rounded-lg border py-3 px-6 text-center font-semibold uppercase">
                      Email
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
          </>
        )}

        {step === 2 && (
          <OTP phone={phone} from="mobileLogin" onBack={() => setStep(1)} />
        )}
      </>
    </div>
  );
}
