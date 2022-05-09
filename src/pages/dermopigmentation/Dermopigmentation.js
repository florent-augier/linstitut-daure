import "./Dermopigmentation.css";
import React, { lazy } from "react";
import { Link, Outlet } from "react-router-dom";
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
  // const location = useLocation();

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
      <div id="invisible-element"></div>

      {/* <div id="container-nested-navigation" ref={sidebarRef}> */}
      <nav id="nested-navigation">
        <ul>
          {urls.map((url, i) => {
            return (
              <li key={i}>
                <Link to={url.toLowerCase()}>
                  {url.split("-").join(" ")}
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/flowww-dev/image/upload/q_10/v1650528959/L%27institut%20d%27Aur%C3%A9/icons8-link-64-2_vqjlt7.webp"
                    alt="logo d'un lien"
                    width="64px"
                    height="64px"
                    data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1650528959/L%27institut%20d%27Aur%C3%A9/icons8-link-64-2_vqjlt7.webp"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div id="nested-main">
        <Outlet />
      </div>
    </div>
    // </div>
  );
}
