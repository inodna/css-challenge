import { useState } from "react";
import Heading from "../Heading/Heading";
import Image from "../../assets/rectangle-471.webp";
import { classNames } from "../../utils/classNames";
import Chevron from "../../assets/chevron.svg";
import styles from "./Accordion.module.scss";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Heading level="h2" className={styles.heading}>
        Lorem ipsum dolor sit amet
      </Heading>
      <div className={styles.accordion}>
        {[1, 2, 3].map((index) => (
          <article
            key={index}
            className={classNames(
              styles.article,
              activeIndex === index ? styles.active : ""
            )}
          >
            <button
              className={styles.button}
              onClick={() => handleButtonClick(index)}
            >
              Lorem ipsum
              <img
                src={Chevron}
                alt=""
                className={styles["button__icon"]}
                width="24"
                height="24"
              />
            </button>
            <div className={styles["article__content"]}>
              <img
                src={Image}
                alt="A laptop turned on half open"
                className={styles["article__img"]}
                width="300"
                height="156"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                amet tortor diam habitasse tristique morbi tempus. Auctor semper
                diam dignissim turpis nisl ultricies tellus mi. Metus.
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
