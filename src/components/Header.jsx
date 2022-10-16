import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/future/image";
import { RiMenu5Fill, RiNotification2Fill, RiUser3Fill } from "react-icons/ri";

function Header({ onClickLogin }) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const { asPath } = useRouter();

  const toggleMenu = () => {
    setSideMenuOpen((old) => !old);
  };

  const navList = (
    <ul className="flex flex-col gap-3 md:flex-row md:items-center">
      <li>
        <a href="#" className="p-2">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="p-2">
          Subscription
        </a>
      </li>
      <li>
        <a href="#" className="p-2">
          Delotto&copy;
        </a>
      </li>
      <li>
        <a href="#" className="p-2">
          About Us
        </a>
      </li>
      <li>
        <a href="#" className="p-2">
          Contact Us
        </a>
      </li>
    </ul>
  );

  useEffect(() => {
    setSideMenuOpen(false);
  }, [asPath]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-50/10 bg-primary">
        <div className="container flex items-center py-2">
          <Image
            src={"/images/app-logo.png"}
            width={160}
            height={90}
            className="w-28 object-contain object-left py-1 lg:object-center"
            alt="Logo"
          />
          <div className="ml-4 hidden text-white md:block">{navList}</div>
          <div className="ml-auto hidden gap-2 lg:flex">
            {/*if user isn't logged in*/}
            <button
              onClick={onClickLogin}
              className="ml-6 rounded-lg py-3 px-6 font-semibold text-white hover:bg-white hover:text-primary">
              <span>Login</span>
            </button>
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-white/90">
              Book Now
            </button>

            {/*if logged in*/}
            {/*<button*/}
            {/*  className="ml-6 inline-flex rounded-lg bg-white py-3 px-6 font-semibold text-primary hover:bg-white/90">*/}
            {/*  <RiUser3Fill size={24} className="mr-2" />*/}
            {/*  <span>Account</span>*/}
            {/*</button>*/}
            {/*<button className="relative rounded-lg bg-white px-3 py-2 font-semibold text-primary hover:bg-white/90">*/}
            {/*  <RiNotification2Fill size={24} />*/}
            {/*  <span className="absolute -top-3 -right-3 h-7 min-w-[1.75rem] rounded-full border-2 border-white bg-[#ED6340] px-0.5 text-white">*/}
            {/*    9*/}
            {/*  </span>*/}
            {/*</button>*/}
          </div>

          {/*menu button for mobile only*/}
          <div className="ml-auto flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 hover:bg-black/10">
              <RiMenu5Fill className="text-white" size={28} />
            </button>

            {/*if user is logged in, show notification and account icon*/}
            <button className="rounded-md p-2 text-white hover:bg-black/10">
              <RiUser3Fill size={24} />
            </button>
            <button className="relative rounded-md py-2 px-3 font-semibold text-white hover:bg-black/10">
              <RiNotification2Fill size={24} />
              <span className="absolute -top-1 -right-1 h-6 min-w-[1.5rem] rounded-full border-2 border-white bg-[#ED6340] px-1 px-0.5 text-sm text-white">
                7
              </span>
            </button>
          </div>
        </div>
      </header>

      <Transition.Root show={sideMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000] md:hidden"
          onClose={setSideMenuOpen}>
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
              <Dialog.Panel className="relative flex w-full flex-1 flex-col bg-gray-50">
                <div className="flex items-center justify-between gap-2 border-b p-4">
                  <h1 className="text-lg font-semibold">Menu</h1>
                  <button
                    onClick={toggleMenu}
                    className="text-gray-500 hover:text-dark">
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                  </button>
                </div>
                <div className="px-2 py-4">{navList}</div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Header;
