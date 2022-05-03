import React, { useEffect, useRef } from "react";
import "./Micropigmentation.css";
import { Helmet } from "react-helmet";

import useWindowWidth from "../../hooks/WindowWidth";

export default function Eyebrow() {
  const width = useWindowWidth();
  const containerRef = useRef(null);

  const container = {
    imageUrl:
      "https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1650634078/L%27institut%20d%27Aur%C3%A9/microblading_wfldgk.webp",
    dataSrc:
      "https://res.cloudinary.com/flowww-dev/image/upload/v1650634078/L%27institut%20d%27Aur%C3%A9/microblading_wfldgk.webp",

    imageWidth: "1000px",
    imageHeight: "1000px",
    alt: "technique: Microblading",
    content: "Pour redonner vie aux cils.",
    technical: "Microblading",
    duration: "1 Heure",
    price: "140 euros",
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const containerShow = document.getElementsByClassName(
      "container-show-micropigmentation"
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

  return (
    <div className="page-container" id="micropigmentation">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Micropigmentation</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/micropigmentation"
        />
      </Helmet>
      <div id="wrapper-title">
        <h1>Micropigmentation</h1>
        <p>Donner de la couleur à votre visage</p>
      </div>
      <div className="container-show-micropigmentation" ref={containerRef}>
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
    </div>
  );
}
