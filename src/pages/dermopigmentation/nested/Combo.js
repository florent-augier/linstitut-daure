import React, { useEffect, useRef } from "react";
import "./CommonNested.css";
import { Link } from "react-router-dom";
import Strong from "../../../global/html/Strong";
import useWindowWidth from "../../../hooks/WindowWidth";

export default function Combo() {
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
      "https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1650634078/L%27institut%20d%27Aur%C3%A9/microblading_wfldgk.webp",
    imageWidth: "1000px",
    imageHeight: "1000px",
    alt: "technique: Combo microshading/microblading",
    content: "Pour avoir des sourcils parfaits.",
    technical: "Combo",
    duration: "2 Heures 30 Minutes",
    price: "170 euros",
  };
  return (
    <div id="combo" className="nested-container">
      <div id="nested-wrapper-header">
        <h2>Combo</h2>
      </div>
      <div className="nested-wrapper-body">
        <div className="pertinent-question">
          <h3>La technique du combo ? </h3>
        </div>
        <p>
          Le combo est une technique qui combine (comme son nom l'indique), deux
          techniques de travail de sourcils qui permettent de redonner de
          l'intensité au sourcil. On vient retracer les poils du sourcil pour
          redonner un effet réel (technique de{" "}
          <Link to="/micropigmentation">
            <Strong text="Microblading" color="var(--gold)" />
          </Link>
          ) ainsi que de créer un effet d'ombrage pour combler des sourcils
          clairsemés (technique de{" "}
          <Link to="/dermopigmentation/microshading">
            <Strong text="Microshading" color="var(--gold)">
              microblading
            </Strong>
          </Link>
          ).
        </p>

        <p>
          Le fait de combiner ces deux techniques permet de combler les sourcils
          pour qu'il n'y ait aucun trou, c'est-à-dire qu'aucune zone ne sera
          plus claire qu'une autre. Les faux sourcils aura un meilleur rendu et
          une meilleure tenue lorsque l'on associe le microblading et le
          microshading.
        </p>
        <div className="container-show-common" ref={containerRef}>
          <img
            loading="lazy"
            src={container.imageUrl}
            alt={container.alt}
            width={container.imageWidth}
            height={container.imageHeight}
            data-src={container.imageUrl}
          />

          <div className="text-container-show">
            <ul>
              <li id="technique">
                <img
                  loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
      </div>
    </div>
  );
}
