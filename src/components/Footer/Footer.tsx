import { classNames } from "../../utils/classNames";
import Heading from "../Heading/Heading";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__wrap"]}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <div className={styles.col}>
            <Heading level="h5">Lorem ipsum</Heading>
            <ul className={styles.ul}>
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
          </div>
          <div className={styles.col}>
            <Heading level="h5">Lorem ipsum</Heading>
            <ul className={styles.ul}>
              <li>
                <a href="/">Section</a>
              </li>
              <li>
                <a href="/">Section</a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.col, styles["col--special"])}>
            <Heading level="h5">Lorem ipsum</Heading>
            <div className={styles.subgrid}>
              <div className={styles.col}>
                <span className={styles.title}>Title</span>
                <ul className={styles.ul}>
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
              </div>
              <div className={styles.col}>
                <span className={styles.title}>Title</span>
                <ul className={styles.ul}>
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
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <Heading level="h5">Lorem ipsum</Heading>
            <ul className={styles.ul}>
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
          </div>
          <div className={styles.col}>
            <Heading level="h5">Lorem ipsum</Heading>
            <ul className={styles.ul}>
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
          </div>
          <div className={styles.col}>
            <Heading level="h5">Lorem ipsum</Heading>
            <ul className={styles.ul}>
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
          </div>
        </nav>
      </div>
    </footer>
  );
};
