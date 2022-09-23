/** This page serves as the main entry point for any page in the application. It's like a wrapper or layout that surrounds every other page. */
/** Can be used to add UI components that should be rendered on every page e.g. Navbar, Footer, etc. Also used to manage Auth state on the FE.*/
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/Context";
import { useUserData } from "../lib/hooks";
<<<<<<< Updated upstream
=======
import type { AppProps } from "next/app";
import { collectionGroup } from "firebase/firestore";
import { getFirestore, query, orderBy, limit, getDocs, postToJSON } from "../lib/firebase";


>>>>>>> Stashed changes

const MyApp = ({ Component, pageProps }) => {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
};

export default MyApp;
