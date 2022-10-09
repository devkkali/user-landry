// ** React Imports
import { useEffect } from "react";

// ** Next Imports
import { useRouter } from "next/router";

// ** Spinner Import
// import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { useAuth } from "src/hooks/useAuth";

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role) => {
  if (role === "client") return "/acl";
  else return "/dashboards/crm";
};

const Home = () => {
  console.log("hihi");
  // ** Hooks
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role);

      // Redirect user to Home URL
      router.replace(homeRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Loading...</h1>;
};

export default Home;
