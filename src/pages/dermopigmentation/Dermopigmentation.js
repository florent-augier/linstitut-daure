import "./Dermopigmentation.css";
import React, {
  lazy,
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { items } from "./items";
import styled from "styled-components";
import { a } from "react-spring";
import { Helmet } from "react-helmet";
const Slider = lazy(() => import("./Slider"));

const Content = styled.div`
  width: 100%;
  height: 100%;
  marginblock: 100px;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

export default function Dermopigmentation() {
  let location = useLocation();
  const navigate = useNavigate();

  const navigationContainerRef = useRef(null);
  const [positionY, setPositionY] = useState(0);

  function getOffset() {
    const navigationContainer = navigationContainerRef.current;
    const rect = navigationContainer.getBoundingClientRect();

    return setPositionY(rect.top + window.scrollY);
  }

  useEffect(() => {
    console.log("hello from : ", location);
  }, [location]);

  const urls = [
    "Microshading",
    "Combo",
    "Eyeliner",
    "Contour-des-levres",
    "Remplissage-des-levres",
    "Levres-complet",
  ];

  return (
    <div className="page-container" id="dermopigmentation">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dermopigmentation</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/dermopigmentation"
        />
      </Helmet>
      <div id="wrapper-title" className="wrapper-title">
        <h1>Dermopigmentation</h1>
        <p>Redonner de la couleur à votre peau</p>
      </div>
      <Slider items={items}>
        {({ css }, i) => (
          <Content>
            <Image style={{ backgroundImage: css }} />
          </Content>
        )}
      </Slider>

      {/* <div id="container-nested-navigation" ref={sidebarRef}> */}
      <nav id="nested-navigation">
        <ul>
          {urls.map((url, i) => {
            return (
              <li key={i}>
                <Link to={url.toLowerCase()}>{url.split("-").join(" ")}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div id="nested-main" ref={navigationContainerRef}>
        <Outlet />
      </div>
    </div>
    // </div>
  );
}
