import React, { useEffect, Suspense } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./global/navbar/Navbar";

// import ScrollDown from "./components/scrolldown/ScrollDown";
// import TagManager from "react-gtm-module";
// import MessengerCustomerChat from "react-messenger-customer-chat";

import Loading from "./global/loading/Loading";
// import Cursor from "./cursor/Cursor";
// import Footer from "./components/footer/Footer";
// import ScrollTop from "./components/scolltop/ScrollTop";

function App() {
  useEffect(() => {
    // TagManager.initialize({ gtmId: "GTM-5DQ87FJ" });

    window.addEventListener("resize", handleResizing);
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
    return () => {
      window.removeEventListener("resize", handleResizing);
    };
  }, []);

  function handleResizing() {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  }

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      {/* <ScrollTop />
      <MessengerCustomerChat pageId="111253084700995" appId="261838472668128" />
      <Cursor /> */}
      <Outlet />
      {/* <ScrollDown />
      <Footer /> */}
    </Suspense>
  );
}

export default App;
