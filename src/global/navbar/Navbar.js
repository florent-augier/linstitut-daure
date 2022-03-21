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
  const microRef = useRef(null);
  const bodyCareRef = useRef(null);
  const dermoRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = [
    homeRef,
    lashRef,
    microRef,
    bodyCareRef,
    dermoRef,
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
      <div id="wrapper-menu">
        <span>MENU</span>
      </div>
      <nav ref={navbarRef} role="navigation">
        <ul>
          <li className="navbar-item" ref={homeRef}>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => handleClickOnLinks(homeRef)}
            >
              <span>Accueil</span>
            </NavLink>
          </li>
          <li className="navbar-item" ref={lashRef}>
            <NavLink
              to="/cils"
              className="navbar-link"
              onClick={() => handleClickOnLinks(lashRef)}
            >
              <span>Extensions de Cils</span>
            </NavLink>
          </li>
          <li className="navbar-item" ref={microRef}>
            <NavLink
              to="/micropigmentation"
              className="navbar-link"
              onClick={() => handleClickOnLinks(microRef)}
            >
              <span>Micropigmentation</span>
            </NavLink>
          </li>

          <li className="navbar-item" ref={dermoRef}>
            <NavLink
              to="/dermopigmentation"
              className="navbar-link"
              onClick={() => handleClickOnLinks(dermoRef)}
            >
              <span>Dermopigmentation</span>
            </NavLink>
          </li>
          <li className="navbar-item" ref={bodyCareRef}>
            <NavLink
              to="/soins-corporel"
              className="navbar-link"
              onClick={() => handleClickOnLinks(bodyCareRef)}
            >
              <span>Soins Corporel</span>
            </NavLink>
          </li>
          <li className="navbar-item" ref={contactRef}>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => handleClickOnLinks(contactRef)}
            >
              <span>Contact</span>
            </NavLink>
          </li>
          <li className="navbar-item" ref={journeyRef}>
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
