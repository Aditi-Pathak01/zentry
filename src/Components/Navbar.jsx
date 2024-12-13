import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap"

export default function Navbar() {
  const [audBtnClicked, setAudBtnClicked] = useState(false);
  const [isIndiActive, setIsIndiActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const audioRef = useRef(null);
  const navItems = ["Nexus", "Vault", "Prolouge", "About", "Contact"];
  const toggleAudio = () => {
    setAudBtnClicked((prev) => !prev);
    setIsIndiActive((prev) => !prev);
  };
  const { y: currentScrollY } = useWindowScroll();
  useEffect(() => {
    if (audBtnClicked) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audBtnClicked]);

  useEffect(() => {
    if (currentScrollY === 0) {
       // at top: show navbar and remove floating-nav
      setIsNavVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
       // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY,lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <div className="fixed top-4 z-50  w-screen h-16 border-none" ref={navRef}>
      <header className="absolute top-1/2 -translate-y-1/2  w-full">
        <nav className="flex items-center size-full justify-between p-4">
          <div className="flex items-center gap-5">
            <img
              src="../../public/img/logo.png"
              alt="Logo"
              className="w-10 object-cover"
            />
            <Button
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden flex-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((navLinks) => {
                return (
                  <a
                    key={navLinks}
                    className="nav-hover-btn"
                    href={`#${navLinks.toLowerCase()}`}
                  >
                    {navLinks}
                  </a>
                );
              })}
            </div>
          </div>
          <button
            className="ml-10 flex items-center space-x-0.5"
            onClick={toggleAudio}
          >
            <audio loop ref={audioRef} src="../../public/audio/loop.mp3" />
            {[1, 2, 3, 4].map((bar) => {
              return (
                <div
                  key={bar}
                  className={`indicator-line ${isIndiActive ? "active" : null}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              );
            })}
          </button>
        </nav>
      </header>
    </div>
  );
}
