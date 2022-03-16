import "./Home.css";
import React, { useEffect } from "react";
import useWindowWidth from "./../../hooks/WindowWidth";
import { NavLink } from "react-router-dom";

export default function Home() {
  const width = useWindowWidth();
  useEffect(() => {
    console.log(width);
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
              animationDelay: `${index * 0.05 + 3}s`,
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
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431588/L%27institut%20d%27Aur%C3%A9/Micropigmentation_jckwjc.webp",
      title: "MICROPIGMENTATION",
      body: "Dessinez votre sourcils afin de lui redonner un forme homogène",
      footerLink: "/sourcils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431087/L%27institut%20d%27Aur%C3%A9/Extensions-de-cils_sk3zwu.webp",
      title: "EXTENSION DE CILS",
      body: "Créez des cils qui sublimeront votre regard",
      footerLink: "/cils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647431187/L%27institut%20d%27Aur%C3%A9/Dermopigmentation_pny4sp.webp",
      title: "DERMOPIGMENTATION",
      body: "Modelez vos sourcils ou lèvres dans le but de redonner du volume",
      footerLink: "/sourcils",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647442043/L%27institut%20d%27Aur%C3%A9/Soins-visage_hn4gvq.webp",
      title: "SOIN DU VISAGE",
      body: "Dessinez votre sourcils afin de lui redonner ",
      footerLink: "/soin-du-visage",
    },
  ];

  return (
    <div id="homepage">
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
            <div className="card-grid first" key={index.toString()}>
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
      <div id="presentation">
        <section>
          <h2>Des prestations de qualité depuis plus d'un an</h2>
          <p>
            Outre le fait d'avoir une prestation de qualité, Aurélie saura
            prendre le temps de vous accueillir dans une ambiance calme et
            détendue. Vous apprécier
          </p>
        </section>
        <img src="" alt="Présentation de l'institut d'Auré" />
      </div>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>{" "}
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>{" "}
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>{" "}
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>{" "}
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
    </div>
  );
}
