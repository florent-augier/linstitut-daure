import "./Navbar.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);
  const headerRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    if (scrollPosition > 1) {
      headerRef.current.classList.add("border-show");
    } else {
      headerRef.current.classList.remove("border-show");
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeRef = useRef(null);
  const lashRef = useRef(null);
  const eyebrowRef = useRef(null);
  const facialCareRef = useRef(null);
  const sunRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = [
    homeRef,
    lashRef,
    eyebrowRef,
    facialCareRef,
    sunRef,
    journeyRef,
    contactRef,
  ];

  const toggleHamburgerButton = () => {
    setIsOpen(!isOpen);
    navbarRef.current.classList.toggle("active");
    headerRef.current.classList.toggle("active");
    setOverflow();
  };

  const setOverflow = useCallback(() => {
    let myHtml = document.firstElementChild;

    if (navbarRef.current.className === "active") {
      myHtml.classList.add("no-scroll");
    } else {
      myHtml.classList.remove("no-scroll");
    }
  }, []);

  useEffect(() => {
    const checkLocation = () => {
      allRefs.map((refer) => refer.current.classList.add("active-li"));
    };
    checkLocation();
  });

  const handleClickOnLinks = (ref) => {
    let myHtml = document.firstElementChild;
    navbarRef.current.classList.remove("active");
    headerRef.current.classList.remove("active");
    if (isOpen) {
      setIsOpen(!isOpen);
    }

    allRefs.map(
      (refer) => ref !== refer && refer.current.classList.remove("active-li")
    );
    ref.current.classList.add("active-li");
    if (myHtml.className === "no-scroll") {
      myHtml.classList.remove("no-scroll");
    }
  };

  return (
    <header ref={headerRef}>
      {/* <div id="navbar-logo">
        <img
          src="https://res.cloudinary.com/flowww-dev/image/upload/v1646825243/L%27institut%20d%27Aur%C3%A9/logo_swz799.webp"
          alt="logo de l'institut d'Auré"
          width="1070px"
          height="1338px"
        />
      </div> */}
      <nav ref={navbarRef} role="navigation">
        <ul>
          <li id="accueil" className="navbar-item" ref={homeRef}>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => handleClickOnLinks(homeRef)}
            >
              <span>Accueil</span>
            </NavLink>
          </li>
          <li id="lash" className="navbar-item" ref={lashRef}>
            <NavLink
              to="/cils"
              className="navbar-link"
              onClick={() => handleClickOnLinks(lashRef)}
            >
              <span>Cils</span>
            </NavLink>
          </li>
          <li id="eyebrow" className="navbar-item" ref={eyebrowRef}>
            <NavLink
              to="/sourcils"
              className="navbar-link"
              onClick={() => handleClickOnLinks(eyebrowRef)}
            >
              <span>Sourcils</span>
            </NavLink>
          </li>
          <li id="facial-care" className="navbar-item" ref={facialCareRef}>
            <NavLink
              to="/soin-du-visage"
              className="navbar-link"
              onClick={() => handleClickOnLinks(facialCareRef)}
            >
              <span>Soin du visage</span>
            </NavLink>
          </li>
          <li id="sun" className="navbar-item" ref={sunRef}>
            <NavLink
              to="/sun"
              className="navbar-link"
              onClick={() => handleClickOnLinks(sunRef)}
            >
              <span>Sun</span>
            </NavLink>
          </li>
          <li id="contact" className="navbar-item" ref={contactRef}>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => handleClickOnLinks(contactRef)}
            >
              <span>Contact</span>
            </NavLink>
          </li>
          <li id="journey" className="navbar-item" ref={journeyRef}>
            <NavLink
              to="/mon-parcours"
              className="navbar-link"
              onClick={() => handleClickOnLinks(journeyRef)}
            >
              <span>Mon parcours</span>
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-button-wrapper">
          <button
            className="hamburger-button"
            onClick={toggleHamburgerButton}
            role="switch"
            type="button"
            aria-label="switch to navigation menu"
            aria-checked={isOpen}
            name="hamburger-button"
          >
            {isOpen ? (
              <ImCross color={`var(--cream)`} fontSize="24px" />
            ) : (
              <GiHamburgerMenu color={`var(--cream)`} fontSize="24px" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
