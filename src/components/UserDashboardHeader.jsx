import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";

function UserDashboardHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { asPath } = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen((old) => !old);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [asPath]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b bg-white p-3 md:hidden">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={toggleSidebar}
              className="rounded-md bg-gray-50 p-2"
              aria-hidden="true">
              <Bars3BottomLeftIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex space-x-3 px-2 text-sm">
            <li>
              <a href="#" className="font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-medium">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[500] md:hidden"
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-50">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <Sidebar />
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default UserDashboardHeader;
