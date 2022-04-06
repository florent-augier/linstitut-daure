import "./Home.css";
import React, { useEffect } from "react";
import useWindowWidth from "./../../hooks/WindowWidth";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const width = useWindowWidth();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const targeElement =
      width > 580
        ? document.querySelectorAll(".grid-home")
        : document.querySelectorAll(".card-grid");
    const toArray = Array.from(targeElement);

    const containerShow = document.getElementsByClassName("container-show");
    const containerShowArray = Array.from(containerShow);

    const callbackFunction = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        if (entry.target.classList[0] === "grid-home") {
          entry.target.childNodes.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("is-shown");
            }, 200 * i);
          });
        } else {
          entry.target.classList.add("is-shown");
        }
      }
    };

    const containerShowCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add("is-shown");
      }
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    const containerObserver = new IntersectionObserver(
      containerShowCallback,
      options
    );

    containerShowArray.forEach((image) => {
      containerObserver.observe(image);
    });

    toArray.forEach((element) => {
      observer.observe(element);
    });

    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  function SplitText({ copy, role }) {
    let copyArray = [...copy];
    return (
      <p aria-label={copy} role={role}>
        <span
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: "100%",
          }}
          id="spans-wrapper"
        >
          {copyArray.map(function (char, index) {
            let style = {
              position: "absolute",
              height: width >= 580 ? "90%" : width < 400 ? "75%" : "80%",
              opacity: "1",
              transform: `rotate(${
                width >= 1000
                  ? index * -3 + 50
                  : width >= 580
                  ? index * -2 + 35
                  : index === 0 && width <= 580
                  ? index * 1.5 + 18.5
                  : width <= 480
                  ? index * -1 + 17
                  : width < 400
                  ? index * -1 + 12
                  : index === 0 && width < 400
                  ? index * -1.2 + 13
                  : index * -1 + 12
              }deg)`,
              transformOrigin: "center top",
              display: "inline-flex",
              padding: "4px",
              animationName: "reveal",
              animationDelay: `${index * 0.03 + 3}s`,
              animationDuration: "2s",
            };

            if (char === " ") {
              return (
                <span aria-hidden="true" key={index} style={style}>
                  <b style={{ marginTop: "auto" }}>&nbsp;</b>
                </span>
              );
            } else {
              return (
                <span aria-hidden="true" key={index} style={style}>
                  <b style={{ marginTop: "auto" }}>{char}</b>
                </span>
              );
            }
          })}
        </span>
      </p>
    );
  }

  const dataCard = [
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431087/L%27institut%20d%27Aur%C3%A9/Extensions-de-cils_sk3zwu.webp",
      title: "EXTENSION DE CILS",
      body: "Créez des cils qui sublimeront votre regard",
      footerLink: "/cils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431588/L%27institut%20d%27Aur%C3%A9/Micropigmentation_jckwjc.webp",
      title: "MICROPIGMENTATION",
      body: "Dessinez votre sourcils afin de lui redonner un forme homogène",
      footerLink: "/micropigmentation",
    },

    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431187/L%27institut%20d%27Aur%C3%A9/Dermopigmentation_pny4sp.webp",
      title: "DERMOPIGMENTATION",
      body: "Modelez vos sourcils ou lèvres dans le but de redonner du volume",
      footerLink: "/dermopigmentation",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647442043/L%27institut%20d%27Aur%C3%A9/Soins-visage_hn4gvq.webp",
      title: "SOINS CORPORELS",
      body: "Dessinez votre sourcils afin de lui redonner ",
      footerLink: "/soins-corporels",
    },
  ];

  const containerShow = [
    {
      title: "Des prestations de qualité depuis plus d'un an",
      content:
        "Outre le fait d'avoir une prestation de qualité, Aurélie saura prendre le temps de vous accueillir dans une ambiance calme et détendue. Vous apprécierez la délicatesse et la minutie de son travail.",
      imgSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647443849/L%27institut%20d%27Aur%C3%A9/Presentation_zrwbms.webp",
      imgAlt: "technique d'extension de cil",
    },
    {
      title: "Un savoir faire unique",
      content:
        "Outre le fait d'avoir une prestation de qualité, Aurélie saura prendre le temps de vous accueillir dans une ambiance calme et détendue. Vous apprécierez la délicatesse et la minutie de son travail.",
      imgSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647443849/L%27institut%20d%27Aur%C3%A9/Presentation_zrwbms.webp",
      imgAlt: "technique d'extension de cil",
    },
    {
      title: "Des ",
      content:
        "Outre le fait d'avoir une prestation de qualité, Aurélie saura prendre le temps de vous accueillir dans une ambiance calme et détendue. Vous apprécierez la délicatesse et la minutie de son travail.",
      imgSrc:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647443849/L%27institut%20d%27Aur%C3%A9/Presentation_zrwbms.webp",
      imgAlt: "technique d'extension de cil",
    },
  ];

  return (
    <div id="homepage" className="page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <link rel="canonical" href="https://linstitut-daure.netlify.app" />
      </Helmet>
      <div className="wrapper-first-layout">
        <h1>
          L'institut d'<span className="beautiful-letter">Auré</span>
        </h1>
        <br />
        <SplitText
          copy="Spécialisé dans la beauté du visage"
          role="heading"
        ></SplitText>
      </div>
      <div className="grid-home">
        {dataCard.map((card, index) => {
          return (
            <div className={`card-grid ${index}`} key={index.toString()}>
              <div className="image-card-grid">
                <img src={card.imgUrl} alt={card.title} />
              </div>
              <div className="title-card-grid">{card.title}</div>
              <div className="body-card-grid">{card.body}</div>
              <hr />
              <div className="footer-card-grid">
                <NavLink to={card.footerLink}>En savoir plus ➝ </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      {containerShow.map((container, index) => {
        return (
          <div
            className="container-show"
            id={`presentation-${index}`}
            key={index}
          >
            <section>
              <h2>
                <img
                  src={
                    index % 2 === 0
                      ? "https://res.cloudinary.com/flowww-dev/image/upload/v1647522810/L%27institut%20d%27Aur%C3%A9/icons8-eyelash-50_vexkoc.png"
                      : "https://res.cloudinary.com/flowww-dev/image/upload/v1647527059/L%27institut%20d%27Aur%C3%A9/icons8-eyelash-50_1_hqfjm0.png"
                  }
                  alt="graphique de cil"
                  style={{ marginInline: "20px" }}
                />
                {container.title}
              </h2>
              <p>{container.content}</p>
            </section>
            <div className="container-img">
              <img
                src={container.imgSrc}
                alt="Présentation de l'institut d'Auré"
                width="6720px"
                height="4480px"
              />
            </div>
          </div>
        );
      })}
      <hr />
      <div id="contact-link">
        <div>
          <img
            src="https://res.cloudinary.com/flowww-dev/image/upload/v1647730702/L%27institut%20d%27Aur%C3%A9/icons8-eyebrow-64_qtvxv2.png"
            alt="logo d'un sourcil dessiné"
            height="64px"
            width="64px"
          />
        </div>
        <NavLink to="contact">⇲ Contacter l'institut d'Auré</NavLink>
      </div>
    </div>
  );
}
