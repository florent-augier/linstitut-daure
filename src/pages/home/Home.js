import "./Home.css";
import React, { useEffect } from "react";
import useWindowWidth from "./../../hooks/WindowWidth";

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

  return (
    <div id="homepage">
      <div className="wrapper-first-layout">
        <h1>
          L'institut d'<span className="beautiful-letter">Auré</span>
        </h1>
        <br />
        <SplitText
          copy="Spécialisé dans la beauté du regard"
          role="heading"
        ></SplitText>
      </div>
      <div className="grid-home">
        <div className="card-grid first">
          <div className="header-card-grid">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1646948278/L%27institut%20d%27Aur%C3%A9/275115826_357468106255254_1478927441923213647_n_zjs85p.jpg"
              alt="cil à cil"
            />
          </div>
          <div className="body-card-grid"></div>
          <div className="footer-card-grid"></div>
        </div>
        <div className="card-grid second">
          <div className="header-card-grid">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1646948278/L%27institut%20d%27Aur%C3%A9/275115826_357468106255254_1478927441923213647_n_zjs85p.jpg"
              alt="cil à cil"
            />
          </div>
          <div className="body-card-grid"></div>
          <div className="footer-card-grid"></div>
        </div>
        <div className="card-grid third">
          <div className="header-card-grid">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1646948278/L%27institut%20d%27Aur%C3%A9/275115826_357468106255254_1478927441923213647_n_zjs85p.jpg"
              alt="cil à cil"
            />
          </div>
          <div className="body-card-grid"></div>
          <div className="footer-card-grid"></div>
        </div>
        <div className="card-grid fourth">
          <div className="header-card-grid">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1646825243/L%27institut%20d%27Aur%C3%A9/logo_swz799.webp"
              alt="cil à cil"
            />
          </div>
          <div className="body-card-grid">
            <p>Beauté des cils</p>
          </div>
          <div className="footer-card-grid"></div>
        </div>
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
