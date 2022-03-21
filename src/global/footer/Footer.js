import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div id="footer-grid">
        <div id="first-column-footer">
          <div className="title-column-footer">
            <h3>NAVIGATION 🧭</h3>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">ACCUEIL</Link>
              </li>
              <li>
                <Link to="cils">EXTENSIONS DE CILS</Link>
              </li>
              <li>
                <Link to="micropigmentation">MICROPIGMENTATION</Link>
              </li>
              <li>
                <Link to="dermopigmentation">DERMOPIGMENTAION</Link>
              </li>
              <li>
                <Link to="soins-corporel">SOINS CORPOREL</Link>
              </li>
              <li>
                <Link to="contact">CONTACT</Link>
              </li>
              <li>
                <Link to="mon-parcours">MON PARCOURS</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="second-column-footer">
          <section>
            <div className="title-column-footer">
              <h3>REMERCIEMENTS 👏</h3>
            </div>
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1647873448/L%27institut%20d%27Aur%C3%A9/image_uvjpsj_kfzbzs.webp"
                  alt="Regard d'une femme"
                  width="470px"
                  height="316px"
                />
                <p>
                  Image d'accueil{" "}
                  <a
                    target="_blank"
                    href="https://unsplash.com/@luxdamore"
                    rel="noreferrer"
                  >
                    Luca Iaconelli
                  </a>
                </p>
              </li>

              <li>
                <p>
                  Merci à{" "}
                  <a target="_blank" href="https://icons8.com" rel="noreferrer">
                    Icons8
                  </a>{" "}
                  pour leurs icônes
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div id="third-column-footer">
          <div className="title-column-footer">
            <h3>RESEAUX SOCIAUX📱</h3>
          </div>
          <ul>
            <li>
              <a href="https://instagram.com/lescilsdaure13800?utm_medium=copy_link">
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1647864006/L%27institut%20d%27Aur%C3%A9/icons8-instagram-old-64_offg4g.webp"
                  alt="logo d'Instagram"
                  width="64px"
                  height="64px"
                />{" "}
                PAGE INSTAGRAM DE L'INSTITUT D'AURE
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/linstitutdaurelie">
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1647864732/L%27institut%20d%27Aur%C3%A9/icons8-facebook-64_wnnucb.webp"
                  alt="logo de Facebook"
                  width="64px"
                  height="64px"
                />{" "}
                PAGE FACEBOOK DE L'INSTITUT D'AURE
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/messages/t/104278418453210">
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1647865031/L%27institut%20d%27Aur%C3%A9/icons8-facebook-messenger-64_ysstrs.webp"
                  alt="logo de Messenger"
                  width="64px"
                  height="64px"
                />{" "}
                DISCUTER AVEC L'INSTITUT D'AURE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}