import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useRouter } from "next/router";

function AccountLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="container max-w-screen-2xl 2xl:px-0">
        <div className="flex h-full min-h-screen flex-col bg-gray-50 md:h-screen 2xl:m-5 2xl:h-[calc(100vh_-_2.5rem)] 2xl:min-h-[calc(100vh_-_2.5rem)] 2xl:rounded-xl 2xl:border">
          <div className="flex justify-between p-5 2xl:p-10">
            <div className="mt-16 items-start md:mt-0 md:flex">
              <button
                onClick={() => router.replace("/")}
                className="mr-4 rounded-full bg-white p-1 hover:bg-gray-100"
              >
                <ArrowSmallLeftIcon className="h-7 w-7 shrink-0 stroke-2" />
              </button>
              <div className="mt-4 md:mt-0">
                <h2 className="text-xl font-semibold">My Account</h2>
                <p className="max-w-3xl text-sm text-dark/80">
                  Save extra cash with our monthly or Yearly subscription. If it
                  fits in the bag, we’ll clean it.
                </p>
              </div>
            </div>
            <div className="ml-4 hidden md:block">
              <button className="flex items-center rounded-full bg-white p-3 shadow-sm hover:bg-gray-50">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 27.333c-7.364 0-13.333-5.97-13.333-13.334S6.637.666 14 .666c7.364 0 13.334 5.97 13.334 13.333 0 7.364-5.97 13.334-13.334 13.334Zm6.667-8 6.667-5.334-6.667-5.333v4H10v2.667h10.667v4Z"
                    fill="#185ADB"
                    fillOpacity=".7"
                  />
                </svg>
                <span className="mx-3 whitespace-nowrap font-semibold text-dark">
                  Sign out
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-1 overflow-y-hidden md:pb-2">
            <div className="hidden h-full w-full max-w-[23rem] shrink-0 flex-col overflow-y-hidden pl-5 pr-2.5 md:flex">
              <Sidebar />
            </div>

            <div className="grow overflow-auto px-5 scrollbar-thin scrollbar-thumb-gray-300 md:mt-4 md:mt-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
