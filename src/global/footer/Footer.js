import React from "react";
import "./Footer.css";

import CarouselWrapper from "./CarouselWrapper";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div id="footer-grid">
        <div id="first-column-footer" className="column-footer">
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
                <Link to="dermopigmentation">DERMOPIGMENTATION</Link>
              </li>
              <li>
                <Link to="soins-corporels">SOINS CORPORELS</Link>
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
        <div id="second-column-footer" className="column-footer">
          <section>
            <div className="title-column-footer">
              <h3>REMERCIEMENTS 👏</h3>
            </div>

            <CarouselWrapper />
          </section>
        </div>
        <div id="third-column-footer" className="column-footer">
          <div className="title-column-footer">
            <h3>RESEAUX SOCIAUX📱</h3>
          </div>
          <ul>
            <li>
              <a
                href="https://instagram.com/lescilsdaure13800?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://www.facebook.com/linstitutdaurelie"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/flowww-dev/image/upload/v1647864732/L%27institut%20d%27Aur%C3%A9/icons8-facebook-64_wnnucb.webp"
                  alt="logo de Facebook"
                  width="64px"
                  height="64px"
                />{" "}
                PAGE FACEBOOK DE L'INSTITUT D'AURE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
