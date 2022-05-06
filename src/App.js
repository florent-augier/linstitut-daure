import React, { useEffect, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./global/navbar/Navbar";
import Footer from "./global/footer/Footer";

// import ScrollDown from "./components/scrolldown/ScrollDown";
// import TagManager from "react-gtm-module";
// import MessengerCustomerChat from "react-messenger-customer-chat";

import Loading from "./global/loading/Loading";
// import Cursor from "./cursor/Cursor";
// import Footer from "./components/footer/Footer";
import ScrollTop from "./global/scrolltop/ScrollTop";

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

  let location = useLocation();
  const [myElement, setMyElement] = useState(null);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    async function elementSearch() {
      return new Promise(function (successCallback, failureCallback) {
        setTimeout(() => {
          const element = document.getElementById("invisible-element");
          if (element) {
            successCallback(element);
          } else {
            failureCallback("L'élément ciblé n'a pas été trouvé. Dommage!");
          }
        }, 500);
      });
    }
    let promise = elementSearch();

    promise.then(
      (result) => setMyElement(result),
      (error) => console.log(error)
    );

    async function imagesSearch() {
      return new Promise(function (successCallback, failureCallback) {
        setTimeout(() => {
          const images = document.querySelectorAll("img");
          if (images.length > 0) {
            successCallback(images);
          } else {
            failureCallback("Les images n'ont pas été trouvées");
          }
        }, 1000);
      });
    }
    let imagesPromise = imagesSearch();
    imagesPromise.then(
      (result) => setAllImages(result),
      (error) => console.log(error)
    );
  }, [location]);

  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
        }
      });
    });
    setTimeout(() => {
      if (allImages.length > 0) {
        allImages.forEach((v) => {
          imageObserver.observe(v);
        });
        return () => {
          allImages.forEach((v) => {
            imageObserver.unobserve(v);
          });
        };
      }
    }, 1000);
  }, [allImages, allImages.length, location]);

  useEffect(() => {
    const regex = /\/dermopigmentation\//;

    function scrollToInvisibleElement() {
      return new Promise(function (success, failure) {
        setTimeout(() => {
          if (location.pathname.match(regex)) {
            if (myElement) {
              myElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          } else {
            window.scrollTo(0, 0);
          }
        }, 200);
      });
    }

    let promise = scrollToInvisibleElement();

    promise.then(
      (result) => setMyElement(result),
      (error) => console.log(error)
    );
  }, [myElement, location]);

  function handleResizing() {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  }

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <ScrollTop />

      {/* <MessengerCustomerChat pageId="111253084700995" appId="261838472668128" />
      <Cursor /> */}
      <Outlet />
      {/* <ScrollDown />
      <Footer /> */}
      <Footer />
    </Suspense>
  );
}

export default App;
