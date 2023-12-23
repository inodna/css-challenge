import { useState, useEffect, useRef } from "react";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";
import { classNames } from "../../utils/classNames";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const bodyRef = useRef(document.body);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const body = bodyRef.current;

    const handleResize = () => {
      if (window.matchMedia("(max-width: 1279px)").matches && isNavOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.removeProperty("overflow");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen, bodyRef]);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        styles.header,
        isNavOpen ? styles.isActive : "",
        isScrollingUp ? styles.up : styles.down
      )}
    >
      <div className={styles["header__wrap"]}>
        <Logo />
        <nav>
          <ul>
            <li>
              <a href="/">Section</a>
            </li>
            <li>
              <a href="/">Section</a>
            </li>
            <li>
              <a href="/">Section</a>
            </li>
            <li>
              <a href="/">Section</a>
            </li>
            <li>
              <a href="/">Section</a>
            </li>
          </ul>
        </nav>
        <button
          className={styles.button}
          aria-label={`${!isNavOpen ? "Open" : "Close"} main navigation`}
          onClick={handleClick}
        >
          <span className={styles["hamburger-inner"]}></span>
        </button>
      </div>
    </header>
  );
};
