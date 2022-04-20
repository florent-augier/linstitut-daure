import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import { useTransition, animated } from "react-spring";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loading from "./../global/loading/Loading";

const App = lazy(() => import("../App"));
const Home = lazy(() => import("./../pages/home/Home"));
const Lash = lazy(() => import("./../pages/lash/Lash"));
const Micropigmentation = lazy(() =>
  import("./../pages/micropigmentation/Micropigmentation")
);
const BodyCare = lazy(() => import("./../pages/body-care/BodyCare"));
const Dermopigmentation = lazy(() =>
  import("./../pages/dermopigmentation/Dermopigmentation")
);
const Journey = lazy(() => import("./../pages/journey/Journey"));
const Contact = lazy(() => import("../pages/contact/Contact"));

//pages/dermopigmentation/nested Dermmopigmentation
const Microshading = lazy(() =>
  import("../pages/dermopigmentation/nested/Microshading")
);
const Combo = lazy(() => import("../pages/dermopigmentation/nested/Combo"));
const EyeLiner = lazy(() =>
  import("../pages/dermopigmentation/nested/EyeLiner")
);
const LipsContour = lazy(() =>
  import("../pages/dermopigmentation/nested/LipsContour")
);
const LipsFull = lazy(() =>
  import("../pages/dermopigmentation/nested/LipsFull")
);
const LipsFilling = lazy(() =>
  import("../pages/dermopigmentation/nested/LipsFilling")
);

// export const ToastContext = createContext();

const InitialRouter = () => {
  let location = useLocation();
  const [isFound, setIsFound] = useState(false);
  const [myElement, setMyElement] = useState(null);
  // const myElementRef = useRef(null);

  useEffect(() => {
    console.log("location is changed");

    async function elementSearch() {
      return new Promise(function (successCallback, failureCallback) {
        console.log("fired promise");

        setTimeout(() => {
          const element = document.getElementById("invisible-element");
          if (element) {
            successCallback(element);
          } else {
            failureCallback("L'élément ciblé n'a pas été trouvé. Dommage!");
          }
        }, 400);
      });
    }
    let promise = elementSearch();

    promise.then(
      (result) => setMyElement(result),
      (error) => console.log(error)
    );
  }, [location]);

  useEffect(() => {
    const regex = /\/dermopigmentation\//;

    function scrollToInvisibleElement() {
      return new Promise(function (success, failure) {
        console.log("scroll function fired");

        setTimeout(() => {
          if (location.pathname.match(regex)) {
            if (myElement) {
              const offset = myElement.offsetTop;

              const resizedOffset = offset - 100;

              console.log(resizedOffset);

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
  // let history = useNavigate();
  // let location = useLocation();

  //   const transitions = useTransition(location, {
  //     from: { opacity: 0.2 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0.2 },
  //     config: { duration: 200 },
  //   });

  //   const notify = (alert) => toast(alert);

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <ToastContext.Provider value={{ notify }}> */}
      {/* <animated.div style={props}> */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="cils" element={<Lash />} />
            <Route path="micropigmentation" element={<Micropigmentation />} />
            <Route path="dermopigmentation" element={<Dermopigmentation />}>
              <Route index element={<Microshading />} />
              <Route path="microshading" element={<Microshading />} />
              <Route path="combo" element={<Combo />} />
              <Route path="eyeliner" element={<EyeLiner />} />
              <Route path="contour-des-levres" element={<LipsContour />} />
              <Route path="levres-complet" element={<LipsFull />} />
              <Route path="remplissage-des-levres" element={<LipsFilling />} />
            </Route>
            <Route path="soins-corporels" element={<BodyCare />} />
            <Route path="mon-parcours" element={<Journey />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
      {/* </animated.div> */}
      {/* </ToastContext.Provider> */}
    </>
  );
};

export default InitialRouter;
