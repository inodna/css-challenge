import { ReactNode } from "react";
import styles from "./Section.module.scss";
import { classNames } from "../../utils/classNames";

interface SectionProps {
  children: ReactNode;
  variant: string;
}

export const Section = ({ children, variant }: SectionProps) => {
  return (
    <section className={classNames(styles.section, styles[variant])}>
      {children}
    </section>
  );
};
