// ** React Imports
import { useEffect, useState } from "react";

// ** Next Imports
import { useRouter } from "next/router";

// ** Spinner Import
// import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { useAuth } from "src/hooks/useAuth";
import AuthPages from "src/components/AuthPages";
import Image from "next/future/image";
import Modal from "src/components/Modal";

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role) => {
  if (role === "user") return "/home";
  else return "/dashboards/crm";
};

const Home = () => {
  const auth = useAuth();
  const router = useRouter();

  // console.log('hello ',router.query.requireAuth)

  const [page, setPage] = useState("register-mobile");

  const [isOpen, setIsOpen] = useState(() => {
    return !!router.query.requireAuth ?? false;
  });


  const toggleLoginModal = () => {
    setIsOpen((old) => !old);
  };

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role);

      // Redirect user to Home URL
      router.replace(homeRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <AuthPages />
      </Modal>
      <header className="bg-[#0A1931]">
        <div className="container flex max-w-screen-xl items-center px-5 py-4">
          <Image
            src={"/logo.png"}
            width={160}
            height={90}
            className="object-contain"
            alt="Logo"
          />
          <ul className="ml-4 flex items-center space-x-2 text-white">
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
          <div className="ml-auto">
            <button
              onClick={toggleLoginModal}
              className="p-3 font-semibold text-white">
              Login
            </button>
            <button className="ml-6 rounded-lg bg-white py-3 px-6 font-semibold hover:bg-white/90">
              Book Now
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

Home.authGuard = false;
// Home.guestGuard = true
export default Home;
