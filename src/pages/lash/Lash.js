/* eslint-disable no-undef */
import React, { useEffect } from "react";
import "./Lash.css";
import SectionWipes from "./SectionWipes";
import useWindowWidth from "./../../hooks/WindowWidth";

export default function Lash() {
  const width = useWindowWidth();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    // const targeElement =
    //   width > 580
    //     ? document.querySelectorAll(".grid-home")
    //     : document.querySelectorAll(".card-grid");
    // const toArray = Array.from(targeElement);

    const containerShow = document.getElementsByClassName(
      "container-show-lash"
    );
    const containerShowArray = Array.from(containerShow);

    // const callbackFunction = (entries) => {
    //   const [entry] = entries;

    //   if (entry.isIntersecting) {
    //     if (entry.target.classList[0] === "grid-home") {
    //       entry.target.childNodes.forEach((child, i) => {
    //         setTimeout(() => {
    //           child.classList.add("is-shown");
    //         }, 200 * i);
    //       });
    //     } else {
    //       entry.target.classList.add("is-shown");
    //     }
    //   }
    // };

    const containerShowCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add("is-shown");
      }
    };

    // const observer = new IntersectionObserver(callbackFunction, options);

    const containerObserver = new IntersectionObserver(
      containerShowCallback,
      options
    );

    containerShowArray.forEach((image) => {
      containerObserver.observe(image);
    });

    // toArray.forEach((element) => {
    //   observer.observe(element);
    // });

    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const containerShow = [
    {
      imageUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1648047114/L%27institut%20d%27Aur%C3%A9/cil-a-cil_xqqol6.webp",
      imageWidth: "960px",
      imageHeight: "960px",
      alt: "technique: cil à cil",
      content:
        "Une extension de cil délicatement posée pour venir rallonger le cil naturel: Effet mascara garanti !",
      technical: "Cil à cil",
      duration: "1 heure et 30 minutes",
      price: "42 euros",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1647428756/L%27institut%20d%27Aur%C3%A9/Extension-de-cils_l0divs.webp",
      imageWidth: "960px",
      imageHeight: "960px",
      alt: "technique: pose mixte",
      content:
        "Le mélange parfait pour agrandir votre regard sans trop le dénaturer.",
      technical: "Pose mixte",
      duration: "1 heure et 30 minutes",
      price: "52 euros",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1648025467/L%27institut%20d%27Aur%C3%A9/woman-s-eye-with-black-eye-makeup-macro-style-image-long-eyelashes-crop_lctnbd.webp",
      imageWidth: "8258px",
      imageHeight: "6192px",
      alt: "technique: volume russe",
      content: "La technique idéale pour donner de l'intensité à votre regard.",
      technical: "Volume Russe",
      duration: "2 heures",
      price: "62 euros",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/flowww-dev/image/upload/v1648025210/L%27institut%20d%27Aur%C3%A9/beautiful-girl-with-colorful-makeup-crop_g33yhn.webp",
      imageWidth: "5472px",
      imageHeight: "3648px",
      alt: "technique: volume russe",
      content: "Vos yeux sauront attirer l'attention.",
      technical: "Méga Volume Russe",
      duration: "2 heures et 30 minutes",
      price: "72 euros",
    },
  ];

  const descriptionContainers = [
    {
      title: "Cil à Cil",
      description: "Ola",
    },
  ];

  return (
    <div id="lash" className="page-container">
      <div id="wrapper-title">
        <h1>Extensions de cils</h1>
        <p>
          Définissez votre regard grâce à la technique d'extensions de cils.
        </p>
      </div>
      <SectionWipes />
      {containerShow.map((container, index) => {
        return (
          <div className="container-show-lash" key={index}>
            <img
              src={container.imageUrl}
              alt={container.alt}
              width={container.imageWidth}
              height={container.imageHeight}
            />

            <div className="text-container-show">
              <ul>
                <li id="technique">
                  <img
                    src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962261/L%27institut%20d%27Aur%C3%A9/icons8-eyelash-50-2_x56ocl.webp"
                    alt="icone de sourcil"
                  />{" "}
                  <span>
                    Technique: <strong>{container.technical}</strong>
                  </span>
                </li>
                <li id="duration">
                  <img
                    src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962313/L%27institut%20d%27Aur%C3%A9/icons8-stopwatch-64_ammc5q.webp"
                    alt="icone d'horloge"
                  />{" "}
                  <span>
                    Durée initiale: <strong>{container.duration}</strong>
                  </span>
                </li>
                <li id="cost">
                  <img
                    src="https://res.cloudinary.com/flowww-dev/image/upload/v1647962290/L%27institut%20d%27Aur%C3%A9/icons8-euro-64_je8zje.webp"
                    alt="icone d'horloge"
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
        );
      })}

      <div id="description-container">
        {descriptionContainers.map((container, index) => {
          return (
            <section className="descritption-section">
              <h2>Hello world</h2>
              <p>Hey hey coucou les gens</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
