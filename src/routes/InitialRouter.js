import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loading from "./../global/loading/Loading";

import App from "../App";
// const App = lazy(() => import("../App"));
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
  //   const notify = (alert) => toast(alert);

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <ToastContext.Provider value={{ notify }}> */}
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
      {/* </ToastContext.Provider> */}
    </>
  );
};

export default InitialRouter;
