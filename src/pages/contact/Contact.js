import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
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
      <div id="wrapper-title">
        <h1>Contact</h1>
        <p>Prenez rendez-vous pour vos prestations</p>
      </div>

      {/* begin */}

      <div className="contact-first-screen">
        <div className="body-contact-first-screen">
          <div className="header-contact-first-screen">
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
                      src="https://res.cloudinary.com/flowww-dev/image/upload/v1648206506/L%27institut%20d%27Aur%C3%A9/icons8-at-sign-50_yayf8q.webp"
                      alt="logo de téléphone"
                      width="50px"
                      height="50px"
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
                        src="https://res.cloudinary.com/flowww-dev/image/upload/v1648206425/L%27institut%20d%27Aur%C3%A9/icons8-phone-50_figont.webp"
                        alt="logo téléphone"
                        width="50px"
                        height="50px"
                      />
                    </a>
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
}
