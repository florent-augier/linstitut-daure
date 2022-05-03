import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

import Strong from "../../global/html/Strong";

// import { Helmet } from "react-helmet";

// import Icon from "@mdi/react";
// import { mdiContentCopy, mdiPhone } from "@mdi/js";

export default function Contact() {
  const emailButton = useRef(null);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      emailButton.current.classList.add("clicked");
      setTimeout(() => {
        emailButton.current.classList.remove("clicked");
        setIsClicked(false);
      }, 2000);
    }
  }, [isClicked]);

  const handleClickOnEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("lescilsdaurelie@gmail.com");
    setIsClicked(true);
  };

  return (
    <div className="page-container" id="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link
          rel="canonical"
          href="https://linstitut-daure.netlify.app/contact"
        />
      </Helmet>
      <div id="wrapper-title">
        <h1>Contact</h1>
        <p>Prenez rendez-vous pour vos prestations</p>
      </div>

      <section className="container-contact">
        <div className="header-container-contact">
          <h2>Me contacter</h2>
        </div>
        <p>Vous pouvez me joindre par téléphone ou par mail.</p>
        <div className="contact-items-wrapper">
          <div className="contact-item">
            <p>
              Email:{" "}
              <strong className="content-contact-item">
                lescilsdaurelie@gmail.com
              </strong>
              <span className="container-icon">
                <button
                  ref={emailButton}
                  className="button-item"
                  onClick={(e) => handleClickOnEmail(e)}
                  type="button"
                  aria-label="copy email"
                >
                  <img
                    src="https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1648206506/L%27institut%20d%27Aur%C3%A9/icons8-at-sign-50_yayf8q.webp"
                    alt="logo de téléphone"
                    width="50px"
                    height="50px"
                    data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1648206506/L%27institut%20d%27Aur%C3%A9/icons8-at-sign-50_yayf8q.webp"
                  />
                </button>
              </span>
            </p>
          </div>
          <div className="contact-item">
            <p>
              Téléphone:{" "}
              <strong className="content-contact-item">06 71 44 57 75</strong>
              <span className="container-icon">
                <button
                  className="button-item"
                  type="button"
                  aria-label="phone call +33671445775"
                >
                  <a href="tel:+33671445775">
                    <img
                      src="https://res.cloudinary.com/flowww-dev/image/upload/q_20/v1648206425/L%27institut%20d%27Aur%C3%A9/icons8-phone-50_figont.webp"
                      alt="logo téléphone"
                      width="50px"
                      height="50px"
                      data-src="https://res.cloudinary.com/flowww-dev/image/upload/v1648206425/L%27institut%20d%27Aur%C3%A9/icons8-phone-50_figont.webp"
                    />
                  </a>
                </button>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-contact">
        <div className="header-container-contact">
          <h2>Me trouver</h2>
        </div>
        <p>
          Toutes visites quelles qu'elles soient doivent faire l'objet d'un{" "}
          <Strong text=" rendez-vous" fontSize="28px" color="var(--gold)" />{" "}
          préalablement défini.
        </p>

        <div id="container-map">
          <div id="google-map">
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11574.265351542594!2d4.9974892!3d43.5113815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b13f90cc9462ec2!2sLes%20Cils%20d&#39;Aur%C3%A9!5e0!3m2!1sfr!2sfr!4v1648556615207!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
