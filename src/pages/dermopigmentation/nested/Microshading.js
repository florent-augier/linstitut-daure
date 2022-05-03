import React, { useEffect, useRef } from "react";
import "./CommonNested.css";
import { Link } from "react-router-dom";
import Strong from "../../../global/html/Strong";
import useWindowWidth from "../../../hooks/WindowWidth";

export default function Microshading() {
  const width = useWindowWidth();
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const containerShow = document.getElementsByClassName(
      "container-show-common"
    );

    const containerShowArray = Array.from(containerShow);

    const containerShowCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add("is-shown");
      }
    };

    const containerObserver = new IntersectionObserver(
      containerShowCallback,
      options
    );

    containerShowArray.forEach((container) => {
      containerObserver.observe(container);
    });

    return () => {
      containerShowArray.forEach((container) => {
        containerObserver.unobserve(container);
      });
    };
  }, [width]);

  const container = {
    imageUrl:
      "https://res.cloudinary.com/flowww-dev/image/upload/q_20/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1649683469/L%27institut%20d%27Aur%C3%A9/cthe-lose-up-face-pretty-girl-with-beautiful-big-blue-eyes_wanjqc.webp",
    dataSrc:
      "https://res.cloudinary.com/flowww-dev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1649683469/L%27institut%20d%27Aur%C3%A9/cthe-lose-up-face-pretty-girl-with-beautiful-big-blue-eyes_wanjqc.webp",

    imageWidth: "1000px",
    imageHeight: "1000px",
    alt: "technique: Microshading",
    content: "Pour avoir un effet remplissage crayon.",
    technical: "Microshading",
    duration: "1 Heure",
    price: "140 euros",
  };

  return (
    <div id="microshading" className="nested-container">
      <div id="nested-wrapper-header">
        <h2>Microshading</h2>
      </div>
      <div className="nested-wrapper-body">
        <div className="pertinent-question">
          <h3>Le microshading, c'est quoi ?</h3>
        </div>
        <p>
          C’est une technique qui permet de redessiner la ligne naturelle du
          sourcil et de combler les manques tout en apportant de l’intensité au
          sourcil.
        </p>
        <p>
          A l'aide d'une machine (
          <Strong text="le dermographe*" />
          ), la technique du{" "}
          <Strong
            text="Microshading"
            color="var(--gold)"
            uppercase={true}
          />{" "}
          sert à produire un effet d’ombrage semblable à celui du crayon à
          sourcils. Les pigments sont insérés sous forme de minuscules points
          aux contours fondus.
        </p>
        <details id="dermographe">
          <summary>Qu'est ce qu'un dermographe ?</summary>Pour exercer son
          métier, l’esthéticienne ou la technicienne utilise un appareil qui
          porte le nom de « dermographe ». Elle se servira donc de cet outil
          pour réaliser votre maquillage permanent. Il existe deux types de
          dermographes : le dermographe électrique et le dermographe manuel. Le
          premier est plus facile à utiliser, tandis que le dermographe manuel
          requiert plus d’expérience. Le choix du dermographe est très important
          pour l’esthéticienne, car cela peut avoir un impact plus ou moins
          important sur les résultats de son travail et sur sa manière de faire.
        </details>

        <p>
          Le but est de remplir le sourcil avec un effet d'ombrage ("shade"
          signifiant "ombre" en français) afin d'harmoniser le sourcil.
        </p>
      </div>

      <div className="container-show-common" ref={containerRef}>
        <img
          src={container.imageUrl}
          alt={container.alt}
          width={container.imageWidth}
          height={container.imageHeight}
          data-src={container.dataSrc}
        />

        <div className="text-container-show">
          <ul>
            <li id="technique">
              <img
                src="https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1647962261/L%27institut%20d%27Aur%C3%A9/icons8-eyelash-50-2_x56ocl.webp"
                alt="icone de sourcil"
                data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962261/L%27institut%20d%27Aur%C3%A9/icons8-eyelash-50-2_x56ocl.webp"
              />{" "}
              <span>
                Technique: <strong>{container.technical}</strong>
              </span>
            </li>
            <li id="duration">
              <img
                src="https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1647962313/L%27institut%20d%27Aur%C3%A9/icons8-stopwatch-64_ammc5q.webp"
                alt="icone d'horloge"
                data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962313/L%27institut%20d%27Aur%C3%A9/icons8-stopwatch-64_ammc5q.webp"
              />{" "}
              <span>
                Durée initiale: <strong>{container.duration}</strong>
              </span>
            </li>
            <li id="cost">
              <img
                src="https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1647962290/L%27institut%20d%27Aur%C3%A9/icons8-euro-64_je8zje.webp"
                alt="icone d'horloge"
                data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962290/L%27institut%20d%27Aur%C3%A9/icons8-euro-64_je8zje.webp"
              />
              <span>
                Prix de la prestation initiale:{" "}
                <strong>{container.price}</strong>
              </span>
            </li>
          </ul>
          <p>{container.content}</p>
        </div>
      </div>
      <div className="pertinent-question">
        <h3>Peut-il y avoir des effets secondaires ?</h3>
      </div>
      <div className="pertinent-answer">
        <div className="custom-border"></div>
        <p>
          La technique du microshading est sans danger. Cependant, la peau peut
          être irritée après la séance et peut alors présenter des
          démangeaisons, un gonflement et/ou des rougeurs. Généralement, ces
          symptômes disparaissent très vite après la prestation.
        </p>
      </div>
      <div className="pertinent-question">
        <h3>Quelles sont les alternatives au microshading ?</h3>
      </div>
      <div className="pertinent-answer">
        <div className="custom-border"></div>
        <p>
          Si vous aimez l’effet ombré ou si vous avez la peau grasse, le
          microshading est fait pour vous. Mais avant de vous lancer dans le
          maquillage semi-permanent, vous pouvez tester l’effet ombré et poudré
          à l’aide du maquillage grâce à un crayon (Crayon à sourcils) ou une
          poudre. Si votre cœur balance entre le microshading et le{" "}
          <Link to="/micropigmentation" className="nested-link">
            <Strong text="microblading" textDecoration="none" />
          </Link>
          , les deux techniques peuvent également être combinées pour un look
          sur mesure.
        </p>
      </div>
    </div>
  );
}
