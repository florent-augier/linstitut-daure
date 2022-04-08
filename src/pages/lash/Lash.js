/* eslint-disable no-undef */
import React, { useEffect } from "react";
import "./Lash.css";
import SectionWipes from "./SectionWipes";
import useWindowWidth from "./../../hooks/WindowWidth";
import Strong from "./../../global/html/Strong";
import { Helmet } from "react-helmet";

export default function Lash() {
  const width = useWindowWidth();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.45,
    };

    const containerShow = document.getElementsByClassName(
      "container-show-lash"
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

    containerShowArray.forEach((image) => {
      containerObserver.observe(image);
    });
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
      alt: "technique: Méga volume",
      content: "Vos yeux sauront attirer l'attention.",
      technical: "Méga Volume",
      duration: "2 heures et 30 minutes",
      price: "72 euros",
    },
  ];

  const descriptionContainers = [
    {
      title: "Cil à Cil",
      description:
        "Une technique d'extension soigneusement choisie (longueur, épaisseur, courbure) pour venir rallonger le cil naturel. Effet mascarat garanti.",
    },
    {
      title: "Pose Mixte",
      description:
        "Un mélange de cil à cil et de bouquets (du 2d au 4d) délicatement posés sur les cils naturels afin d'apporter une légère épaisseur, pour un regard plus soutenu. Idéal pour les pseronnes hésitant entre le cil à cil et le volume russe.",
    },
    {
      title: "Volume Russe",
      description:
        "Oubliez l'idée des faux cils super longs et épais, le volume russe est minutieusement travaillé pour les personnes ayant les cils naturels fins, courts et parsemés. Les bouquets allant du 5d au 10d seront mettre en valeur vos yeux afin de faire sortir la biche qui est en vous.",
    },
    {
      title: "Méga Volume",
      description:
        "Pour celles qui adorent ne pas passer inaperçu. Les bouquets allant du 10d au 16d seront méticuleusement travaillés afin de combiner longueur et épaisseur. Effet glamour assuré",
    },
  ];

  return (
    <div id="lash" className="page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Extensions de cils</title>
        <link rel="canonical" href="https://linstitut-daure.netlify.app/cils" />
      </Helmet>
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
            <div key={index}>
              <section className="description-section">
                <h2>{container.title}</h2>
                <p>{container.description}</p>
              </section>
              {index !== descriptionContainers.length - 1 && (
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1648118758/L%27institut%20d%27Aur%C3%A9/floral-g4ddcf5316_1280_o7cyy6.png"
                  alt="diviseur de contenu"
                  width="1280px"
                  height="640px"
                  className="divider"
                />
              )}
            </div>
          );
        })}
      </div>
      <div id="comparison">
        <p>
          Un cil bien collé est un cil qu iaura une meilleure tenue du faux cil
          sur le vrai cil et permettra d'avoir une extension qui durera plus
          longtemps.
        </p>
        <figure>
          <img
            src="https://res.cloudinary.com/flowww-dev/image/upload/v1649341995/L%27institut%20d%27Aur%C3%A9/difference-cils_vdaolr.webp"
            alt="différence entre des cils mal collés et un cil bien collé"
            width="1076px"
            height="934px"
          />
          <figcaption>
            Différence entre des cils mal collés et un cil bien collé
          </figcaption>
        </figure>
      </div>

      <div id="recommandations">
        <h3>Recommandations</h3>
        <div id="grid-recommandations">
          <div className="item-card-recommandations">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1648211938/L%27institut%20d%27Aur%C3%A9/photos-by-lanty-T-VS-7y_fAY-unsplash_bgjzy7.webp"
              alt="recommandation numéro une"
              width="5472px"
              height="3648px"
            />
            <p>
              Pour toutes les prestations d'extensions de cils, il est
              recommandé de{" "}
              <Strong
                color="var(--gold)"
                fontSize="24px"
                text="ne pas mouiller les cils pendant, au minimum, 48 heures."
              />{" "}
              La colle posée sur vos cils requiert ce temps là pour être
              totalement sec et par conséquent de tenir le faux cil.
            </p>
          </div>
          <div className="item-card-recommandations">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1648212468/L%27institut%20d%27Aur%C3%A9/david-libeert-zcZ7rIUJwT0-unsplash_mpze4w.webp"
              alt="recommandation numéro deux"
              width="3073px"
              height="4610px"
            />
            <p>
              Nettoyez quotidiennement vos cils avec le DÉMAQUILLANT, en
              utilisant le bout des doigts, matin et soir. Nettoyer vos cils en
              profondeur 2 à 3 fois par semaine avec le SHAMPOOING POUR CILS. À
              noter: La shampooing permet de retirer les résidus de maquillage,
              le sébum, le sel de l’eau de mer ou des larmes. C’est aussi un
              excellent choix pour celles qui ont tendance à souffrir
              d’allergies saisonnières ou qui ont tendance à porter du
              maquillage sur et autour des yeux. Il est aussi recommandé pour
              une peau mixte à grasse.
            </p>
          </div>
          <div className="item-card-recommandations">
            <img
              src="https://res.cloudinary.com/flowww-dev/image/upload/v1648213099/L%27institut%20d%27Aur%C3%A9/justus-menke-bWDXFaBTnL8-unsplash_ay83bl.webp"
              alt="recommandation numéro trois"
              width="4000px"
              height="6000px"
            />
            <p>
              Nettoyez quotidiennement vos cils avec le DÉMAQUILLANT, en
              utilisant le bout des doigts, matin et soir. Nettoyer vos cils en
              profondeur 2 à 3 fois par semaine avec le SHAMPOOING POUR CILS. À
              noter: La shampooing permet de retirer les résidus de maquillage,
              le sébum, le sel de l’eau de mer ou des larmes. C’est aussi un
              excellent choix pour celles qui ont tendance à souffrir
              d’allergies saisonnières ou qui ont tendance à porter du
              maquillage sur et autour des yeux. Il est aussi recommandé pour
              une peau mixte à grasse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
