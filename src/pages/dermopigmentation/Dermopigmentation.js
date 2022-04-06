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
  // const [scrollPosition, setScrollPosition] = useState(0);

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
          <li>
            <Link to="microshading">Microshading</Link>
          </li>
          <li>
            <Link to="combo">Combo Microshading / Microblading</Link>
          </li>
          <li>
            <Link to="eyeliner">Eyeliner</Link>
          </li>
          <li>
            <Link to="contour-des-levres">Contour des lèvres</Link>
          </li>
          <li>
            <Link to="remplissage-des-levres">Remplissage des lèvres</Link>
          </li>
          <li>
            <Link to="levres-complet">Lèvres complet</Link>
          </li>
        </ul>
      </nav>

      <div id="nested-main">
        <Outlet />
      </div>
    </div>
    // </div>
  );
}
